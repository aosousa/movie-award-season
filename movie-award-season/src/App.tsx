import './App.css'
import { Route, Routes } from 'react-router-dom'

// Components
import MovieGrid from './components/MovieGrid'

const App = () => (
	<div className="App">
		<Routes>
			<Route path="/" element={<MovieGrid />} />
		</Routes>
	</div>
)

export default App