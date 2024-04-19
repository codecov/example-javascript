import { defineConfig } from 'vitest/config'
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineConfig({
  plugins: [
    // Put the Codecov vite plugin after all other plugins
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "example-javascript",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json'],
    },
  },
})
