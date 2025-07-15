// .prettierrc.cjs
module.exports = {
  // Print width: wrap lines at 100 characters (common choice)
  printWidth: 100,
  // Tab width: use 2 spaces for indentation
  tabWidth: 2,
  // Use tabs instead of spaces: false (use spaces)
  useTabs: false,
  // Semicolons: always add semicolons at the end of statements
  semi: false,
  // Single quotes: use single quotes instead of double quotes for strings
  singleQuote: true,
  // JSX single quotes: use single quotes instead of double quotes in JSX
  jsxSingleQuote: false, // Often left as false to match HTML attributes
  // Trailing commas: add trailing commas for ES5-compatible objects, arrays, etc.
  trailingComma: 'es5',
  // Bracket spacing: Print spaces between brackets in object literals
  bracketSpacing: true,
  // JSX bracket same line: Put the > of a multi-line JSX element at the end of the last line
  bracketSameLine: false,
  // Arrow function parentheses: Omit parentheses when possible for single parameter arrow functions
  arrowParens: 'always', // 'always' is recommended for consistency and easier refactoring
  // Prose wrap: Wrap markdown text at printWidth
  proseWrap: 'preserve',
  // HTML whitespace sensitivity: How Prettier handles whitespace in HTML
  htmlWhitespaceSensitivity: 'css',
  // Vue files script and style tags indentation
  vueIndentScriptAndStyle: false,
  // End of line: enforce LF for cross-platform consistency
  endOfLine: 'lf',
  // Require pragma: Don't require a special comment to format files
  requirePragma: false,
  // Insert pragma: Don't insert a special comment at the top of formatted files
  insertPragma: false,
}
