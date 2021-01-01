import Head from 'next/head'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {useGetUser} from '@/pages/actions/user'
import {useDeletePortfolio} from '@/pages/actions/portfolios'
import PortfolioApi from '@/lib/api/portfolios'
import PortfolioCard from '@/components/shared/PortfolioCard'
import { Row, Col, Button} from 'reactstrap';
import{useRouter} from 'next/router'
import {isAuthorized} from '@/utils/auth0'
import {useState} from 'react'

const Portfolios = ({portfolios: initialPortfolios}) => {
    const router = useRouter()
    const [portfolios, setPortfolios] = useState(initialPortfolios)
    const [deletePortfolio , {error,data}] = useDeletePortfolio()
//destructrise the return from the function useGetPosts/useSwr that receives the post from the api
    const {data: dataU, loading:loadingU} = useGetUser()

    const _deletePortfolio = async (e, portfolioID) => {
        e.stopPropagation()
        const isConfirm = confirm("Are you sure?")
        if (isConfirm){
            await deletePortfolio(portfolioID)
            const newPortfolios = portfolios.filter(a => a._id !== portfolioID)
            setPortfolios(newPortfolios)
        }
    }
            return(
                <>
            <Head>
            <title>Blogs</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <BaseLayout
            user={dataU}
            loading={loadingU}
            >
            <BasePage
            header= "Portfolios"
            className="portfolio-page">
                <Row>
                    { portfolios.map(portfolio =>
                    <Col
                     key={portfolio._id}
                     onClick={() => {
                        router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
                     }}
                     md="4"
                    >
                        <PortfolioCard portfolio={portfolio}>
                        { dataU && isAuthorized(dataU, 'admin') &&
                            <>
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)}}
                                className="mr-2"
                                color= "warning">Edit</Button>
                            <Button
                            onClick={(e) => _deletePortfolio(e, portfolio._id)}
                            color="danger">Delete</Button>
                            </>
                        }
                        </PortfolioCard>
                    </Col>
                    )
                    }
                </Row>
            </BasePage>
            </BaseLayout>
                </>
            )
}

//this function is called during build time
//it improves performance of the page
//it will create static page with dynamic data
export async function getStaticProps(){
    const json = await new PortfolioApi().getAll()
    const portfolios = json.data
    return {
        props: { portfolios }
    }
}
export default Portfolios
