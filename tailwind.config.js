module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "nielsen-blue": "#002041",
        "nielsen-light-blue": "#2765f0",
        "nielsen-purple": "#6e37fa",
        "nielsen-pink": "#b30095",
        "nielsen-orange": "#eb6e00",
        "nielsen-links": "#4d577d",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        'inter-ui': ["Inter UI", "sans-serif"]
      },
      animation: {
        "slide-in-down": "slideinDown 750ms ease",
        "slide-in-up": "slideinUp 750ms ease",
        "fade-in": "fadeIn 0.4s ease-in-out",
        "fade-in-up": "fadeInUp 500ms ease",
        "fade-out-down": "fadeOutDown 500ms ease"
      },
      keyframes: {
        slideinDown: {
          "from": {
            transform: "translate3d(0, -100%, 0)",
            visibility: "visible"
          },
          "to": {
            transform: "translate3d(0, 0, 0)",
          }
        },
        slideinUp: {
          "from": {
            transform: "translate3d(0, 100%, 0)",
            visibility: "visible"
          },
          "to": {
            transform: "translate3d(0, 0, 0)",
          }
        },
        fadeIn: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "100%"
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 100%, 0)"
          },
          "100%": {
            transform: "translate3d(0, 0 , 0)"
          }
        },
        fadeOutDown: {
          "0%": {
            opacity: "1"
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(0, 100%, 0)"
          }
        }
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};