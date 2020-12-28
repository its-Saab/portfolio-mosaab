import { initAuth0 } from '@auth0/nextjs-auth0';




const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret:process.env. AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
  }
});
export default auth0
//inorder for this naming to work you need to run "npm install --save dotenv-webpack@1.7.0"


//this functino is for SSR for authonticating the user
//while Auth0 in the other way is CSR
export const authorizedUser = async (req,res) => {
  const session = await auth0.getSession(req)
  if(!session || !session.user){
    //302 means redirect and the other arg. is the location to redirect to
    res.writeHead(302, {
      Location: '/api/v1/login'
    })
    res.end()
    return null
  }
  return session.user

}

export const withAuth = (role) => async ({req,res}) => {
  const session = await auth0.getSession(req)
  if(!session || !session.user ||  (role && Object.values(session.user).flat().indexOf(role) < 0)){
    res.writeHead(302, {
      Location: '/api/v1/login'
    })
    res.end()
    return {props: {}}
  }
  return {props: {user: session.user}}
}
