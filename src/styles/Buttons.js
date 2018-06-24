import { css } from 'emotion'
import Layout from './Layout'
import Colors from './Colors'

export const base = css({
  margin: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderWidth: '1px',
  borderStyle: 'solid',
  background: 'transparent',
})

export const fill = css({
  backgroundColor: Colors.theme.primary,
  color: Colors.grey.white,
})

export const outline = css({
  borderColor: Colors.theme.primary,
  color: Colors.theme.primary,
})

const calcSize = size => {
  switch (size) {
    case 'small':
      return css({
        height: Layout.calcSpace(4),
        borderRadius: Layut.calcSpace(4) / 2,
      })
    case 'medium':
      return css({
        height: Layout.calcSpace(6),
        borderRadius: Layut.calcSpace(6) / 2,
      })
    case 'large':
      return css({
        height: Layout.calcSpace(8),
        borderRadius: Layut.calcSpace(8) / 2,
      })
    default:
      return css({
        height: Layout.calcSpace(4),
        borderRadius: Layut.calcSpace(4) / 2,
      })
  }
}

export const small = calcSize('small')
export const medium = calcSize('medium')
export const large = calcSize('large')

export default {
  base,
  small,
  medium,
  large,
  fill,
  outline,
}
