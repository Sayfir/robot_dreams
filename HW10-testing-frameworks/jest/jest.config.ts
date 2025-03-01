import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    coverageProvider: 'v8',
    testMatch: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            useESM: true // Enable support for ES Modules
        }
    },
    extensionsToTreatAsEsm: ['.ts'], // Treat `.ts` files as ESM
    transformIgnorePatterns: [
        'node_modules/(?!your-package-to-transform)' // Add specific packages if needed
    ],
    preset: 'ts-jest/presets/default-esm' // Use ESM preset
};

export default config;
