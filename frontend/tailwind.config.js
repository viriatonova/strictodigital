const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                480: "30rem",
            },
            fontFamily: {
                title: ['"Open Sans"', ...defaultTheme.fontFamily.serif],
                sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
                mono: ['"DM Mono"', ...defaultTheme.fontFamily.mono],
            },
            backgroundColor: {
                skin: {
                    base: "var(--color-base)",
                    palette01: "var(--color-palette01)",
                    palette02: "var(--color-palette02)",
                    palette03: "var(--color-palette03)",
                    palette04: "var(--color-palette04)",
                },
            },
            textColor: {
                skin: {
                    title: "var(--color-text-title)",
                    subtitles: "var(--color-text-subtitles)",
                    base: "var(--color-text-base)",
                    inverted: "var(--color-text-inverted)",
                    highlight: "var(--color-text-highlight)",
                    disabled: "var(--color-text-disabled)",
                },
            },
            borderColor: {
                skin: {
                    base: "var(--color-attributes-base)",
                    inverted: "var(--color-attributes-inverted)",
                    highlight: "var(--color-attributes-highlight)",
                    disabled: "var(--color-attributes-disabled)",
                },
            },
            ringColor: {
                skin: {
                    base: "var(--color-attributes-base)",
                    inverted: "var(--color-attributes-inverted)",
                    highlight: "var(--color-attributes-highlight)",
                },
            },
        },
    },
    plugins: [],
};
