import React from 'react'
import Head from 'next/head'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'
import {Col, Row} from 'reactstrap'
import PortfolioForm from '@/components/PortfolioForm'
const createPortfolio = ({user, loading: userLoading}) => {

    const createPortfolio = data => {
        alert(JSON.stringify(data))
    }


    return(
        <BaseLayout
        user={user}
        loading={userLoading}>
          <BasePage header="Create Portfolio">
            <Row>
                <Col md="8">
                    <PortfolioForm onSubmit={createPortfolio}/>
                </Col>
            </Row>
          </BasePage>
        </BaseLayout>
    )
}
export default withAuth(createPortfolio)('admin')
