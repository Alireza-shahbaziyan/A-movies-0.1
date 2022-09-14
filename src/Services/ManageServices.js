import axios from "axios";

const api = axios.create({
    baseURL: 'https://anilist.runflare.run',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
    }
})
export default{
    getDetailsMovie(){
        return api.get('/get_movie?imdb_id=11198330')
    }
}