import React, { PropTypes } from 'react'
import { ThemeProvider } from 'styled-components'

const descriptionFont = "'Amatic SC', cursive"

const base = {
  color: {
    default: "#fff",
    olive: "#BDCD4F",
    grape: "#9FA4C9",
    wood: "#D6603B",
  },
  app: {
    maxWidth: 1200,
  },
  navbar: {
    color: "#000",
    padding: 10,
    title: {
      color: "#fff",
      size: 40
    },
    payoff: {
      color: "#fff",
      size: 20
    },
    contact: {
      font: descriptionFont,
      color: "#fff",
      size: 28,
    }
  }
}

const desk = {
  visual: {
    content: {
      bottom: 100
    }
  },
  heading: {
    size: 80,
  },
  subheading: {
    size: 50,
  },
  price: {
    size: 60
  },
  text: {
    font: descriptionFont,
    size: 30,
    lineHeight: 40,
  },
  description: {
    font: descriptionFont,
    size: 24,
    lineHeight: 40,
  },
  content: {
    background: '#2F3132',
    padding: "60px 0",
  },
  info: {
    width: 1/3,
    padding: "0 30px",
    margin: {
      top: 0,
      bottom: 0,
    }
  }
}

const tablet = {
  visual: {
    content: {
      bottom: 100
    }
  },
  heading: {
    size: 50,
  },
  subheading: {
    size: 30
  },
  price: {
    size: 60
  },
  text: {
    font: descriptionFont,
    size: 30,
    lineHeight: 40,
  },
  description: {
    font: descriptionFont,
    size: 24,
    lineHeight: 30,
  },
  content: {
    background: '#2F3132',
    padding: "60px 0",
  },
  info: {
    width: 1/3,
    padding: "60px 30px",
    margin: {
      top: 30,
      bottom: 30,
    }
  }
}

const mobile = {
  visual: {
    content: {
      bottom: 40
    }
  },
  heading: {
    size: 40
  },
  subheading: {
    size: 30,
  },
  price: {
    size: 60
  },
  text: {
    font: descriptionFont,
    size: 20,
    lineHeight: 20,
  },
  description: {
    font: descriptionFont,
    size: 24,
    lineHeight: 36,
  },
  content: {
    background: '#2F3132',
    padding: "60px 0",
  },
  info: {
    width: 1,
    padding: "20px",
    margin: {
      top: 30,
      bottom: 30,
    }
  }
}

const getTheme = clientWidth => {

  if(clientWidth > 1023) return {...base, ...desk}
  if(clientWidth > 799) return {...base, ...tablet}

  return {...base, ...mobile}
}

const ResponsiveThemeProvider = ({children}, { clientWidth }) => (
  <ThemeProvider theme={getTheme(clientWidth)}>{ children }</ThemeProvider>
)

ResponsiveThemeProvider.contextTypes = {
  clientWidth: PropTypes.number.isRequired,
}

export default ResponsiveThemeProvider
