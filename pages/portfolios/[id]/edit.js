import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import {withRouter} from 'next/router'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'
import {useRouter} from 'next/router'
import {useGetPortfolio} from '@/pages/actions/portfolios'
import {Col, Row} from 'reactstrap'
import PortfolioForm from '@/components/PortfolioForm'

const PortfolioEdit = ({user}) => {
  const router = useRouter()
  const {data} = useGetPortfolio(router.query.id)
  return(
    <BaseLayout user={user} loading={false}>
    <BasePage header="Portfolio Edit:">
    {data &&
      <Row>
        <Col md="8">
          <PortfolioForm
          onSubmit={(data => alert(JSON.stringify(data)))}
          initialData={data}/>
        </Col>
      </Row>
    }
    </BasePage>
    </BaseLayout>
  )
}


export default withAuth(PortfolioEdit)('admin')

