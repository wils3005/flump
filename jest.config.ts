import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  collectCoverage: true,
  collectCoverageFrom: [
    'lib/**/*.ts',
    '!lib/schemas/*.ts',
  ],
  testEnvironment: 'node',
  transform: {
    '^.+.ts$': ['ts-jest', {}],
  },
};

export default config;
