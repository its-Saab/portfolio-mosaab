import {useGetUser} from '@/pages/actions/user'
import Redirect from '@/components/shared/Redirect'


const withAuth = Component => role => {
  return props => {
   const {data,loading} = useGetUser()

    if (loading){
      return <p>Loading...</p>
    }
    if (!data){
      return <Redirect ssr to='/api/v1/login' />
    } else {
      //checking using the NAMESPACE if it includes an admin role / hiding the link
      if (data && !data['https://portfolio-mosaab.com/roles'].includes(role)){
        return <Redirect ssr to='/api/v1/login' />
      }
      return <Component user={data} loading={loading} {...props}/>
    }
  }
}
export default withAuth
