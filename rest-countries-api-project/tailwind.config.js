/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: 'hsl(0, 0%, 98%)',
        darkBackground: 'hsl(207, 26%, 17%)',
        lightText: 'hsl(200, 15%, 8%)',
        darkText: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}





// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
