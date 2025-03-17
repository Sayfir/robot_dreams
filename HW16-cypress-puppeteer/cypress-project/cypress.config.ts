import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/e2e/**/*.{js,ts,feature}',
        defaultCommandTimeout: 6000,
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/reports/screenshots',
        trashAssetsBeforeRuns: true,
        viewportHeight: 1080,
        viewportWidth: 1920,
        retries: {
            runMode: 2,
            openMode: 0
        }
    }
});
