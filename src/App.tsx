import { useState } from 'react'
import './App.css'
import SearchMovies from './components/SearchMovies'
import DisplayMovies from './components/DisplayMovies'

function App() {
  const [movies, setMovies] = useState([])

  return (
    <>
      <SearchMovies onSearch={setMovies} />
      <DisplayMovies movies={movies} />
    </>
  )
}

export default App
