## How to run the app

### Running the Express server
IMPORTANT: You *need* to add a token.js file under webservice/ in order for this to work. It should look like:
```javascript
token = "Bearer eyJ...9Y8"

module.exports = token
```
With your own token. I wasn't sure if adding it to GitHub secrets would allow anyone to run it, so this is the best workaround I could come up with. 

After that, all you need to do is run
```bash
cd webservice
npm install
npm run start
```

This starts a server running on localhost:8080.

### Running the Nuxt Frontend
For this, run the following:
```bash
cd webapp
npm install
npm run dev -- -o
```
That runs the dev server on localhost:3000. Alternatively, you could do:

```bash
cd webapp
npm install
npm run build
npm run start
```

## Future improvements
- [ ] Convert token to a json file or github secrets
- [ ] add logo ai generated
- [ ] SEO and metadata: https://nuxt.com/docs/getting-started/seo-meta

## TODO
- [x] Add basic API call to TMDB in express
- [x] Add search text and button to frontend
- [x] Add results to frontend
- [x] prettify frontend
- [x] Add test cases for backend
- [ ] Add testing to frontend