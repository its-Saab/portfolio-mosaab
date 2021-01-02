import {Container} from 'reactstrap'
import Head from 'next/head'
import {useRouter} from 'next/router'
import React from 'react'

const PageHeader = ({header}) =>
        <div className="page-header">
            <h1 className="page-header-title">{header}</h1>
        </div>


const BasePage = props => {
const router = useRouter()
const {
  noWrapper,
  indexPage,
  className = '',
  children,
  title="Portfolio-it's Saab",
  metaDescription="My name is Mosaab Abbas im a freelancer software developer",
  header } = props

  const pageType = indexPage? 'index-page' : 'base-page'
  const Wrapper = noWrapper? React.Fragment : Container
  return(
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description" key="description" content={metaDescription}/>
        <meta name="title" key="title" content={title}/>
        <meta property="og:title" key="og:title" content={title}/>
        <meta property="og:locale" key="og:locale" content="en_EU"/>
        <meta property="og:url" key="og:url" content={`${process.env.BASE_URL}${router.asPath}`}/>
        <meta property="og:type" key="og:tyoe" content="website"/>
        <meta property="og:description" key="og:description" content={metaDescription}/>
        <meta property="og:image" key="og:image" content={`${process.env.BASE_URL}/images/section-1.png`}/>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700"/>
      </Head>
      <div className={`${pageType} ${className}`}>
          <Wrapper>
            {header && <PageHeader header={header}/>}
            {children}
          </Wrapper>
      </div>
    </>
  )
}

export default BasePage
