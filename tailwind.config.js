/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '100px':'100px',
        '200px':'200px',
        '300px':'300px',
        '400px':'400px',
        '500px':'500px',
        '600px':'600px',
        '700px':'700px',
        '800px':'800px',
        '900px':'900px',
        '1000px':'1000px',
        '1280px':'1280px',
        '50vw':'50vw',
        '100vh':'100vh'
      },
      color:{
        '495bc0':'#495bc0',
        '060922':'#060922',
        '#101c36':'#101c36'
      }
    },
  },
  plugins: [],
}

