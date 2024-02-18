// tailwind.config.js

module.exports = {
  purge: [], // Añade aquí las rutas a tus archivos JSX/HTML para purgar clases no utilizadas en producción
  darkMode: false, // O 'media' o 'class'
  theme: {
    extend: {
      colors: {
        // Puedes agregar tus propios colores personalizados aquí
        primary: '#FF0000',
        secondary: '#00FF00',
      },
      fontFamily: {
        // Puedes agregar tus propias fuentes aquí
        sans: ['Roboto', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      // Puedes extender o modificar cualquier otra configuración aquí
    },
  },
  variants: {
    extend: {
      // Puedes configurar variantes adicionales para pseudo-clases aquí
    },
  },
  plugins: [
    // Puedes agregar plugins de terceros aquí
  ],
}
