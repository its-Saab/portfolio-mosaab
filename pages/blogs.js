import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import Head from 'next/head'
import BasePage from '@/components/BasePage'
import {useGetUser} from '@/pages/actions/user'


const Blogs = () => {
    const {data,loading} = useGetUser()
    return(
        <>
    <Head>
      <title>Blogs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <BaseLayout user={data}
        loading={loading}>
        <BasePage >
            <h1>I'm Blog page</h1>
        </BasePage>
    </BaseLayout>
        </>
    )

}
export default Blogs
