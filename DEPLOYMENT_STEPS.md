# 🚀 Render Deployment Guide for Revonza Studio

## Quick Deployment Steps

### Step 1: Push Your Code to GitHub
```bash
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### Step 2: Deploy on Render
1. Go to [https://render.com](https://render.com) and log in
2. Click **"New +"** → Select **"Web Service"**
3. Connect your GitHub repository
4. Select your repository: `RevonzaStudio-main`
5. Configure with these settings:

| Setting | Value |
|---------|-------|
| **Name** | revonza-studio |
| **Environment** | Node |
| **Region** | Oregon (or closest to your users) |
| **Branch** | main |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Instance Type** | Free |

### Step 3: Add Environment Variables
In Render dashboard, go to **Environment** section and add:

| Variable | Value | Required |
|----------|-------|----------|
| `NODE_ENV` | `production` | ✅ Yes |
| `RAZORPAY_KEY_ID` | Your Razorpay Key ID | ✅ Yes |
| `RAZORPAY_KEY_SECRET` | Your Razorpay Secret | ✅ Yes |
| `GMAIL_USER` | Your Gmail address | ✅ Yes |
| `GMAIL_PASS` | Your Gmail App Password | ✅ Yes |
| `VITE_RAZORPAY_KEY_ID` | Same as RAZORPAY_KEY_ID | ✅ Yes |
| `VITE_BACKEND_URL` | Your Render URL (after deployment) | ⚠️ Optional |

**How to get Gmail App Password:**
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate password for "Mail"

### Step 4: Deploy
1. Click **"Create Web Service"**
2. Wait for build to complete (3-5 minutes)
3. Your site will be live at: `https://revonza-studio.onrender.com`

## 🔧 Important Notes

### Auto-Deploy
Your app is configured for **auto-deploy**. Every time you push to the `main` branch, Render will automatically rebuild and deploy.

### First Deploy Takes Longer
The first deployment may take 5-7 minutes. Subsequent deploys are faster.

### Environment Variables
- All payment and email features require proper environment variables
- Without them, the app will still work but payment/email features won't function

### Custom Domain (Optional)
After deployment:
1. Go to your Render service dashboard
2. Click **"Custom Domains"**
3. Add your domain (e.g., `www.revonzastudio.tech`)
4. Update DNS records as instructed

## 🐛 Troubleshooting

### Build Fails?
- Check build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Run `npm install && npm run build` locally to test

### App Crashes on Start?
- Verify environment variables are set correctly
- Check logs in Render dashboard for error messages
- Ensure PORT variable is not hardcoded (server uses `process.env.PORT`)

### Payment Not Working?
- Verify Razorpay keys are correct
- Check that `VITE_RAZORPAY_KEY_ID` matches `RAZORPAY_KEY_ID`
- Test in Razorpay test mode first

### Email Not Sending?
- Verify Gmail credentials
- Use App Password (not regular password)
- Check Gmail account has 2FA enabled

## 📊 Your Current Setup

✅ **Server**: Express.js with compression and security headers  
✅ **Frontend**: React + Vite (builds to `dist/` folder)  
✅ **Payment**: Razorpay integration  
✅ **Email**: Nodemailer with Gmail  
✅ **Routing**: Client-side routing with catch-all handler  
✅ **Static Files**: Served from `dist/` folder  
✅ **Auto-Deploy**: Enabled via `render.yaml`  

## 🎯 After Deployment

1. Test all pages and routes
2. Test payment flow (use Razorpay test mode)
3. Verify email delivery
4. Set up custom domain if needed
5. Monitor logs in Render dashboard

---

**Need Help?** Check the logs in your Render dashboard for detailed error messages.
