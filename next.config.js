const path = require('path')
//loading the dotenv into the app so the auth0 naming config works

module.exports = {
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
    BASE_URL: process.env.BASE_URL
  }
}
