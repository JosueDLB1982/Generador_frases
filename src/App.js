import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Sentence from "./components/Sentence"

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
  border-radius: .5rem;

  :hover {
    cursor: pointer;
    background: -webkit-linear-gradient(top left, green 0%, green 40%, green 100%)
  }
`

const Personalizacion = styled.a`
  display: block;
  font-family: 'Lato', sans-serif;
  color: black;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  &:hover {
      color: greenyellow; 
  }
`



function App() {
  const [sentence, setSentence] = useState({})

  const consultAPI = async () => {
    const api = await fetch('https://breakingbadapi.com/api/quote/random')
    const sentence = await api.json()
    setSentence(sentence[0])
  }

  /* Cargar una frase automáticamente al cargar la página */

  useEffect(() => {
    consultAPI()
  }, [])

  return (
    <>
    <Personalizacion href="https://github.com/JosueDLB1982" target='blank'>Josue Lopez - Developer Treinee</Personalizacion>
    <Conteiner>
      <Sentence
        sentence={sentence}
      />
      <Button
        onClick={() => consultAPI()}
      >
        Obtener Frase
      </Button>
    </Conteiner>
    </>
  )
}

export default App;
