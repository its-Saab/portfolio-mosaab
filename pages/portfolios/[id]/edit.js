import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'
import {useRouter} from 'next/router'
import {useGetPortfolio} from '@/pages/actions/portfolios'
import {Col, Row} from 'reactstrap'
import PortfolioForm from '@/components/PortfolioForm'
import { useUpdatePortfolio } from '@/pages/actions/portfolios'
import { toast } from 'react-toastify';

const PortfolioEdit = ({user}) => {
  const router = useRouter()
  const [updatePortfolio, {error}] = useUpdatePortfolio()
  const {data: initialData} = useGetPortfolio(router.query.id)

  //this function is to add the id from router.query.id to updatePortfolio
  const _updatePortfolio = async data => {
     await updatePortfolio(router.query.id, data)
     toast.dark('Successfully updated!', {position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

     //one way to do it:
    //  updatePortfolio(router.query.id, data)
    //  .then(() => toast.dark('Successfully updated!', {position: "top-right",autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   }))
    //   .catch(() =>toast.error('Ooops Something went wrong!', {position: "top-right",autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   }) )


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
          { error &&
            <div className="alert alert-danger mt-2">{error}</div>
          }
        </Col>
      </Row>
    </BasePage>
    </BaseLayout>
  )
}


export default withAuth(PortfolioEdit)('admin')

