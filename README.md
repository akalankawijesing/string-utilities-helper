# String Utilities Helper

A lightweight utility library for common string operations in TypeScript/JavaScript.

## Installation

```bash
npm install string-utilities-helper
```

## Usage

```typescript
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
} from 'string-utilities-helper';

// Capitalize first letter
capitalize('hello world'); // "Hello world"

// Convert to camelCase
toCamelCase('hello world'); // "helloWorld"

// Convert to kebab-case
toKebabCase('helloWorld'); // "hello-world"

// Convert to snake_case
toSnakeCase('Hello World'); // "hello_world"

// Truncate with ellipsis
truncate('hello world', 8); // "hello..."

// Count words
wordCount('hello world'); // 2

// Normalize whitespace
normalizeWhitespace('  hello   world  '); // "hello world"

// Validate email
isValidEmail('test@example.com'); // true

// Generate random string
randomString(10); // "aBc123XyZ9"
```

## API Reference

### `capitalize(str: string): string`
Capitalizes the first letter of a string and converts the rest to lowercase.

### `toCamelCase(str: string): string`
Converts a string to camelCase format.

### `toKebabCase(str: string): string`
Converts a string to kebab-case format.

### `toSnakeCase(str: string): string`
Converts a string to snake_case format.

### `truncate(str: string, length: number, ellipsis?: string): string`
Truncates a string to a specified length and adds ellipsis (default: '...').

### `wordCount(str: string): number`
Counts the number of words in a string.

### `normalizeWhitespace(str: string): string`
Removes extra whitespace from a string and trims it.

### `isValidEmail(str: string): boolean`
Checks if a string is a valid email format using a simple regex.

### `randomString(length: number, charset?: string): string`
Generates a random string of specified length using the provided character set (default: alphanumeric).

## Development

### Setup
```bash
npm install
```

### Build
```bash
npm run build
```

### Test
```bash
npm test
npm run test:watch  # Watch mode
```

### Lint
```bash
npm run lint
```

### Format
```bash
npm run format
```

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Changelog

### 1.0.0
- Initial release with basic string utility functions
