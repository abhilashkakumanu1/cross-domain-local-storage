# Cross dDomain Local storage.

## Context

In the process of implementing a central-auth system, we faced a problem of storing JWT on client browser and retrieving it on different domains. When user logins in to central-auth, he/she gets a JWT. This has to be stored and reused across other services that central-auth is catering to. cookies, local-storage, etc are only domain specific. cookies can shared across sub-domains but we are not sure if all the services will be on the same domain in future. Also, cookie management is a cumbersome task that involves changes in backend as well (shift from Bearer Token based auth).

So, this approach seemed to fit all our needs - use local-storage, not much changes in existing backend.

Let's say the user lands on one of the services page **for the first time**. We render a iframe with central-auth login page. Once the user logins, the JWT received by the central-auth FE (inside the iframe) will be shared with the main page using `postMessage` method. Service FE will listen to the `"message"` event and sets its local-storage with the data (`"event.data"`) received from the iframe!

## Resources

1. [stack over flow post](https://stackoverflow.com/questions/33957477/cross-domain-localstorage-with-javascript)
2. [treehouse blog post](http://blog.teamtreehouse.com/cross-domain-messaging-with-postmessage)

## Set up

```bash
# Terminal 1
cd cental-auth
npm start

# Terminal 2
cd ../service
npm start
```
