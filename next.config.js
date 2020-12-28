const path = require('path')
//loading the dotenv into the app so the auth0 naming config works
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    //this line is for the dotenv to work with the auth0 naming config
    config.plugins.push(new Dotenv({silent: true}))
    return config
  },
  //to inform nextjs that i want to expose this part only to the client
  //so i can add it as part of the link in auth0
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE
  }
}
