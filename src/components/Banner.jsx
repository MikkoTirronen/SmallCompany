import React from 'react'
import styled, { css}from 'styled-components'

const StyledBanner = styled.div`
position: top;
display: d-flex;
height: 200px;
width: 100%;
background-color: #1e1e1e;
border-color:white;
border: solid;
margin-top: 1px;
min-width:700px;
${(props) =>
  props.textWhite &&css`
  color: white;
  `
}
`
const StyledHeading1 = styled.h1`
   text-align:center;
   padding-top: 50px;
   font-size: 80px
`

export default function Banner(props) {
    return (
      <StyledBanner {...props}>
        <StyledHeading1>{props.children}</StyledHeading1>
      </StyledBanner>
    );
}