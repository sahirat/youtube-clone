import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyA8OiCh1SRGce6qn-csb9Lhto28Il3J4nQ',
   },
})

export default request
