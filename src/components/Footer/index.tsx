import * as C from './styled'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <C.Container>
      <p>
        © Copyrights 2019 Stack.<span> All Rights Reserved.</span>
      </p>

      <div>
        <p>Privacy Policy </p>
        <p> Terms and Conditions</p>
      </div>
    </C.Container>
  )
}
