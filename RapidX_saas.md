Build RapidX AI SaaS Platform
Context & Foundation
You are building a complete SaaS platform called "RapidX AI" on top of the existing GitHub repository toprmrproducer/InboundAIVoice (LiveKit + Vobiz SIP outbound calling agent). The current repo provides basic outbound calling infrastructure using LiveKit, Vobiz SIP, OpenAI/Deepgram for STT/TTS/LLM.
Current Tech Stack to Extend:
Backend: Python (LiveKit Agents, FastAPI/Flask)
Telephony: LiveKit + Vobiz SIP Trunk
AI: OpenAI GPT/Deepgram (STT), OpenAI TTS or alternative
Current Features: Outbound calling, call transfer, basic dispatch system
OBJECTIVE: Build Complete Multi-Tenant SaaS Platform
Transform the single-user outbound calling script into a full-featured SaaS platform with user management, billing, dashboards, and scalable architecture.
1. USER MANAGEMENT & AUTHENTICATION SYSTEM
Requirements:
Multi-Tenant Architecture:
Implement tenant isolation where each user/company has completely separated data
Subdomain-based routing: {company}.rapidxai.com or path-based /dashboard/{company}
Support for team members/roles within each tenant (Admin, Manager, Agent Viewer)
Authentication & Authorization:
JWT-based authentication with refresh token rotation
OAuth2 integration (Google, Microsoft) for business users
Multi-factor authentication (MFA) via SMS/Email
Password policies and secure reset flows
API key generation for programmatic access (each user gets unique API keys)
User Profiles:
Company profile setup (name, industry, logo, timezone)
Individual user profiles (name, email, phone, role, avatar)
Notification preferences (email, SMS, Telegram, WhatsApp)
Billing address and GST/Tax information (India-focused)
Database Schema (PostgreSQL):
sql
Copy
-- Users & Authentication
users (id, email, password_hash, phone, email_verified, mfa_enabled, created_at)
companies (id, name, slug, logo_url, industry, timezone, billing_address, gst_number)
company_members (id, company_id, user_id, role, permissions, joined_at)
api_keys (id, company_id, key_hash, name, permissions, last_used, expires_at)

-- Subscription & Billing
subscriptions (id, company_id, plan_type, status, current_period_start, current_period_end)
usage_tracking (id, company_id, date, calls_made, minutes_used, cost_incurred)
payment_methods (id, company_id, type, provider_token, last4, expiry)
invoices (id, company_id, amount, status, pdf_url, created_at)
2. BILLING & PAYMENT SYSTEM
Requirements:
Subscription Plans (as per pitch deck):
Implement three-tier pricing with Razorpay/Stripe integration:
Table
Plan	Price	Features
Starter	₹49,999/month	5,000 calls, 1 agent, basic features
Growth	₹99,999/month	15,000 calls, 3 agents, advanced analytics
Enterprise	₹2,49,999/month	Unlimited, unlimited agents, custom features
Pay-Per-Call	₹2.50/call	No commitment, minimum ₹10,000
Billing Features:
Indian Payment Focus: Razorpay integration (UPI, Cards, NetBanking, Wallets)
International: Stripe for global cards
GST Invoicing: Auto-generate GST-compliant invoices (India)
Usage Tracking: Real-time call/minute consumption tracking
Overage Handling: Automatic tier upgrades or per-call overage charges
Wallet System: Prepaid balance for Pay-Per-Call users
Billing Alerts: Email/Telegram alerts at 80%, 100% usage
Billing Dashboard Components:
Current plan with usage meter (visual progress bar)
Upcoming invoice amount and due date
Payment history with downloadable PDFs
Upgrade/Downgrade plan with prorated calculations
Add/remove payment methods
Billing notifications settings
3. USER DASHBOARD - MAIN INTERFACE
Layout: Modern React/Vue.js SPA with Sidebar Navigation
Sidebar Navigation:
Dashboard (Overview)
Campaigns (Call campaigns management)
Call History (Logs, recordings, transcripts)
Calendar (Appointments/Bookings)
Analytics (Reports & Insights)
Phone Numbers (Manage DIDs)
Team Management (Members & permissions)
Integrations (Calendar, CRM, WhatsApp)
Settings (Profile, Billing, API Keys)
Help & Support
Dashboard Home - Key Widgets:
1. Real-Time Metrics Cards:
plain
Copy
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   📞 Calls  │ │  ⏱️ Avg     │ │   ✅ Booked │ │   💰 Cost   │
│   Today     │ │  Duration   │ │   Today     │ │   Today     │
│   1,247     │ │   2m 34s    │ │    89       │ │   ₹3,420    │
│   ↑ 12%     │ │   ↓ 5%      │ │   ↑ 23%     │ │   ↑ 8%      │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
2. Live Call Monitor:
WebSocket-connected real-time view of active calls
Listen-in capability (supervisor feature)
Force transfer or terminate calls
Agent status (Idle, Calling, In-Call, Wrap-up)
3. Usage Chart:
Daily/weekly/monthly call volume
Cost trend line
Plan usage progress bar with warning colors
4. Recent Activity Feed:
Latest calls with sentiment indicators (🟢🟡🔴)
New bookings/appointments
System alerts and notifications
5. Quick Actions:
"Start New Campaign" button
"Add Credit" (for prepaid users)
"Download Report"
4. CAMPAIGN MANAGEMENT SYSTEM
Campaign Creation Wizard:
Step 1: Campaign Settings
Campaign name and description
Select AI Agent persona (voice, language, script)
Target audience (upload CSV/Excel or select from CRM)
Schedule (immediate, scheduled date, recurring)
Step 2: Script Builder
Visual script editor with nodes (Decision tree)
Variables insertion: {{name}}, {{company}}, {{previous_interaction}}
Intent detection configuration
Transfer rules and conditions
Step 3: Phone Number Configuration
Select outbound caller ID (from purchased DIDs)
Local number matching (show local number to recipient)
Compliance settings (DND check, calling hours 9AM-8PM IST)
Step 4: Calendar Integration
Connect Google/Outlook/Cal.com
Set available time slots
Buffer time between appointments
Assign to specific team member
Step 5: Launch & Monitor
Test call functionality
Launch campaign with rate limiting
Real-time progress tracking
Campaign Dashboard:
List view with status (Draft, Running, Paused, Completed)
Progress bars (Calls made / Total leads)
Conversion rates and cost per booking
Pause/Resume/Stop controls
Clone campaign feature
5. CALL HISTORY & ANALYTICS
Call Logs Table:
plain
Copy
| Time | Phone Number | Duration | Status | Sentiment | Recording | Booking | Actions |
|------|-------------|----------|--------|-----------|-----------|---------|---------|
| 2:34 PM | +91 98765... | 3m 12s | Completed | 🟢 Positive | 🔊 Play | ✅ Yes | 📄 View |
| 2:28 PM | +91 87654... | 0m 45s | No Answer | ⚪ N/A | ❌ None | ❌ No | 🔄 Retry |
Call Detail View:
Full transcript with speaker labels (AI vs Human)
Sentiment analysis timeline (graph showing mood changes)
Key moments tagging (Objection raised, Booking made, Transfer requested)
Audio player with waveform visualization
Download transcript (PDF/TXT)
Add manual notes/tags
Analytics & Reporting:
Pre-built Reports:
Call Performance Report
Total calls, connection rate, conversation rate
Duration distribution histogram
Time-of-day heatmap (best calling times)
Conversion Funnel
Calls placed → Connected → Qualified → Booked
Drop-off points analysis
Agent Performance (if multiple AI agents)
A/B testing different scripts/voices
Conversion rate by agent
Cost Analysis
Cost per call, cost per minute, cost per booking
Trend analysis and forecasting
Sentiment Analysis Report
Positive/Neutral/Negative distribution
Common objections and responses
Custom Report Builder:
Date range selector
Filter by campaign, agent, phone number, outcome
Export to CSV, PDF, Excel
Scheduled email reports (daily/weekly/monthly)
6. CALENDAR & BOOKINGS MANAGEMENT
Integrated Calendar View:
Two-way sync with Google Calendar, Cal.com, Outlook
Color-coded booking types (Demo, Consultation, Follow-up)
Drag-and-drop rescheduling
Availability management (block time slots)
Booking Details:
Customer info from call context
Call recording link attached to booking
Notes from AI conversation
Automatic reminder setup (Email/SMS/WhatsApp 24h, 1h before)
Notification Templates:
Customizable Telegram/WhatsApp message templates
Email confirmation templates with company branding
Reminder sequences
7. INTEGRATIONS HUB
Available Integrations:
Calendar:
Google Calendar (OAuth2)
Microsoft Outlook
Cal.com
CRM:
Salesforce
HubSpot
Zoho CRM
Pipedrive
Freshsales
Custom webhook
Messaging:
Telegram Bot (notifications)
WhatsApp Business API
Email (SendGrid/AWS SES)
Telephony:
Vobiz SIP (default)
Twilio (backup/fallback)
Exotel (Indian alternative)
Storage:
AWS S3 (call recordings)
Google Cloud Storage
Local storage option
Integration Settings UI:
Connect/disconnect accounts
Field mapping configuration
Sync frequency settings
Error logs and retry management
8. SETTINGS & CONFIGURATION
Company Settings:
Branding (logo, colors for emails/notifications)
Default timezone and language
Working hours (affecting AI availability messaging)
Compliance settings (DND scrubbing, recording consent)
AI Agent Configuration:
Voice selection (Male/Female, accent, speed)
Language preferences (Hindi, English, Hinglish, etc.)
Conversation style (Formal, Friendly, Professional)
Maximum call duration limit
Transfer rules and fallback numbers
User & Team Management:
Invite team members via email
Role assignment (Admin, Manager, Viewer)
Permission matrix (who can view calls, manage campaigns, access billing)
Activity logs for audit
Security Settings:
Change password, enable 2FA
API key management (rotate, revoke)
Session management (view active sessions, logout remotely)
Data export (GDPR compliance)
Notification Preferences:
Email notifications for: New bookings, Failed calls, Billing alerts
Telegram chat ID configuration
WhatsApp number for alerts
Webhook URLs for custom integrations
9. API & WEBHOOK SYSTEM
REST API Endpoints:
Authentication:
POST /api/v1/auth/login
POST /api/v1/auth/refresh
POST /api/v1/auth/api-keys (generate/revoke)
Campaigns:
GET /api/v1/campaigns (list)
POST /api/v1/campaigns (create)
GET /api/v1/campaigns/{id} (details)
POST /api/v1/campaigns/{id}/start
POST /api/v1/campaigns/{id}/pause
Calls:
POST /api/v1/calls (trigger single call)
GET /api/v1/calls (list with filters)
GET /api/v1/calls/{id} (details + transcript)
GET /api/v1/calls/{id}/recording (download)
Analytics:
GET /api/v1/analytics/summary (dashboard metrics)
GET /api/v1/analytics/calls (detailed call stats)
GET /api/v1/analytics/costs (billing breakdown)
Webhooks:
Users can configure webhooks for events:
call.completed - Full call data + transcript
booking.created - Appointment details
campaign.status_changed - Started, paused, completed
billing.threshold_reached - Usage alerts
SDK:
Provide Python and Node.js SDKs for easy integration.
10. ADMIN PANEL (For Platform Owners)
Super Admin Dashboard:
System Overview:
Total active companies
Total calls today/month
Revenue metrics (MRR, ARR)
System health (LiveKit, Vobiz, AI services status)
Company Management:
List all tenants with status
Impersonate login for support
Suspend/activate accounts
Manual plan adjustments
Billing Administration:
View all invoices
Process refunds
Handle billing disputes
Promo code management
System Configuration:
Global rate limits
SIP trunk management
AI provider failover settings
Feature flags for gradual rollout
Support Tools:
View error logs by company
Call quality monitoring
Support ticket system integration
11. TECHNICAL ARCHITECTURE REQUIREMENTS
Backend (Python FastAPI):
API Layer: FastAPI with async support
Database: PostgreSQL (primary), Redis (caching/sessions)
Message Queue: Redis/RabbitMQ for background jobs
Task Workers: Celery for campaign processing
WebSockets: For real-time dashboard updates
File Storage: S3-compatible for recordings
Frontend (React + TypeScript):
UI Framework: TailwindCSS + HeadlessUI
State Management: Zustand/Redux Toolkit
Charts: Recharts or Chart.js
Tables: TanStack Table
Forms: React Hook Form + Zod validation
AI/Calling Service (Extend Existing):
Keep agent.py as microservice
Add gRPC/HTTP API layer for communication
Queue-based job dispatch (instead of direct make_call.py)
Multi-tenant isolation in call routing
Infrastructure:
Containerization: Docker + Docker Compose
Orchestration: Kubernetes (production)
Monitoring: Prometheus + Grafana
Logging: ELK Stack or Loki
CDN: CloudFlare for static assets
12. SECURITY & COMPLIANCE
Requirements:
Data Encryption: AES-256 at rest, TLS 1.3 in transit
PII Handling: Mask phone numbers in logs, GDPR deletion
Call Recording Consent: Configurable announcement
TRAI Compliance: DND scrubbing, calling hours enforcement
SOC 2: Audit logs, access controls, data retention policies
Penetration Testing: Quarterly security audits
DELIVERABLES EXPECTED:
Complete Database Schema (Migration files)
Backend API (FastAPI, fully documented with OpenAPI/Swagger)
Frontend Application (React SPA, responsive design)
Extended AI Agent Service (Multi-tenant, queue-based)
Admin Panel (For platform management)
Docker Compose setup for local development
Kubernetes Manifests for production deployment
API Documentation (Postman collection + Swagger UI)
User Guide (Markdown documentation)
DESIGN INSPIRATION:
Dashboard UI: Similar to Twilio Console, Stripe Dashboard, or Retell AI
Color Scheme: Professional blue/indigo primary, green for success, red for errors
Mobile Responsive: Full functionality on mobile devices
Dark Mode: Optional dark theme support