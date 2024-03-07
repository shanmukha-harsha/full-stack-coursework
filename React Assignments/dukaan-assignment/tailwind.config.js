/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}", "./src/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#146eb4"
        }
      }
    },
  },
  plugins: [],
}

