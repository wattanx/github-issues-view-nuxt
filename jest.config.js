module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.(t|j)s?$': ['@swc/jest'],
    '^.+\\.mjs?$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  testEnvironment: 'jsdom',
  collectCoverage: false,
  transformIgnorePatterns: ['/node_modules/(?!(@nuxtjs/composition-api)/)'],
};
