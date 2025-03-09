import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv/config';


export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    retries: 0,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
        reporter: [['list'], ['html', { outputFile: 'test-results.html' }]],
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'setup',
            testMatch: '**/*.setup.js'
          },
        {
            name: 'chromium',
            use: { browserName: 'chromium',
                storageState: 'playwright/.auth/user1.json'
             },
            dependencies: ['setup'],
        },
        // {
        //     name: 'firefox',
        //     use: { browserName: 'firefox' ,
        //     storageState: 'playwright/.auth/standard_user.json'
        //      },
        //     dependencies: ['setup'],
        // },
        // {
        //     name: 'webkit',
        //     use: { browserName: 'webkit',
        //         storageState: 'playwright/.auth/standard_user.json'
        //     },
        //    dependencies: ['setup'],
        // },
    ]
});