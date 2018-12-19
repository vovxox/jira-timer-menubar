import React from 'react'
import styled, { css } from 'styled-components'

const styles = `
  width: 100%;
  min-height: 25px;
  padding: 5px 10px;
  line-height: 1.6;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  display: inline-block;
  font-size: 13px;
`

const Input = styled.input`
  ${styles}

  background-color: ${props => props.theme.darkMode ? props.theme.darkInputBackground : '#fff' };
  color: ${props => props.theme.darkMode ? props.theme.darkSecondaryColor : '#fff' };

  ${props => (props.straight) && css`
    border-radius: 0px;
  `}
`

export const TextArea = styled.textarea`
  ${styles}
  height: 70px;
`

export default Input
