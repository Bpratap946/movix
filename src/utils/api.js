import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTcwZjQwMTExZmJlNjViZjIzMDE3ZDE4MGU4Y2Y4NyIsInN1YiI6IjY1MTk5YzhmOTY3Y2M3MzQyOGNiNjk2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K1jDC9J1WAMy-56a5lLXhCnOZS8CnuOmd9M3dBPwBPY";
console.log(TMDB_TOKEN)
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try{
        const {data} = await axios.get(
            BASE_URL + url, {
                headers, 
                params
            }
        )
        return data;
    }catch (err) {
        console.log(err);
        return err;
    }
}