import { Route, Routes } from 'react-router-dom'
import { Home } from 'pages/home'
import './App.css'
import { useEffect } from 'react'
import { applyTheme } from 'themes'
import { chestnut } from 'themes/chestnut'
import { ColorScheme } from 'constants/theme'

function App() {
  useEffect(() => {
    applyTheme(chestnut, ColorScheme.Light)
  }, [])

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
