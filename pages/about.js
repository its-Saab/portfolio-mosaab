import React from 'react'
import Head from 'next/head'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage'
import {useGetUser} from 'actions/user'

const About= () => {
    const {data,loading} = useGetUser()

    return(
        <>
         <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
         </Head>
         <BaseLayout
         user={data}
         loading={loading}
         >
            <BasePage>
                <h1>I'm about page</h1>
            </BasePage>
         </BaseLayout>

        </>
    )
}
export default About
