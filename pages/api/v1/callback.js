import auth0 from '@/utils/auth0'

//after authinticating a user it will call the callback function to the mentioned path which is home
export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res,{redirectTo: '/'});
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
