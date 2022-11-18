import React from 'react'
import { join } from 'path'
import { styled } from '../css-in-js'

const Button = styled('div', {
  backgroundColor: 'red',
  '& span': {
    color: 'blue'
  }
})

export default function ServerInfo() {
  return (
    <Button>
      <span>hello styils</span>
      <br />
      <span>{join(__filename, 'server-info')}</span>
    </Button>
  )
}
