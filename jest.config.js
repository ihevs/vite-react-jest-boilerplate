module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js'
  }
  //   setupFiles: ["./jest.setup.js"],
}
