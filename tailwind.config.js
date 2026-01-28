/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f3ec",
        mist: "#eef3ee",
        sage: "#cbd6c1",
        moss: "#8a9b82",
        forest: "#1f3b2c",
        clay: "#d8c8b4",
        charcoal: "#1f1d1a",
        sun: "#f2ddbe"
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", "ui-serif", "serif"],
        body: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 60px -35px rgba(31, 59, 44, 0.45)",
        lift: "0 18px 45px -30px rgba(31, 59, 44, 0.4)"
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem"
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at top right, rgba(203, 214, 193, 0.45), rgba(247, 243, 236, 0))",
        "soft-linear":
          "linear-gradient(135deg, rgba(247, 243, 236, 0.85), rgba(239, 245, 239, 0.95))"
      }
    }
  },
  plugins: []
};
