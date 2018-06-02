const {defaults} = require('jest-config');

module.exports = {
  setupFiles: [
    '<rootDir>/testSetup.js'
  ],
  testRegex: '(/__tests__/.*|((\\.|-)test|(\\.|-)spec))\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dll/',
    '/__fixtures__/'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/global.d.ts'],
  coverageReporters: ['text', 'html', 'json'],
};
