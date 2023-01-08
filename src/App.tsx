import { Route, Routes } from 'react-router-dom'
import { Home } from 'pages/home'
import './App.css'
import { useEffect } from 'react'
import { applyTheme, systemScheme } from 'themes'
import { chestnut } from 'themes'
import { ColorScheme } from 'constants/theme'
import { useAtom } from 'jotai'
import { themeOptionsAtom } from 'atom/theme'
import { getLocalStorage } from 'utils/localstorage'

function App() {
  const [themeOptions, setThemeOptions] = useAtom(themeOptionsAtom)

  const setThemeOptionsToStore = async () => {
    const storedThemeOptions = await getLocalStorage('themeOptions')
    const appliedTheme = storedThemeOptions?.theme ?? chestnut

    setThemeOptions({
      scheme: storedThemeOptions?.scheme ?? ColorScheme.Light,
      theme: appliedTheme,
    })
  }

  useEffect(() => {
    setThemeOptionsToStore()
  }, [])

  const applyThemeOptions = async () => {
    const storedThemeOptions = await getLocalStorage('themeOptions')
    const isAutoScheme = storedThemeOptions?.scheme === ColorScheme.Auto

    const appliedTheme = storedThemeOptions?.theme ?? chestnut
    const appliedScheme = isAutoScheme
      ? systemScheme
      : storedThemeOptions?.scheme ?? ColorScheme.Light

    applyTheme(
      appliedTheme,
      appliedScheme as ColorScheme.Light | ColorScheme.Dark,
    )
  }

  useEffect(() => {
    applyThemeOptions()
  }, [themeOptions])

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
