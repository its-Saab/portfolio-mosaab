import useSWR from "swr"
import {fetcher} from '@/pages/actions'


export const useGetUser = () => {
  const {data,error,...rest} = useSWR('api/v1/me', fetcher)
  return {data,error,...rest, loading: !data && !error}
}
