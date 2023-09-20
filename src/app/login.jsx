
import { Fragment } from 'react'
import styles from './page.module.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import { MyTextField } from './components/TEXTFIELD'

export default function Routes() {
  return (
    <Fragment>
      <Container sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100vw",
        height: "100vh",
      }}>
        <MyTextField
          placeholder={"Degite o see emeil"}
          type={"email"}
          variant="outlined"
          label="Email"
        />
        <MyTextField
          placeholder={"Degite o see emeil"}
          type={"password"}
          variant="outlined"
          label="Password"
        />
      </Container>
    </Fragment>
  )
}
