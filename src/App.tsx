import './App.css'
import { Route, Routes } from 'react-router-dom'

// Components
import MovieGrid from './components/MovieGrid'

const App = () => (
	<main className="App">
		<Routes>
			<Route path="/" element={<MovieGrid />} />
		</Routes>
	</main>
)

export default App