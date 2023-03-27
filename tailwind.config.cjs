/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    darkBlue: {
                        100: "hsl(219, 30%, 18%)",
                        200: "hsl(217, 28%, 15%)",
                        300: "hsl(218, 28%, 13%)",
                        700: "hsl(216, 53%, 9%)",
                    },
                },
                accent: {
                    cyan: "hsl(176, 68%, 64%)",
                    blue: "hsl(198, 60%, 50%)",
                    red: "hsl(0, 100%, 63%)",
                },
            },
            fontFamily: {
                header: "'Raleway', sans-serif",
                body: "'Open Sans', sans-serif",
            },
        },
    },
    plugins: [],
};
