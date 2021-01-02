import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import Head from 'next/head'
import BasePage from 'components/BasePage'
import {useGetUser} from 'actions/user'
import {Row,Col} from 'reactstrap'

const Cv = () => {
    const {data,loading} = useGetUser()
    return(
        <>
    <Head>
      <title>CV</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <BaseLayout
    user={data}
    loading={loading}>
        <BasePage>
        <Row>
            <Col md={{size:8, offset:2}}>
            <iframe style={{width:"100%", height: '800px'}} src="/Saab_CV.pdf"/>

            </Col>
        </Row>
        </BasePage>
    </BaseLayout>
        </>
    )

}
export default Cv
