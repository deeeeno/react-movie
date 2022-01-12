import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

function Detail(){
    const params = useParams();
    console.log(params);
    const [movie,setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(async ()=>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`);
        const movieData = await response.json();
        setMovie(movieData.data.movie);
        setLoading(false);
    },[])
    console.log(movie);
    return <div>
            {
                loading ? <h1>loading...</h1>
                :
                <div>
                    <h1><a href={movie.url}>{movie.title}</a></h1>
                    <img src={movie.medium_cover_image}/>
                    <p>{movie.description_full}</p>
                </div>
            }
    </div>
}
export default Detail;