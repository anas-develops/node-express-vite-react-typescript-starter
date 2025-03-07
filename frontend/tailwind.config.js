/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                lg: "3.4rem",
            },
        },
        extend: {
            colors: {
                gray: {
                    customWarm: "#f4f4f4",
                    customWarmDark: "#c2c2c2",
                },
                amber: {
                    custom200: "#FFFFE0",
                    custom500: "#FCE992",
                },
            },
        },
    },
    plugins: [],
};
