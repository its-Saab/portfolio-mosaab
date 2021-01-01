const path = require('path')


module.exports = {

  //to inform nextjs that i want to expose this part only to the client
  //so i can add it as part of the link in auth0
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE
  }
}
