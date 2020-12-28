import Head from 'next/head'
import BaseLayout from '@/components/layouts/BaseLayout'
import Link from 'next/link'
import BasePage from '@/components/BasePage'
import {useGetPosts} from '@/pages/actions'
import {useGetUser} from '@/pages/actions/user'

const Portfolios = () => {
//destructrise the return from the function useGetPosts/useSwr that receives the post from the api
    const { data,error, loading } = useGetPosts()
    const {data: dataU, loading:loadingU} = useGetUser()
       function renderPosts(posts){
            return posts.map(post =>
            <li style={{'fontSize': '20px'}}key={post.id}>
                <Link href='/portfolios/[id]' as={`/portfolios/${post.id}`}>
                    <a>
                            {post.title}
                    </a>
                </Link>
            </li> )
        }

            return(
                <>
            <Head>
            <title>Blogs</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <BaseLayout
            user={dataU}
            loading={loadingU}
            >
            <BasePage>
                <h1>I'm Portfolios page</h1>
                {loading &&
                <p>loading...</p>

                }
                { data &&
                <ul>
                    {renderPosts(data)}
                </ul>
                }
                { error &&
                <div className='alert alert-danger'>{error.message}</div>

                }
            </BasePage>
            </BaseLayout>
                </>
            )
}
export default Portfolios
