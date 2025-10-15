module.exports = {
    testEnvironment: 'jsdom',
    setupFiles: ['<rootDir>/src/test/jest.setup.js'],
    setupFilesAfterEnv: ['<rootDir>/src/test/setupTest.js'],
    transform: {'^.+\\.(js|jsx)$': 'babel-jest'},
    moduleFileExtensions: ['js', 'jsx', 'json'],
    transformIgnorePatterns: [
        'node_modules/(?!(msw|@mswjs|@bundled-es-modules|until-async|strict-event-emitter|outvariant|nanoid)/)'
    ],
    moduleNameMapper: {
        '^msw/node$': '<rootDir>/node_modules/msw/lib/node/index.js',
        '^msw$': '<rootDir>/node_modules/msw/lib/core/index.js',
        '^@mswjs/interceptors/ClientRequest$': '<rootDir>/node_modules/@mswjs/interceptors/lib/node/interceptors/ClientRequest/index.js',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};