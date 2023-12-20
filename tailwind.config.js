/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        backgroundImage: {
            gradient: "radial-gradient(circle at 100%, rgba(82,84,164,1) 10%, rgba(247,160,130,1) 40%, rgba(178,166,215,1) 55%)",
        },
    },
  },
  plugins: [],
}

