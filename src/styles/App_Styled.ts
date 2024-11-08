import React from "react";
import styled from "styled-components";
import {MyTheme} from "./MyTheme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  min-width: 400px;
  min-height: 280px;
  padding: 10px;
  margin: 20px;
  
  border: 1px solid ${MyTheme.colors.accent};
  // background-color: ${MyTheme.colors.background};
  color: ${MyTheme.colors.accent};
  
  input {
    text-align:center;
  }
`

const WrapperForValues = styled.div<{error?: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  min-width: 280px;
  min-height: 160px;
  
  color:  ${props => props.error ? 'red': ''};
  border: 1px solid ${props => props.error ? 'red': ''};
`

const WrapperForButton = styled.div`
  min-width: 380px;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
`

const WrapperForGroup = styled.div<{error?: string}>`
  display: flex;
  flex-direction: row;
  
  & input {
    color:  ${props => props.error ? 'red': ''};
    border: none ${props => props.error ? 'red': ''};
    &:focus {
      border: none ${props => props.error ? 'red': ''};
    }
  }
`

export const Styles = {
  Wrapper,
  WrapperForValues,
  WrapperForButton,
  WrapperForGroup
}