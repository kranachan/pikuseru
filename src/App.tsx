import { Route, Routes } from "react-router-dom"
import { Home } from "pages/home"
import "./App.css"

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
