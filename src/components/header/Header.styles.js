import styled from "styled-components"

const StyledTitle = styled.h1`
font-family: "Red Hat Text";
`

const StyledFilter = styled.div`
font-family: "Red Hat Text";
display: flex;
flex-direction: row;
gap: 24px;
`

const StyledButton = styled.button`
border: 1px solid #C73B0F;
border-radius: 50px;
background-color: white;
width: 100px;
height: 34px;
`

const StyledHeader = styled.header`
display: flex;
flex-direction: column;
`

export {StyledTitle, StyledFilter, StyledButton, StyledHeader}
