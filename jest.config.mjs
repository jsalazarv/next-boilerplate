import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

export default createJestConfig({
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/config'],
  setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
    '^@mocks/(.*)$': ['<rootDir>/src/_mocks_/$1'],
  },
});
