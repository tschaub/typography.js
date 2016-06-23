// @flow
import type { OptionsType } from '../Types.js'
import merge from 'lodash/merge'
import gray from 'gray-percentage'

const theme: OptionsType = {
  baseFontSize: '14px',
  baseLineHeight: '24px',
  modularScales: [
    {
      scale: 'minor sixth',
    },
  ],
  googleFonts: [
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  headerGray: 27,
  bodyGray: 27,
  headerWeight: '700',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: (styles, setStyles, { adjustFontSizeTo, rhythm }, options) => {
    const newStyles = {
      blockquote: {
        fontStyle: 'italic',
        paddingLeft: rhythm(1),
        paddingRight: rhythm(1),
        paddingTop: rhythm(1),
        paddingBottom: rhythm(1),
      },
      dl: {
        marginLeft: rhythm(1),
        marginRight: rhythm(1),
      },
      'ol,ul': {
        marginLeft: 0,
      },
      ol: {
        listStyle: 'decimal outside',
      },
      ul: {
        listStyle: 'disc outside',
      },
      li: {
        marginLeft: rhythm(1.5),
      },
      table: {
        ...adjustFontSizeTo('12px'),
        color: gray(46),
      },
      th: {
        fontWeight: options.boldWeight,
        textTransform: 'uppercase',
        color: gray(39),
      },
      a: {
        color: '#21759b',
      },
      'a:hover': {
        color: '#0f3647',
      },
      'a:visited': {
        color: '#9f9f9f',
      },
    }
    return merge(styles, newStyles)
  },
}

export default theme
