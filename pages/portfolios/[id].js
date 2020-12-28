import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import {withRouter} from 'next/router'
import axios from 'axios'
import BasePage from '@/components/BasePage'
import {useGetPostsById} from '@/pages/actions'
import {useRouter} from 'next/router'
import {useGetUser} from '@/pages/actions/user'

const Portfolio = () => {
  const router = useRouter()
 const {data: post, error, loading} = useGetPostsById( router.query.id)
//useSWR is smart enough to make multiple requests in case the id was undefined


const {data: dataU,loading:loadingU} = useGetUser()
  return(
    <BaseLayout
    user={dataU}
    loading={loadingU}
    >
    <BasePage>
      <h1>I am Portfolio Page</h1>
      {loading &&
      <p>loading...</p>
      }
      {post &&
      <>
      <h1> Title: {post.title}</h1>
      <p>{post.body}</p>
      </>
      }
      {error &&
      <div className="alert alert-danger">
        {error.message}
      </div>

      }
    </BasePage>
    </BaseLayout>
  )
}



export default withRouter(Portfolio)
