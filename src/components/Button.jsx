import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
  background-color: #22ce89;
  color: white;
  ${(props) =>
    props.margin &&
    css`
        margin 10px 10px
    `};

  ${(props) =>
    props.padding &&
    css`
      padding: 5px 5px;
    `};
  ${(props) =>
    props.wide &&
    css`
      width: 250px;
    `}
`;

const DeleteButton = styled(StyledButton)`
    margin-top: 10px;
    font-size: 25px;
    padding: 0 30px;
    background-color: red;
    margin-bottom: 20px
`

export default function Button(props) {
    return (
        <>
            {props.styledDelete ? (
                <DeleteButton {...props}> {props.children}</DeleteButton>
            ) : (
                    <StyledButton {...props}>{props.children}</StyledButton>       
            )}
        </>
    )
}
