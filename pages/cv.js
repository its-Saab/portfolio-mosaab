import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import Head from 'next/head'
import BasePage from '@/components/BasePage'
import {useGetUser} from '@/pages/actions/user'


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
            <h1>I'm Cv page</h1>
        </BasePage>
    </BaseLayout>
        </>
    )

}
export default Cv
