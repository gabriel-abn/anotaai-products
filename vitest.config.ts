import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["**/*.test.ts", "**/*.spec.ts"],
    coverage: {
      exclude: ["node_modules", "tests"],
      provider: "v8",
    },
  },
  plugins: [tsconfigPaths()],
});
