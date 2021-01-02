import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage'
import {useGetUser} from 'actions/user'
import PortfolioApi from 'lib/api/portfolios'
import {formatDate} from 'helpers/function'

const Portfolio = ({portfolio}) => {
  const {data: dataU,loading:loadingU} = useGetUser()
  return(
    <BaseLayout
    navClass="transparent"
    user={dataU}
    loading={loadingU}
    >
    <BasePage
    noWrapper
    indexPage
    metaDescription={portfolio.description}
    title={`${portfolio.title}`}
    >
      <div className="portfolio-detail">
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <main role="main" class="inner page-cover">
          <h1 class="cover-heading">{portfolio.title}</h1>
          <p class="lead dates">{formatDate(portfolio.startDate)}-{formatDate(portfolio.endDate) || 'Present'}</p>
          <p class="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
          <p class="lead">{portfolio.description}</p>
          <p class="lead">
            <a href={portfolio.companyWebsite} target="_" class="btn btn-lg btn-secondary">Visit Company's website</a>
          </p>
        </main>
      </div>
    </div>
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
    return {
      props: {portfolio},
      revalidate: 1
    }
  }

export default Portfolio

// export async function getServerSideProps({query}){
//   const json = await new PortfolioApi().getById(query.id)
//   const portfolio = json.data
//   return {props: {portfolio}}
// }
