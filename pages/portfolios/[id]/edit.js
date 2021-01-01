import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'
import {useRouter} from 'next/router'
import {useGetPortfolio} from '@/pages/actions/portfolios'
import {Col, Row} from 'reactstrap'
import PortfolioForm from '@/components/PortfolioForm'
import { useUpdatePortfolio } from '@/pages/actions/portfolios'

const PortfolioEdit = ({user}) => {
  const router = useRouter()
  const [updatePortfolio, {data,error,loading}] = useUpdatePortfolio()
  const {data: initialData} = useGetPortfolio(router.query.id)

  //this function is to add the id from router.query.id to updatePortfolio
  const _updatePortfolio = data => {
     updatePortfolio(router.query.id, data)
  }
  return(
    <BaseLayout user={user} loading={false}>
    <BasePage header="Portfolio Edit:">
      <Row>
        <Col md="8">
          {initialData &&
            <PortfolioForm
              onSubmit={_updatePortfolio}
              initialData={initialData}
            />
          }
        </Col>
      </Row>
    </BasePage>
    </BaseLayout>
  )
}


export default withAuth(PortfolioEdit)('admin')

