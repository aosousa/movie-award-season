import { Winner } from './MovieGrid'

type MovieItemProps = {
    winner: Winner
}

const MovieItem = (props: MovieItemProps) => {
    return (
        <div className='flex flex-col border-2 border-black rounded-d p-2'>
            <img src={props.winner.winner_poster_url} alt={props.winner.winner_name} style={{ height: '40em' }} />
            <div className="w-full font-semibold text-2xl mt-2">{props.winner.award_show}</div>
            <div className="w-full text-xl">{props.winner.winner_name}</div>
        </div>
    )
}

export default MovieItem