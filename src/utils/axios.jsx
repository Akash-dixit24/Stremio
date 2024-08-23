import axios from "axios";


const instance  = axios.create({
       baseURL : "https://api.themoviedb.org/3/",
       headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDdlMjZhNWExNTUyMDNmODhlMDliOTM3MTc3OTQ0ZiIsIm5iZiI6MTcyMzk3NDczOS45OTc4MzcsInN1YiI6IjY2YzBkN2EwOTJiODg3YTNmZjAzYzE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DzKZfU9Nqt4tgxLcDJ6xcPjrjcbBL7G8V9WKlo8XqNo'
            }

})


export default instance;
