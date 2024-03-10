import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      exclude: ["node_modules", "test"],
      provider: "v8",
    },
  },
  plugins: [tsconfigPaths()],
});
