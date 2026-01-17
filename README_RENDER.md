# Deploy to Render

This guide will help you deploy your React application to Render.

## Prerequisites

- A Render account (sign up at [https://render.com](https://render.com))
- Your project hosted on a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

1. **Prepare your repository**:
   - Ensure all your code is committed and pushed to your Git repository
   - Make sure your `render.yaml` file is present in the root directory

2. **Deploy to Render**:
   - Log in to your Render account
   - Click on "New +" and select "Web Service"
   - Connect your Git repository
   - Select your branch (usually `main` or `master`)
   - Render will automatically detect that it's a Node.js project
   - Use the following settings:
     - **Environment**: Node.js
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Region**: Choose the region closest to your users
   - Click "Create Web Service"

3. **Configure environment variables** (if needed):
   - In your Render dashboard, go to your service settings
   - Add environment variables under "Environment Variables" section
   - For this project, you may need to set:
     - `NODE_ENV=production`

4. **Monitor the deployment**:
   - Watch the build logs in the Render dashboard
   - Once successful, your app will be available at the assigned URL
   - The URL will be in the format: `https://your-service-name.onrender.com`

## Important Notes

- The `render.yaml` file in this repository defines the deployment configuration
- Static assets will be served from the `dist` folder after the build process
- Client-side routing is handled by the Express server in `server.js`
- The application will listen on the port specified by the `PORT` environment variable provided by Render

## Troubleshooting

If you encounter issues:

1. Check the build logs in the Render dashboard for error messages
2. Ensure all dependencies are listed in `package.json`
3. Verify that the start command works locally: `npm start`
4. Make sure the server listens on the `process.env.PORT` variable

## Custom Domain (Optional)

Once deployed, you can connect a custom domain:
- Go to your service dashboard
- Navigate to "Domains" section
- Add your custom domain and follow the instructions