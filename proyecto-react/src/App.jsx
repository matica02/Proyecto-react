import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx'
import NavBar from './componentes/NavBar/NavBar.jsx'
import { ChakraProvider } from '@chakra-ui/react'
function App() {

  return (
    <ChakraProvider>
    <>
      <NavBar />
      <ItemListContainer title='Sports Cars Scale Models'/>
    </>
    </ChakraProvider>
  )
}

export default App
