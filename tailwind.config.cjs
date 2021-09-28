const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
    mode: "jit",
    purge: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            heading: ["Montserrat", "Poppins", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            spacing: {
                "1/3screen": "33vh",
            },

            maxWidth: {
                "1/4": "25vw",
                "1/2": "50vw",
                "3/4": "75vw",
            },
            colors: {
                background: {
                    DEFAULT: "#292c45",
                    light: "#2f324d",
                },
                primary: "#acb4bf",
                secondary: "#FFFFFF",
                highlight: "#A0C1E6",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
    variants: {
        scrollbar: ["rounded"],
    },
};

module.exports = config;
