import React from 'react'
import Head from 'next/head'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'

const OnlyAdmin= ({user,loading}) => {
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
                <h1>I'm Admin page - Hello {user.name}</h1>
            </BasePage>
         </BaseLayout>

        </>
    )
  }
//to specify that only the admin can view this page, either add a second arg to the def. of withAuth andspecify the role this way and add 'Admin'.
//export default withAuth(OnlyAdmin, 'admin')
//or you can call the function with the role which will will require an extra layer of function that takes the role as an argument:
export default withAuth(OnlyAdmin)('admin')
