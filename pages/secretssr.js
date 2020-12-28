import React from 'react'
import Head from 'next/head'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {authorizedUser, withAuth} from '@/utils/auth0'
const SecretSSR= ({user}) => {
    return(
        <>
         <Head>
            <title>Secret</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <BaseLayout user={user} loading={false} >
            <BasePage>
                <h1>I'm SecretSSR page - Hello {user && user.name}</h1>
            </BasePage>
         </BaseLayout>

        </>
    )
  }



  // export const getServerSideProps = async ({req,res}) => {
  //   const user = await authorizedUser(req,res)
  //   return {
  //     props: {user}
  //   }
  // }

  export const getServerSideProps = withAuth('admin');
export default SecretSSR
