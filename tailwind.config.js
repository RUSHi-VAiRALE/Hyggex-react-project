/** @type {import('tailwindcss').Config} */
    module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "whitesmoke": "#f9f9f9",
        "dodgerblue": "#217eec",
        "gray": "#28262c",
        "dimgray": "#696671",
        "darkslategray": {
          "100": "#3a3740",
          "200": "#202b37"
        },
        "white": "#fff",
        "silver": "#c4c4c4",
        "darkslateblue": "#06286e"
      },
      "spacing": {},
      "fontFamily": {
        "med": "Inter",
        "lato": "Lato",
        "montserrat": "Montserrat"
      },
      "borderRadius": {
        "23xl-5": "42.5px"
      }
    },
    "fontSize": {
      "base": "16px",
      "lgi": "19px",
      "xl": "20px",
      "lg": "18px",
      "inherit": "inherit"
    },
    "screens": {
      "mq750": {
        "raw": "screen and (max-width: 750px)"
      },
      "mq675": {
        "raw": "screen and (max-width: 675px)"
      },
      "mq450": {
        "raw": "screen and (max-width: 450px)"
      }
    }
  },
  "corePlugins": {
    "preflight": false
  }
}