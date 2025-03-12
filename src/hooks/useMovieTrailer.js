import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>
{
    const dispatch = useDispatch();
 
    const getMovieVideos = async () =>
    {
        const data = await fetch("https://api.themoviedb.org/3/movie/976573/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        console.log(json)
        //const Id = json?.id
        //console.log(Id);
    
        //console.log(json.results);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        //console.log(json.results)
        const trailer = filterData.length ? filterData[0] : json.results[0];

        console.log(trailer);
        //console.log(movieId);
        dispatch(addTrailerVideo(trailer))
        
        
    };
    useEffect(() =>
    {
        getMovieVideos();
    }, [movieId]);
};

export default useMovieTrailer;
