/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Monaco"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        // forest: "#2E8B57",
        forest: "#028391",
        blob1: "#028391",
        blob2: "#028391",
        blob3: "#028391",
        blob4: "#028391",
        lettering: "#445069",
      },
      animation: {
        slideIn1: "slideIn 1s ease-in-out forwards 0.1s",
        slideIn2: "slideIn 1s ease-in-out forwards 0.25s",
        slideIn3: "slideIn 1s ease-in-out forwards 0.4s",
        slideIn4: "slideIn 1s ease-in-out forwards 0.55s",
        slideIn5: "slideIn 1s ease-in-out forwards 0.7s",
        slideIn9: "slideIn 1s ease-in-out forwards 0.85s",
        slideIn6: "slideIn 1s ease-in-out forwards 1s",
        slideIn7: "slideIn 1s ease-in-out forwards 1.5s",
        slideIn8: "slideIn 1s ease-in-out forwards 2s",
        blob: "blob 4s infinite",
        blob2: "blob2 3s infinite",
        blob3: "blob3 4s infinite",
        blob4: "blob4 5s infinite",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-30px, 30px) scale(1.4)",
          },
          "66%": {
            transform: "translate(-20px, 30px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-20px, 30px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(0.8)",
          },
        },
        blob3: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, 20px) scale(1.1)",
          },
          "66%": {
            transform: "translate(35px, 35px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(0.8)",
          },
        },
        blob4: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 30px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
