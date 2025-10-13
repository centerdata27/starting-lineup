module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/test/setupTest.js'],
    transform: {'^.+\\.[t]sx?$': 'babel-jest'},
    moduleFileExtensions: ['js', 'jsx', 'json'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identify-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};