import {Container} from 'reactstrap'
import Head from 'next/head'

const BasePage = props => {
const {
  indexPage,
  className = '',
  children,
  title="Portfolio-it's Saab",
  header } = props

  const pageType = indexPage? 'index-page' : 'base-page'
  return(
    <div className={`${pageType}${className}`}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <title>{title}</title>
      </Head>
      <Container>
        {header &&
        <div className="page-header">
            <h1 className="page-header-title">{header}</h1>
        </div>

        }
        {children}
      </Container>
    </div>
  )
}

export default BasePage
