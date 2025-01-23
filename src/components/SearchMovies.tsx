import { useState } from 'react'
import apiKey from '../../api-key'

export default function SearchMovies ({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('')

    async function search(event) {
        event.preventDefault()

        const response = await fetch('http://www.omdbapi.com/?apikey=' + apiKey() + '&s=' + searchTerm)
        const data = await response.json()
        
        onSearch(data.Search)
    }

    return <form>
        <label>
            Search term
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </label>
        <button onClick={search}>
            Search
        </button>
    </form>
}