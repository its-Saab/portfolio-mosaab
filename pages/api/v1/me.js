import auth0 from '@/utils/auth0'

//after authinticating a user it will fetch the user's profile to the endpoint mentioned 'api/v1/me'
export default async function me(req, res) {
  try {
    await auth0.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
