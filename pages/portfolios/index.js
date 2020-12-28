import Head from 'next/head'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {useGetUser} from '@/pages/actions/user'
import PortfolioApi from '@/lib/api/portfolios'
import PortfolioCard from '@/components/shared/PortfolioCard'
import { Row, Col} from 'reactstrap';
const Portfolios = ({portfolios}) => {
//destructrise the return from the function useGetPosts/useSwr that receives the post from the api
    const {data: dataU, loading:loadingU} = useGetUser()
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
            <BasePage className="portfolio-page">
                    <Row>
                        { portfolios.map(portfolio =>
                        <Col key={portfolio._id} md="4">
                           <PortfolioCard portfolio={portfolio} />
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
