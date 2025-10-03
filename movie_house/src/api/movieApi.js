const API_KEY = process.env.REACT_APP_API_KEY;
export const getPopularMovies = async() =>{
    try {
    const response =  await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`).then((res)=>res.json());
      return response.results;
      
    } catch (error) {
        console.log("error--",error)
        return []
    }
}