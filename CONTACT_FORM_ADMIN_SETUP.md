# Contact Form & Admin Panel Setup Guide

## ✅ What's Been Implemented

1. **MongoDB Database Storage** - All contact form submissions are now saved to MongoDB
2. **Admin Panel** - Full-featured dashboard to view and manage leads
3. **API Routes** - RESTful endpoints for CRUD operations on leads
4. **Authentication** - Secure API key-based authentication for admin access

---

## 📋 Prerequisites

### 1. MongoDB Setup

You have two options:

#### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (Free tier M0 is sufficient)
4. Get your connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/dbname`)

#### Option B: Local MongoDB
1. Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # Mac
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

### 2. Generate Admin API Key

Generate a secure random API key:
```bash
# Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Or use this online tool: https://generate-secret.vercel.app/32
```

Save the generated key (it will be ~64 characters).

---

## 🔧 Configuration Steps

### Step 1: Update `.env.local` File

Create or update the `.env.local` file in your project root:

```bash
# MongoDB Connection
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/eifasoft

# Admin Panel Security
ADMIN_API_KEY=your-generated-api-key-here
```

**Example:**
```bash
MONGODB_URI=mongodb+srv://admin:MySecurePass123@cluster0.abc123.mongodb.net/eifasoft
ADMIN_API_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
```

⚠️ **IMPORTANT**: 
- Never commit `.env.local` to Git (it's in .gitignore)
- Keep your API key secret!
- For production, use environment variables in your hosting platform

### Step 2: Install Dependencies (Already Done)

The required packages have been installed:
```bash
npm install mongodb mongoose
```

---

## 🚀 Using the System

### 1. Access the Admin Panel

Navigate to: `http://localhost:3000/admin/leads`

**First-time setup:**
1. You'll see a prompt asking for your API key
2. Enter the `ADMIN_API_KEY` from your `.env.local`
3. The key is saved in browser localStorage for future visits

### 2. Admin Panel Features

#### Dashboard View
- **Real-time statistics** - See counts for each lead status
- **Full lead table** - Paginated list of all submissions
- **Quick filters** - Filter by status, service, or search text
- **Export to CSV** - Download all leads as CSV file

#### Lead Management
- **View details** - Click any lead to see full information
- **Update status** - Change lead status (New → Contacted → Qualified → Converted/Lost)
- **Add notes** - Track communication history
- **Delete leads** - Remove spam or test submissions

#### Status Workflow
```
New → Contacted → Qualified → Converted
                     ↓
                   Lost
```

### 3. Testing the Contact Form

Submit a test message through your contact form at `/contact`:

1. Fill out all required fields
2. Submit the form
3. Check the admin panel - your submission should appear immediately
4. The submission includes:
   - Form data (name, email, phone, etc.)
   - User agent (browser info)
   - IP address
   - Timestamp

---

## 📊 API Endpoints

### GET `/api/admin/leads`
Fetch all submissions with pagination and filters.

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20)
- `status` - Filter by status (new, contacted, qualified, converted, lost)
- `service` - Filter by service type
- `search` - Search in name, email, phone, company

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_API_KEY
```

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

### PATCH `/api/admin/leads`
Update a submission.

**Body:**
```json
{
  "id": "submission_id",
  "status": "contacted",
  "notes": "Follow up next week"
}
```

### DELETE `/api/admin/leads?id=submission_id`
Delete a submission.

---

## 🔐 Security Features

1. **API Key Authentication** - All admin routes require valid Bearer token
2. **Environment Variables** - Sensitive credentials stored securely
3. **GDPR Compliance** - Consent tracking built into database model
4. **IP Tracking** - Log client IP for fraud prevention

### Production Security Recommendations

1. **Use HTTPS** - Always enable SSL in production
2. **Rate Limiting** - Add rate limiting to prevent abuse
3. **CORS** - Configure CORS to only allow your domain
4. **Logging** - Monitor failed auth attempts
5. **Backup** - Set up automated MongoDB backups

---

## 🛠️ Troubleshooting

### Error: "MongoDB connection error"
- Check `MONGODB_URI` in `.env.local`
- Ensure MongoDB is running (`mongosh` to test connection)
- For Atlas: Verify IP whitelist allows your server
- Check network/firewall settings

### Error: "Unauthorized"
- Verify `ADMIN_API_KEY` matches in `.env.local`
- Clear browser localStorage and re-enter API key
- Ensure no extra spaces in the key

### Error: "Submission not saving"
- Check MongoDB connection logs
- Verify collection permissions
- Look for validation errors in console

### Admin panel shows no leads
- Submit a test form first
- Check browser console for errors
- Verify API key is saved in localStorage

---

## 📱 Mobile Responsiveness

The admin panel is fully responsive:
- Works on tablets and mobile devices
- Touch-friendly interface
- Optimized layouts for small screens

---

## 🎨 Customization

### Change Status Options
Edit `lib/models/ContactSubmission.ts`:
```typescript
status: {
  type: String,
  enum: ['new', 'contacted', 'qualified', 'converted', 'lost'], // Add/remove statuses
  default: 'new',
},
```

### Add Custom Fields
1. Update the model in `lib/models/ContactSubmission.ts`
2. Add field to contact form component
3. Update API route validation
4. Add to admin panel display

### Modify Pagination
Change default limit in `app/api/admin/leads/route.ts`:
```typescript
const limit = parseInt(searchParams.get('limit') || '50'); // Changed from 20
```

---

## 📈 Next Steps

### Email Notifications (Optional)
Integrate SendGrid or AWS SES in `app/api/contact/route.ts`:

```typescript
// After saving to database
await sendEmail({
  to: 'sales@eifasoft.com',
  subject: `New Lead: ${name}`,
  html: `...`,
});
```

### Slack Notifications (Optional)
Add webhook notification:

```typescript
await fetch(process.env.SLACK_WEBHOOK_URL, {
  method: 'POST',
  body: JSON.stringify({
    text: `🎯 New lead from ${name} for ${service}`,
  }),
});
```

### CRM Integration
Sync leads to HubSpot, Salesforce, or other CRM systems using their APIs.

---

## 📞 Support

If you encounter issues:
1. Check console logs for error messages
2. Verify all environment variables are set correctly
3. Test MongoDB connection separately using MongoDB Compass
4. Review the code comments for TODO markers

---

## ✅ Checklist

- [ ] MongoDB instance set up (Atlas or local)
- [ ] `.env.local` created with `MONGODB_URI` and `ADMIN_API_KEY`
- [ ] Dependencies installed (`mongodb`, `mongoose`)
- [ ] Test contact form submission
- [ ] Access admin panel at `/admin/leads`
- [ ] Export test leads to CSV
- [ ] Update lead status workflow tested
- [ ] Delete test submissions

**All done! Your contact form now saves to MongoDB and you have a full admin panel to manage leads! 🎉**
