import * as path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    include: ["./test/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@sqlfx/sql": path.join(__dirname, "../sql/src"),
      "@sqlfx/pg/test": path.join(__dirname, "test"),
      "@sqlfx/pg": path.join(__dirname, "src"),
    },
  },
})
