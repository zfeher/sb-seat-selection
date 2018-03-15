module.exports = {
  moduleFileExtensions: ['js', 'vue', 'json'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js?$': 'babel-jest',
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  snapshotSerializers: ['jest-serializer-vue'],

  rootDir: 'src',
}
