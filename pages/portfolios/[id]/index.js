import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {useGetUser} from '@/pages/actions/user'
import PortfolioApi from '@/lib/api/portfolios'

const Portfolio = ({portfolio}) => {
  const {data: dataU,loading:loadingU} = useGetUser()
  return(
    <BaseLayout
    user={dataU}
    loading={loadingU}
    >
    <BasePage header="Portfolio Detail:">
      {
        JSON.stringify(portfolio)
      }
    </BasePage>
    </BaseLayout>
  )
}


//this function is executed build-time
export async function getStaticPaths(){
  const json = await new PortfolioApi().getAll()
  const portfolios = json.data

  //Gets the paths we want to pre-render based on portfolios id
  const paths = portfolios.map(portfolio => {
    return {
      params: {id: portfolio._id}
    }
  })
  // fallback: false means that "not found pages" will be resolved
  //into 404 pages
  return {paths, fallback: false}
}

export async function getStaticProps({params}){
 const json = await new PortfolioApi().getById(params.id)
 const portfolio = json.data
 return {props: {portfolio}}
}

export default Portfolio

// export async function getServerSideProps({query}){
//   const json = await new PortfolioApi().getById(query.id)
//   const portfolio = json.data
//   return {props: {portfolio}}
// }
