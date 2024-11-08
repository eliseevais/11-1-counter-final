import * as React from "react";
import {ChangeEvent, useState} from "react";
import {ButtonAppBar} from "../components/AppBar";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styled from "styled-components";
import {Box} from '@mui/system';
import {MyTheme} from "../styles/MyTheme";
import {Styles} from "../styles/App_Styled";

const App = () => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(true);
  const [maxValue, setMaxValue] = useState(0);
  const [startValue, setStartValue] = useState(0);

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    if (value <= maxValue) {
      setStartValue(value);
      setError('');
      setTouched(true)
    } else {
      setError('Incorrect value');
      setTouched(false)
    }
  };

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value
    if (value >= startValue) {
      setMaxValue(value);
      setError('');
      setTouched(true);
    } else {
      setError('Incorrect value');
    }
  };

  const onSetClickHandler = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    if (startValue >= 0) {
      setValue(startValue);
    }
    if (startValue < 0) {
      setError('Value should be 0 or greater');
    }
  };

  const incHandler = () => {
    const newValue = value + 1
    if (newValue <= maxValue && newValue > 0) {
      setValue(value + 1)
    } else {
      setError('Incorrect value');
      setTouched(false)
    }
  };

  const decHandler = () => {
    const newValue = value - 1
    if (newValue <= maxValue && newValue >= 0) {
      setValue(value - 1)
    } else {
    }
  };

  const resetHandler = () => {
    setValue(0);
  };

  return (
    <div className={"App"}>
      <ButtonAppBar/>
      <AppWrapper>
        <div>
          <Styles.Wrapper>

            <Styles.WrapperForValues>
              <Styles.WrapperForGroup error={error}>
                <Box component="form" sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                     noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Max value" variant="outlined"
                             value={maxValue} type={"number"} onChange={onChangeMaxValueHandler}/>
                </Box>
              </Styles.WrapperForGroup>

              <Styles.WrapperForGroup error={error}>
                <Box component="form" sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                     noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Start value" variant="outlined"
                             value={startValue} type={"number"} onChange={onChangeStartValueHandler}/>
                </Box>
              </Styles.WrapperForGroup>
            </Styles.WrapperForValues>

            <Styles.WrapperForButton>
              <Button variant="contained" onClick={onSetClickHandler} disabled={startValue == maxValue}>set</Button>
            </Styles.WrapperForButton>

          </Styles.Wrapper>
        </div>

        <div>
          <Styles.Wrapper>

            <Styles.WrapperForValues error={error}>
              {error ? error : value}
            </Styles.WrapperForValues>

            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button disabled={value >= maxValue || !!error || !touched || startValue == maxValue}
                      onClick={incHandler}>inc</Button>
              <Button disabled={!!error || !touched || startValue == maxValue || value == +0}
                      onClick={decHandler}>dec</Button>
              <Button disabled={!!error || !touched || startValue == maxValue}
                      onClick={resetHandler}>reset</Button>
            </ButtonGroup>

          </Styles.Wrapper>
        </div>

      </AppWrapper>
    </div>
  )
}

let AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`

export default App;