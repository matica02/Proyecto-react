import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer title='Sports Cars Scale Models' />
    </ChakraProvider>
  )
}

export default App
