/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "rgba(255, 255, 255, 0.03);",
        "50": "#06071B",
        "100": "#0E0F0C",
      },
      white: {
        "50": "#EFEFEF",
        "100": "#fff",
        "200": "#6D98FF",
      },
      blue: {
        "50": "#20BFF7",
        "100": "#4776E6",
      },
      red: {
        "50": "#FF4880",
        "100": "#D93C3C",
      },
      yellow: {
        "100": "#E2B01C",
      },
      purple: {
        "100": "#C689F9",
      }
    },
    fontFamily: {
      'poppins': ["'Poppins', sans-serif"]
    }
  },
  plugins: [],
}
