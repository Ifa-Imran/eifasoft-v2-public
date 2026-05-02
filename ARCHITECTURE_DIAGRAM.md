# Contact Form & Admin Panel - Architecture Diagram

## System Flow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER SUBMITS FORM                        │
│                     (eifasoft.com/contact)                       │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     │ POST /api/contact
                     │ { name, email, phone, service, message }
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CONTACT API ROUTE                             │
│                  app/api/contact/route.ts                        │
│                                                                  │
│  1. Validate required fields                                     │
│  2. Validate email format                                        │
│  3. Extract client info (IP, User-Agent)                         │
│  4. Save to MongoDB                                              │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     │ connectDB()
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                      MONGODB DATABASE                            │
│               mongodb://localhost:27017/eifasoft                 │
│                                                                  │
│  Collection: contactsubmissions                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ {                                                         │   │
│  │   _id: ObjectId,                                          │   │
│  │   name: String,                                           │   │
│  │   email: String,                                          │   │
│  │   phone: String,                                          │   │
│  │   company: String,                                        │   │
│  │   service: String,                                        │   │
│  │   message: String,                                        │   │
│  │   gdprConsent: Boolean,                                   │   │
│  │   status: "new" | "contacted" | "qualified" | ...        │   │
│  │   source: "website",                                      │   │
│  │   userAgent: String,                                      │   │
│  │   ip: String,                                             │   │
│  │   notes: String,                                          │   │
│  │   assignedTo: String,                                     │   │
│  │   createdAt: Date,                                        │   │
│  │   updatedAt: Date                                         │   │
│  │ }                                                         │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                     │
                     │ Success Response
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                   SUCCESS MESSAGE TO USER                        │
│         "Thank you! We will get back to you shortly."            │
└─────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                      ADMIN ACCESS FLOW                           │
│                  (eifasoft.com/admin/login)                      │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     │ Enter ADMIN_API_KEY
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                   ADMIN LOGIN PAGE                               │
│                  app/admin/login/page.tsx                        │
│                                                                  │
│  1. User enters API key                                          │
│  2. Validates with test API call                                 │
│  3. Saves to localStorage                                        │
│  4. Redirects to dashboard                                       │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     │ Bearer Token Auth
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                  ADMIN DASHBOARD                                 │
│                 app/admin/leads/page.tsx                         │
│                                                                  │
│  Features:                                                       │
│  • View all leads (paginated)                                    │
│  • Filter by status/service/search                               │
│  • Statistics cards (counts by status)                           │
│  • Click to view details                                         │
│  • Update status                                                 │
│  • Add notes                                                     │
│  • Delete submissions                                            │
│  • Export to CSV                                                 │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     │ GET /api/admin/leads?page=1&limit=20
                     │ Authorization: Bearer <API_KEY>
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                  ADMIN LEADS API                                 │
│               app/api/admin/leads/route.ts                       │
│                                                                  │
│  1. Verify authentication (requireAuth)                          │
│  2. Connect to MongoDB                                           │
│  3. Build filter from query params                               │
│  4. Query with pagination                                        │
│  5. Return leads + pagination metadata                           │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     │ requireAuth()
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                  AUTH MIDDLEWARE                                 │
│                    lib/auth.ts                                   │
│                                                                  │
│  1. Extract Bearer token from header                             │
│  2. Compare with ADMIN_API_KEY env var                           │
│  3. Return 401 if invalid                                        │
│  4. Return null if valid (proceed)                               │
└─────────────────────────────────────────────────────────────────┘
```

## Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     FRONTEND (React/Next.js)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────┐    ┌─────────────────┐    ┌──────────────┐ │
│  │  Contact Form   │    │  Admin Login    │    │ Admin Leads  │ │
│  │  Component      │    │  Page           │    │ Dashboard    │ │
│  │                 │    │                 │    │              │ │
│  │ • Name input    │    │ • API key input │    │ • Lead table │ │
│  │ • Email input   │    │ • Validation    │    │ • Filters    │ │
│  │ • Phone input   │    │ • Error display │    │ • Statistics │ │
│  │ • Service select│    │ • LocalStorage  │    │ • Pagination │ │
│  │ • Message area  │    │                 │    │ • Modals     │ │
│  │ • Submit button │    │                 │    │ • CSV export │ │
│  └────────┬────────┘    └─────────────────┘    └──────┬───────┘ │
│           │                                           │          │
└───────────┼───────────────────────────────────────────┼──────────┘
            │                                           │
            │ POST /api/contact                         │ GET/PATCH/DELETE /api/admin/leads
            ▼                                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      BACKEND (Next.js API Routes)                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────┐    ┌────────────────────────────┐ │
│  │  /api/contact            │    │  /api/admin/leads          │ │
│  │  (POST)                  │    │  (GET, PATCH, DELETE)      │ │
│  │                          │    │                            │ │
│  │ • Validate input         │    │ • Authenticate request     │ │
│  │ • Extract IP/User-Agent  │    │ • Build filters            │ │
│  │ • Create DB document     │    │ • Query MongoDB            │ │
│  │ • Return success         │    │ • Update/Delete documents  │ │
│  └───────────┬──────────────┘    └─────────────┬──────────────┘ │
│              │                                  │                │
└──────────────┼──────────────────────────────────┼────────────────┘
               │                                  │
               │         connectDB()              │
               └──────────────┬───────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DATABASE LAYER (MongoDB)                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────┐    ┌────────────────────────────┐ │
│  │  lib/mongodb.ts          │    │  ContactSubmission Model   │ │
│  │                          │    │                            │ │
│  │ • Connection pooling     │    │ • Schema definition        │ │
│  │ • Caching mechanism      │    │ • Indexes for performance  │ │
│  │ • Error handling         │    │ • Timestamps (createdAt,   │ │
│  │ • TypeScript types       │    │   updatedAt)               │ │
│  └──────────────────────────┘    └────────────────────────────┘ │
│                                                                  │
│  Database: eifasoft                                              │
│  Collection: contactsubmissions                                  │
│  Indexes: createdAt(-1), status(1), email(1), service(1)         │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow Sequence

### 1. Contact Form Submission
```
User fills form → Validates client-side → POST /api/contact
→ Validate server-side → Extract metadata (IP, UA)
→ Connect to MongoDB → Insert document → Return success ID
→ Show success message to user
```

### 2. Admin Login
```
Navigate to /admin/login → Enter API key → Test with API call
→ Save to localStorage → Redirect to /admin/leads
```

### 3. View Leads
```
Dashboard loads → Read API key from localStorage
→ GET /api/admin/leads with filters → Authenticate request
→ Build MongoDB query → Execute with pagination
→ Return leads array + pagination metadata → Display in table
```

### 4. Update Lead Status
```
Click lead → Open detail modal → Change status dropdown
→ PATCH /api/admin/leads/[id] → Authenticate
→ FindByIdAndUpdate → Return updated document
→ Refresh dashboard data → Close modal
```

### 5. Export CSV
```
Click "Export CSV" button → Filter current leads
→ Convert to CSV format → Create Blob
→ Generate download link → Trigger browser download
→ File: leads-YYYY-MM-DD.csv
```

## Security Layers

```
┌─────────────────────────────────────────────────────────────────┐
│ Layer 1: Environment Variables                                   │
│ • MONGODB_URI stored in .env.local                              │
│ • ADMIN_API_KEY stored in .env.local                            │
│ • Never committed to Git                                        │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Layer 2: API Authentication                                      │
│ • Bearer token required for all admin routes                    │
│ • Middleware validates every request                            │
│ • Returns 401 Unauthorized if invalid                           │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Layer 3: Input Validation                                        │
│ • Email format validation                                       │
│ • Required field checking                                       │
│ • Type safety with TypeScript                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Layer 4: Database Security                                       │
│ • MongoDB connection string encrypted                           │
│ • GDPR consent tracking                                         │
│ • IP logging for fraud prevention                               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Layer 5: Frontend Security                                       │
│ • API key stored in localStorage (not cookies)                  │
│ • No sensitive data in client code                              │
│ • CORS configuration (production)                               │
└─────────────────────────────────────────────────────────────────┘
```

## File Structure

```
eifasoft-v2/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts                    ← Contact form handler
│   │   └── admin/
│   │       └── leads/
│   │           ├── route.ts                ← List/filter leads
│   │           └── [id]/
│   │               └── route.ts            ← Update/delete lead
│   └── admin/
│       ├── login/
│       │   └── page.tsx                    ← Admin login page
│       └── leads/
│           └── page.tsx                    ← Leads dashboard
├── lib/
│   ├── mongodb.ts                          ← Database connection
│   ├── auth.ts                             ← Auth middleware
│   └── models/
│       └── ContactSubmission.ts            ← Mongoose model
├── .env.example                            ← Template for env vars
├── .env.local                              ← Actual credentials (gitignored)
└── [Documentation files]
    ├── CONTACT_FORM_ADMIN_SETUP.md
    ├── QUICK_START_MONGODB_ADMIN.md
    ├── IMPLEMENTATION_SUMMARY_CONTACT_FORM.md
    └── ARCHITECTURE_DIAGRAM.md             ← This file
```

## Technology Stack

```
Frontend:
├── React 19.1.0
├── Next.js 15.5.6
├── TypeScript 5.x
├── Tailwind CSS 4
└── Framer Motion 12

Backend:
├── Next.js API Routes
├── MongoDB Driver
├── Mongoose ORM
└── Node.js

Database:
└── MongoDB (Atlas or Local)
    └── Collections: contactsubmissions

Deployment:
├── Vercel (recommended)
├── Netlify
└── Any Node.js host
```

## API Endpoints Summary

| Method | Endpoint | Purpose | Auth Required |
|--------|----------|---------|---------------|
| POST | `/api/contact` | Submit contact form | ❌ No |
| GET | `/api/admin/leads` | List all leads | ✅ Yes |
| PATCH | `/api/admin/leads/[id]` | Update lead | ✅ Yes |
| DELETE | `/api/admin/leads?id=[id]` | Delete lead | ✅ Yes |

## Environment Variables

```bash
# Required for the system to work:

MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/eifasoft
ADMIN_API_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6

# Optional (for future enhancements):

SENDGRID_API_KEY=for_email_notifications
SLACK_WEBHOOK_URL=for_slack_alerts
```

---

**This architecture provides a scalable, secure, and production-ready foundation for managing contact form leads!** 🚀
