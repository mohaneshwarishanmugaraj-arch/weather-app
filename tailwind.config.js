export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#F0FDF4",
        lightCard: "#DCFCE7",
        darkBg: "#064E3B",
        darkCard: "#065F46",
        primary: "#22C55E",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        cloud: "cloud 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        cloud: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
    },
  },
  plugins: [],
}
