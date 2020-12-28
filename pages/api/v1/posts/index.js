import axios from 'axios'

export default async (req, res) => {
    try{
        const axiosRes = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const posts= axiosRes.data
        //status(200) represents a succesful fitch of data
        res.status(200).json( posts.slice(0,10))
    } catch(e){
        console.error(e)
        // status(400) represent an error in the fetching
        res.status(e.status || 400).json({message: 'Api Error!'})
    }
}

