import axios from 'axios'
import { useApiHandler } from '@/pages/actions'


 function createPortfolio(data){
  return axios.post('/api/v1/portfolios',data)
}

export const useCreatePortfolio = () => useApiHandler(createPortfolio)
