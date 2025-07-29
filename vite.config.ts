import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { analyzer } from "vite-bundle-analyzer";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    analyzer({ analyzerMode: "static", openAnalyzer: false }),
    compression({
      ext: '.gz',
      algorithm: 'gzip',
      deleteOriginFile: false,
      verbose: true,
      threshold: 0,
    }),
    compression({
      ext: '.br',
      algorithm: 'brotliCompress',
      deleteOriginFile: false,
      verbose: true,
      threshold: 0,
    }),
  ],
});