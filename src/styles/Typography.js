import { css } from 'react-emotion'
import Layout from './Layout'

export const font = {
  base: '"Nunito", sans-serif',
  title: '"Nunito", sans-serif',
  weight: {
    regular: 400,
    bold: 700,
    black: 900,
  },
}

export default {
  font,
  title: css({
    fontFamily: font.title,
    fontSize: Layout.calcSpace(12),
    fontWeight: font.weight.black,
    margin: `0 0 ${Layout.calcSpace(4)} 0`,
    '@media (max-width: 420px)': {
      fontSize: Layout.calcSpace(7),
    },
  }),
  heading: css({
    fontFamily: font.title,
    fontSize: Layout.calcSpace(6),
    fontWeight: font.weight.black,
    margin: `0 0 ${Layout.calcSpace(4)} 0`,
    '@media (max-width: 420px)': {
      fontSize: Layout.calcSpace(4),
    },
  }),
  subheading: css({
    fontFamily: font.title,
    fontSize: Layout.calcSpace(3),
    fontWeight: font.weight.black,
    margin: `0 0 ${Layout.calcSpace(4)} 0`,
  }),
  paragraph: css({
    fontFamily: font.base,
    fontSize: Layout.calcSpace(2),
    fontWeight: font.weight.regular,
    margin: `0 0 ${Layout.calcSpace(4)} 0`,
  }),
  label: css({
    fontFamily: font.base,
    fontSize: Layout.calcSpace(2),
    fontWeight: font.weight.bold,
    margin: 0,
  }),
  link: css({
    fontFamily: font.base,
    fontSize: Layout.calcSpace(2),
    fontWeight: font.weight.bold,
    margin: 0,
    textDecoration: 'none',
    cursor: 'pointer',
  }),
}
