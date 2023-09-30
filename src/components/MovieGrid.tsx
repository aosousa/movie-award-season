import { useCallback, useEffect, useState } from "react"

import MovieItem from "./MovieItem"

export type Winner = {
	award_show: string
	winner_poster_url: string
	winner_name: string
}

type Category = {
	category: string
	winners: Winner[]
}

const MovieGrid = () => {
	const [year, setYear] = useState(new Date().getFullYear() - 1)
	const [category, setCategory] = useState('Best Picture')
	const [data, setData] = useState<Category[]>([])
	const [categoryData, setCategoryData] = useState<Category[]>([])

	const changeCategoryData = useCallback(() => setCategoryData(data.filter((c: Category) => c.category === category)), [category, data])

	useEffect(() => {
		fetch(`./data/${year}.json`)
			.then((response) => response.json())
			.then((yearData) => {
				setData(yearData.data)
				changeCategoryData()
			})
		return
	}, [year, changeCategoryData])


	const onYearChange = (e: React.FormEvent<HTMLSelectElement>) => {
		setYear(Number((e.target as HTMLSelectElement).value))
		fetch(`./data/${year}.json`)
			.then((response) => response.json())
			.then((yearData) => {
				setData(yearData)

				// set category data by filtering overall data by the new category
				changeCategoryData()
			})
	}

	const onCategoryChange = (e: React.FormEvent<HTMLSelectElement>) => setCategory(String((e.target as HTMLSelectElement).value))

	return (
		<div>
			<div className="flex flex-col p-4">
				<h1 className="text-3xl font-bold mx-auto">
					Movie Award Season
				</h1>
			</div>

			<div className="pl-2">
				<div className="flex flex-col">
					<div className="mx-auto">
						<label htmlFor="year" className="font-semibold text-xl mr-2">Year</label>
						<select name="year" id="year" className="w-20 h-8 border-2 border-gray-500 rounded-md" onChange={(e) => onYearChange(e)}>
							<option value="2022">2022</option>
							<option value="2021">2021</option>
							<option value="2020">2020</option>
						</select>

						<label htmlFor="category" className="font-semibold text-xl ml-4 mr-2">Category</label>
						<select name="category" id="category" className="h-8 border-2 border-gray-500 rounded-md" onChange={(e) => onCategoryChange(e)}>
							<option value="Best Picture">Best Picture</option>
							<option value="Best Leading Actor">Best Leading Actor</option>
							<option value="Best Leading Actress">Best Leading Actress</option>
							<option value="Best Supporting Actor">Best Supporting Actor</option>
							<option value="Best Supporting Actress">Best Supporting Actress</option>
							<option value="Best Director">Best Director</option>
							<option value="Best Original Screenplay">Best Original Screenplay</option>
							<option value="Best Adapted Screenplay">Best Adapted Screenplay</option>
							<option value="Best Animated Film">Best Animated Film</option>
							<option value="Best International Film">Best International Film</option>
							<option value="Best Original Score">Best Original Score</option>
							<option value="Best Original Song">Best Original Song</option>
							<option value="Best Documentary">Best Documentary</option>
							<option value="Best Cinematography">Best Cinematography</option>
						</select>
					</div>
				</div>
			</div>

			<div className="grid grid-flow-row grid-rows-max md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 rounded-md mx-2 p-4">
				{categoryData.map((category: Category) => (category.winners.map((winner: Winner, idx: number) => <MovieItem key={idx} winner={winner} />)))}
			</div>
		</div>
	)
}

export default MovieGrid