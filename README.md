# Yogesh Kumawat — Portfolio (MERN)

A fully animated, full-stack developer portfolio. React frontend (Vite + Tailwind +
Framer Motion) talks to a Node/Express/MongoDB backend that stores contact-form
messages and emails you the moment someone wants to hire you.

```
portfolio/
├── frontend/   React + Vite + Tailwind + Framer Motion
└── backend/    Express + Mongoose + Nodemailer (contact form + email alerts)
```

## What's inside

- **Hero → About → Skills → Projects → Contact → Footer** — every standard portfolio
  section, built around one recurring visual idea: the MERN stack rendered
  literally as four layered plates that build themselves into a tower.
- **Fully animated**: page-load hero sequence, scroll-triggered reveals on every
  section, hover micro-interactions on cards, animated nav underline. Respects
  `prefers-reduced-motion`.
- **3 real projects wired to your live links**: Brew Haven, AI Doctor Booking,
  E-Commerce Platform — each links out to the live Vercel deployment and GitHub.
- **Working contact form**: submits to the backend, saves to MongoDB, and sends
  you an email via Nodemailer. If email sending ever fails, the message is still
  saved in the database so nothing is lost.
- **Résumé download** button wired to your uploaded PDF.

## Run it locally

### 1. Backend

```bash
cd backend
cp .env.example .env
# edit .env — see below
npm install
npm run dev
```

Fill in `.env`:
- `MONGO_URI` — a free MongoDB Atlas cluster works fine. Create one at
  https://www.mongodb.com/cloud/atlas, get the connection string.
- `EMAIL_USER` / `EMAIL_PASS` — for Gmail: turn on 2-Step Verification, then
  generate an **App Password** at https://myaccount.google.com/apppasswords.
  Use that 16-character password, not your normal Gmail password.
- `NOTIFY_EMAIL` — where hire-me alerts land (defaults to `EMAIL_USER`).

Backend runs on `http://localhost:5000`.

### 2. Frontend

```bash
cd frontend
cp .env.example .env   # points VITE_API_URL at your backend
npm install
npm run dev
```

Opens on `http://localhost:5173`.

## Deploying

- **Frontend** → Vercel or Netlify (same as your other 3 projects). Set the
  `VITE_API_URL` environment variable to your deployed backend URL.
- **Backend** → Render, Railway, or Cyclic (all have free tiers that support
  long-running Node servers, unlike Vercel serverless which doesn't suit a
  persistent Express app well). Set the same env vars as your local `.env`.
- **Database** → MongoDB Atlas free tier (M0) is enough for a contact form.

Once both are deployed, update `CLIENT_ORIGIN` in the backend's env to your
live frontend URL (so CORS only allows your site).

## Editing content

Everything text-based — name, summary, skills, project descriptions, links —
lives in one file: `frontend/src/data/content.js`. Change it there and every
section updates automatically.
