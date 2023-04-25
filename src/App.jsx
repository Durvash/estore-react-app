import { Box, Container } from "@mui/material"
import Header from "./components/layout/Header"
import ProductList from "./components/ProductList"

function App() {
  return (
    <>
      <Header />
      <Container maxWidth={false} sx={{ mt: 2 }}>
        <ProductList />
      </Container>
    </>
  )
}

export default App
