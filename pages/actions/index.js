import useSWR from 'swr'


//this fetcher function is required in the args of useSwr
export const fetcher = (url) =>
 fetch(url).then(async res => {
   const result = await res.json()
  if (res.status !==200){
    return Promise.reject(result)
  } else{
    return result
  }
  })

export const useGetPosts = () => {
  const {data,error,...rest} = useSWR('/api/v1/posts',fetcher)
  return {data, error, loading: !data && !error, ...rest}
}

//since useSWR doesn't return a loading status, this is a way to manually define "loading":
//loading: !data && !error




//this function is to fetch data dynamically to portfolio.[id]
export const useGetPostsById = (id) => {
  const {data,error,...rest} = useSWR(id ?`/api/v1/posts/${id}`: null,fetcher)
  return {data, error, loading: !data && !error, ...rest}
}





// custom server call
//this function receives the post from the api.
// export const useGetData = (url) => {
//   const [data, setData] = useState()
//   const [error, setError] = useState()
//   const [loading, setLoading] = useState(true)
//   useEffect(()=> {
//       async function fetchData(){
//            const res = await fetch(url)
//            const result = await res.json()

//            if(res.status !== 200){
//             setError(result)
//            }else {

//              setData(result)
//            }
//            setLoading(false)
//       }

//       url && fetchData()
//   },[url])

//   return { data, error, loading }
// }
