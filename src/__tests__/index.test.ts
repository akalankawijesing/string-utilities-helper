import {
  capitalize,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  truncate,
  wordCount,
  normalizeWhitespace,
  isValidEmail,
  randomString
} from '../index';

describe('String Utilities', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('hello world')).toBe('Hello world');
      expect(capitalize('HELLO WORLD')).toBe('Hello world');
      expect(capitalize('hELLO wORLD')).toBe('Hello world');
    });

    it('should handle edge cases', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('toCamelCase', () => {
    it('should convert to camelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
      expect(toCamelCase('Hello World')).toBe('helloWorld');
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });
  });

  describe('toKebabCase', () => {
    it('should convert to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world');
      expect(toKebabCase('Hello World')).toBe('hello-world');
      expect(toKebabCase('hello_world')).toBe('hello-world');
    });
  });

  describe('toSnakeCase', () => {
    it('should convert to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
      expect(toSnakeCase('Hello World')).toBe('hello_world');
      expect(toSnakeCase('hello-world')).toBe('hello_world');
    });
  });

  describe('truncate', () => {
    it('should truncate strings longer than the specified length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
      expect(truncate('hello world', 8, '***')).toBe('hello***');
    });

    it('should not truncate strings shorter than or equal to the specified length', () => {
      expect(truncate('hello', 10)).toBe('hello');
      expect(truncate('hello world', 11)).toBe('hello world');
    });
  });

  describe('wordCount', () => {
    it('should count words correctly', () => {
      expect(wordCount('hello world')).toBe(2);
      expect(wordCount('  hello   world  ')).toBe(2);
      expect(wordCount('hello')).toBe(1);
      expect(wordCount('')).toBe(0);
      expect(wordCount('   ')).toBe(0);
    });
  });

  describe('normalizeWhitespace', () => {
    it('should normalize whitespace', () => {
      expect(normalizeWhitespace('  hello   world  ')).toBe('hello world');
      expect(normalizeWhitespace('hello\n\tworld')).toBe('hello world');
    });
  });

  describe('isValidEmail', () => {
    it('should validate email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name+tag@example.co.uk')).toBe(true);
      expect(isValidEmail('invalid.email')).toBe(false);
      expect(isValidEmail('invalid@')).toBe(false);
      expect(isValidEmail('@invalid.com')).toBe(false);
    });
  });

  describe('randomString', () => {
    it('should generate random strings of correct length', () => {
      expect(randomString(10)).toHaveLength(10);
      expect(randomString(5)).toHaveLength(5);
      expect(randomString(0)).toHaveLength(0);
    });

    it('should use custom charset', () => {
      const result = randomString(10, 'abc');
      expect(result).toMatch(/^[abc]+$/);
      expect(result).toHaveLength(10);
    });
  });
});