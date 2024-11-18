/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        './src/**/*.{ts,tsx,js,jsx}',
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
