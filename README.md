# 🚨 [deprecated, new example at firebase-gcp-examples](https://github.com/jthegedus/firebase-gcp-examples)

---

## GraphQL Server on Cloud Functions for Firebase

Host a GraphQL Server in Cloud Functions for Firebase [with ES6+](https://github.com/jthegedus/firebase-functions-es6-example)!

Here is the accompanying [Medium Post](https://medium.com/@jthegedus/graphql-server-on-cloud-functions-for-firebase-ae97441399c0).

This method is markedly simpler than any other GraphQL-on-FaaS method I have seen. No custom packages for [GCP](https://github.com/nicolasdao/google-graphql-functions) or struggling with API Gateway or complex setup instructions for [AWS](https://github.com/apollographql/graphql-server/tree/master/packages/graphql-server-lambda). Just use the [most prominent, community drive implementation](http://dev.apollodata.com/tools/graphql-server/index.html).

## TLDR;
Host your GraphQL Server on Cloud Functions enabling rapid development with GraphQL on a low-cost, auto-scaling web server leveraging Firebase's sweet, sweet developer experience.

Cloud Functions can accept an [Express Server object directly](http://stackoverflow.com/questions/43579442/cloud-functions-for-firebase-and-express), so leverage the Apollo [apollo-server-express](https://github.com/apollographql/apollo-server) pacakge to setup our GraphQL server.

The schema and resolvers are the same used in the [Apollo example](https://github.com/apollographql/frontpage-server).

### Routes
Schema: `https://us-central1-<project-name>.cloudfunctions.net/api/schema`

GraphiQL: `https://us-central1-<project-name>.cloudfunctions.net/api/graphiql`

GraphQL: `https://us-central1-<project-name>.cloudfunctions.net/api/graphql?<query>`

## Installation
```
git clone https://github.com/jthegedus/firebase-functions-graphql-example
cd firebase-functions-graphql-example
yarn install
```

## Local Development
```
yarn serve
```
This will serve the Cloud Functions locally using the [Firebase emulator](https://firebase.google.com/docs/functions/local-emulator).

## Deploy to Firebase
```
yarn deploy
```
*N.B.*: Replace `<project-name>` in the `.firebaserc` to connect the project to your Firebase project.

## A note on Code Compatibility
Everything was tested on Ubuntu 16.04 & Windows 10 with [Bash on Ubuntu on Windows](https://msdn.microsoft.com/en-au/commandline/wsl/about). If you wish for Windows native support please [submit an issue](https://github.com/jthegedus/firebase-functions-graphql-example/issues/new) so we can work on a Windows branch. Please report any macOS errors as I do not have access to a device to test. [My development environment can be found here](https://github.com/jthegedus/dotfiles).
