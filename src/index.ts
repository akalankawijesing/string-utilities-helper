/**
 * Capitalizes the first letter of a string
 * @param str - The input string
 * @returns The string with the first letter capitalized
 */
export function capitalize(str: string): string {
  if (!str || typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts a string to camelCase
 * @param str - The input string
 * @returns The camelCase version of the string
 */
export function toCamelCase(str: string): string {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

/**
 * Converts a string to kebab-case
 * @param str - The input string
 * @returns The kebab-case version of the string
 */
export function toKebabCase(str: string): string {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to snake_case
 * @param str - The input string
 * @returns The snake_case version of the string
 */
export function toSnakeCase(str: string): string {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param str - The input string
 * @param length - Maximum length of the string
 * @param ellipsis - String to append when truncated (default: '...')
 * @returns The truncated string
 */
export function truncate(str: string, length: number, ellipsis: string = '...'): string {
  if (!str || typeof str !== 'string') return str;
  if (str.length <= length) return str;
  return str.substring(0, length - ellipsis.length) + ellipsis;
}

/**
 * Counts the number of words in a string
 * @param str - The input string
 * @returns The number of words
 */
export function wordCount(str: string): number {
  if (!str || typeof str !== 'string') return 0;
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Removes extra whitespace from a string
 * @param str - The input string
 * @returns The string with normalized whitespace
 */
export function normalizeWhitespace(str: string): string {
  if (!str || typeof str !== 'string') return str;
  return str.replace(/\s+/g, ' ').trim();
}

/**
 * Checks if a string is a valid email format
 * @param str - The input string
 * @returns True if the string is a valid email format
 */
export function isValidEmail(str: string): boolean {
  if (!str || typeof str !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

/**
 * Generates a random string of specified length
 * @param length - Length of the random string
 * @param charset - Character set to use (default: alphanumeric)
 * @returns Random string
 */
export function randomString(length: number, charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}