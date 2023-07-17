let yearData = []

const loadYear = () => {
    const yearEl = document.getElementById('year')
    fetch(`./assets/data/${yearEl.value}.json`).then((response) => response.json()).then((data) => {
        yearData = data.data
        
        changeAwardGrid()
    })
}

const changeAwardGrid = () => {
    const categoryEl = document.getElementById('category')
    const categoryName = categoryEl.options[categoryEl.selectedIndex].text
    const categoryData = yearData.find((value) => value.category === categoryName)
    if (categoryData) {
        const awardGridEl = document.getElementById('award-grid')

        while (awardGridEl.firstChild) {
            awardGridEl.removeChild(awardGridEl.firstChild);
        }

        categoryData.winners.forEach((winner) => {
            const winnerDiv = document.createElement('div')
            winnerDiv.classList.add('flex', 'flex-col', 'border-2', 'border-black', 'rounded-md', 'p-2')

            const winnerImg = document.createElement('img')
            winnerImg.classList.add('h-5/6')
            winnerImg.src = winner.winner_poster_url
            winnerImg.alt = `${winner.award_show} ${categoryName} Winner Poster`
            winnerDiv.append(winnerImg)

            const ceremonyNameDiv = document.createElement('div')
            ceremonyNameDiv.classList.add('w-full', 'font-semibold', 'text-2xl', 'mt-2')
            ceremonyNameDiv.innerText = winner.award_show
            winnerDiv.append(ceremonyNameDiv)

            const movieNameDiv = document.createElement('div')
            movieNameDiv.classList.add('w-full', 'text-xl')
            movieNameDiv.innerHTML = winner.winner_name
            winnerDiv.append(movieNameDiv)

            awardGridEl.append(winnerDiv)
        })
    }
}

loadYear()