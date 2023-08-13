import axios from "axios";

const moviewDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjA1ZTVhNTU4M2Q1YzAxYTE2MzcxMjE1OGQ2ZWI5ZiIsInN1YiI6IjY0ZDViYTEyYjZjMjY0MTE1OGM2ODYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8I4polPONLVCWPwgQSrJcfE29nnZzRX4JXI063NrGEI'
    },
    params: {
        'language': 'es-ES'
    }
});

export default moviewDB;