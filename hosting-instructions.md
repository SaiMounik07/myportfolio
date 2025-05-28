# Free Hosting Instructions for Your Portfolio Website

This guide provides step-by-step instructions for deploying your portfolio website to various free hosting platforms. Each option is beginner-friendly and requires minimal setup.

## Option 1: Netlify (Recommended)

Netlify offers free hosting with continuous deployment, custom domains, and HTTPS.

### Steps for Netlify Deployment:

1. **Create a build of your React application**:
   ```bash
   cd /home/ubuntu/portfolio/portfolio-app
   pnpm run build
   ```
   This will create a `dist` folder with your optimized website files.

2. **Create a Netlify account**:
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up for a free account (you can use GitHub, GitLab, or email)

3. **Deploy your site**:
   - From the Netlify dashboard, click "Add new site" → "Import an existing project"
   - Connect to your GitHub/GitLab if you've pushed your code there, or use the "Deploy manually" option
   - For manual deployment:
     - Drag and drop your `dist` folder onto the upload area
     - Wait for the upload and deployment to complete (usually takes less than a minute)

4. **Configure your site**:
   - Once deployed, Netlify will assign a random subdomain (e.g., `your-portfolio-123abc.netlify.app`)
   - You can customize this by going to "Site settings" → "Domain management" → "Custom domains"
   - You can use a free Netlify subdomain or connect your own domain if you have one

5. **Set up continuous deployment (optional)**:
   - If you've connected to GitHub/GitLab, Netlify will automatically rebuild and deploy your site when you push changes
   - This makes future updates extremely simple

## Option 2: Vercel

Vercel is another excellent platform for hosting React applications with similar features to Netlify.

### Steps for Vercel Deployment:

1. **Create a Vercel account**:
   - Go to [vercel.com](https://vercel.com/)
   - Sign up for a free account (GitHub, GitLab, or email)

2. **Install Vercel CLI (optional)**:
   ```bash
   npm install -g vercel
   ```

3. **Deploy your site**:
   - Option 1 (Web UI): Import your GitHub repository
   - Option 2 (CLI):
     ```bash
     cd /home/ubuntu/portfolio/portfolio-app
     vercel login
     vercel
     ```
   - Follow the prompts to complete deployment

4. **Configure your site**:
   - Vercel will provide a URL for your deployed site (e.g., `your-portfolio.vercel.app`)
   - You can customize domains in the project settings

## Option 3: GitHub Pages

GitHub Pages is a free hosting service provided by GitHub, perfect for static websites.

### Steps for GitHub Pages Deployment:

1. **Create a GitHub repository**:
   - Go to [github.com](https://github.com/) and create a new repository
   - Name it `your-username.github.io` for a user site, or any name for a project site

2. **Configure your React app for GitHub Pages**:
   - Install the gh-pages package:
     ```bash
     cd /home/ubuntu/portfolio/portfolio-app
     pnpm add -D gh-pages
     ```
   
   - Add these scripts to your package.json:
     ```json
     "scripts": {
       "predeploy": "pnpm run build",
       "deploy": "gh-pages -d dist"
     }
     ```
   
   - Add homepage field to package.json:
     ```json
     "homepage": "https://your-username.github.io/repo-name"
     ```

3. **Deploy to GitHub Pages**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/repo-name.git
   git push -u origin main
   pnpm run deploy
   ```

4. **Configure GitHub Pages in repository settings**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select the gh-pages branch as the source

## Option 4: Firebase Hosting

Google's Firebase offers free hosting with a generous free tier.

### Steps for Firebase Hosting:

1. **Create a Firebase account**:
   - Go to [firebase.google.com](https://firebase.google.com/)
   - Sign in with your Google account

2. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

3. **Initialize Firebase in your project**:
   ```bash
   cd /home/ubuntu/portfolio/portfolio-app
   firebase login
   firebase init
   ```
   - Select "Hosting" when prompted
   - Choose "build" as your public directory
   - Configure as a single-page app: Yes
   - Set up automatic builds and deploys: No

4. **Deploy to Firebase**:
   ```bash
   pnpm run build
   firebase deploy
   ```

5. **Access your site**:
   - Firebase will provide a URL for your deployed site (e.g., `your-project-id.web.app`)

## Maintaining Your Site

Regardless of which platform you choose, updating your site follows a similar process:

1. Make changes to your code
2. Build your project: `pnpm run build`
3. Deploy using the platform-specific command:
   - Netlify: Upload the new build folder or push to connected repository
   - Vercel: `vercel` or push to connected repository
   - GitHub Pages: `pnpm run deploy`
   - Firebase: `firebase deploy`

## Custom Domain Setup (Optional)

All the platforms above support custom domains if you want to use your own domain name:

1. Purchase a domain from a registrar like Namecheap, GoDaddy, or Google Domains
2. Follow the platform-specific instructions to connect your custom domain
3. Update DNS settings at your domain registrar as instructed by the hosting platform

## Need Help?

If you encounter any issues during deployment, each platform offers comprehensive documentation:

- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
