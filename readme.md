# ilya.online

## Deploying frontend to S3 bucket
Create .env.development and .env.production files, according to `.env.dist` file.

Launch `ilya-online-react-api` backend, should be running on `http:localhost:3001`

> `.env.production` is vital for the production build, otherwise Next will likely give errors 

Make the deployment file executable if it isn't yet: `sudo chmod +x deploy.sh`

Run `npm run deploy`
