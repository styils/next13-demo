import { StyleSheet, parseRules, createSelector } from '@styils/base'

import React from 'react'

export const sheet = new StyleSheet({})

const cache = new Set([])

export function styled(tag, styles) {
  const classes = createSelector(styles)

  if (!cache.has(classes)) {
    cache.add(classes)
    const rule = parseRules(styles, `.css-${classes}`)

    sheet.insertStyle(rule)
  }

  return ({ children }) =>
    React.createElement(tag, { className: 'css-' + classes }, children)
}
