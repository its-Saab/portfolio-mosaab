import React from 'react'
import Head from 'next/head'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'



const Secret= ({user,loading}) => {
    return(
        <>
         <Head>
      <title>Secret</title>
      <link rel="icon" href="/favicon.ico" />
         </Head>


         <BaseLayout
         user={user}
         loading={loading}
         >
            <BasePage>
                <h1>I'm Secret page - Hello {user.name}</h1>
            </BasePage>
         </BaseLayout>

        </>
    )
  }

export default withAuth(Secret)('admin')
