const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                480: "30rem",
            },
            colors: {
                base: "var(--color-base)",
                secundary: "var(--color-secundary)",
                inverted: "var(--color-inverted)",
            },
            fontFamily: {
                title: ['"Roboto Condensed"', ...defaultTheme.fontFamily.serif],
                sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
                mono: ['"DM Mono"', ...defaultTheme.fontFamily.mono],
                didone: ['"Antic Didone"', "serif"],
            },
            backgroundColor: {
                skin: {
                    base: "var(--color-base)",
                    primary: "var(--color-primary)",
                    secundaru: "var(--color-secundaru)",
                    tertiary: "var(--color-tertiary)",
                    inverted: "var(--color-inverted)",
                    disabled: "var(--color-disabled)",
                    highlight: "var(--color-highlight)",
                    error: "var(--color-error)",
                    warning: "var(--color-warning)",
                },
            },
            textColor: {
                skin: {
                    title: "var(--color-tittle)",
                    subtitle: "var(--color-subtitle)",
                    text: "var(--color-text)",
                    mono: "var(--color-mono)",
                    quote: "var(--color-quote)",
                    inverted: "var(--color-inverted)",
                    highlight: "var(--color-highlight)",
                },
            },
            borderColor: {
                skin: {
                    base: "var(--color-base)",
                    primary: "var(--color-primary)",
                    secundaru: "var(--color-secundaru)",
                    tertiary: "var(--color-tertiary)",
                    inverted: "var(--color-inverted)",
                    disabled: "var(--color-disabled)",
                    highlight: "var(--color-highlight)",
                    error: "var(--color-error)",
                    warning: "var(--color-warning)",
                },
            },
            ringColor: {
                skin: {
                    base: "var(--color-base)",
                    primary: "var(--color-primary)",
                    secundaru: "var(--color-secundaru)",
                    tertiary: "var(--color-tertiary)",
                    inverted: "var(--color-inverted)",
                    disabled: "var(--color-disabled)",
                    highlight: "var(--color-highlight)",
                    error: "var(--color-error)",
                    warning: "var(--color-warning)",
                },
            },
        },
    },
    plugins: [],
};
