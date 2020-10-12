module.exports = {
    verbose: true,
    coveragePathIgnorePatterns: [
      '/node_modules/',
      'tests/.*.js$'
    ],
    moduleNameMapper: {
      '@/graphql/(.*)': '<rootDir>/graphql/$1',
      '@/loaders/(.*)': '<rootDir>/loaders/$1',
      '@/services/(.*)': '<rootDir>/services/$1',
      '~/(.*)': '<rootDir>/$1'
    }
  };
  