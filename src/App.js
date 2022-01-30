import React from "react"
import styled from "@emotion/styled"

const Conteiner = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`

const consultAPI = () => {
  console.log('consultando...')
}

function App() {
  return (
    <Conteiner>
      <Button
        onClick={() => consultAPI()}
      >
        Obtener Frase
      </Button>
    </Conteiner>
  )
}

export default App;
