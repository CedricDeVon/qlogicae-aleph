import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
    plugins: [sveltekit()],

    test: {
        projects: [
            {
                extends: true,
                test: {
                    name: "unit",
                    include: ["src/**/*.test.ts"],
                    exclude: ["src/**/*.svelte.spec.ts"],
                },
            },
            {
                extends: true,
                test: {
                    name: "browser",
                    include: ["src/**/*.svelte.spec.ts"],
                    browser: {
                        enabled: true,
                        provider: playwright(),
                        instances: [
                            {
                                browser: "chromium",
                            },
                        ],
                    },
                },
            },
        ],
    },
});