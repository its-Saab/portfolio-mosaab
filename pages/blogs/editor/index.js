import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'

const BlogEditor= ({user,loading}) => {
    return(
         <BaseLayout user={user} loading={loading}>
            <BasePage header="Blog Editor">
                <h1>I'm Editor page</h1>
            </BasePage>
         </BaseLayout>

    )
}
export default withAuth(BlogEditor)('admin')
