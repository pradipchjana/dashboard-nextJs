# GitHub Profile Dashboard

## Goal

Learn Next.js by building a simple GitHub profile explorer.

Focus on:

* App Router
* Dynamic Routes
* Server Components
* Client Components
* Route Handlers (BFF)
* Loading/Error States
* Data Fetching

---

# User Flow

Home Page
↓
Search Username
↓
/user/{username}
↓
Profile Information
↓
Repositories List

---

# Screen 1 - Home Page

┌─────────────────────────────────────────────┐
│                                             │
│           GitHub Dashboard                  │
│                                             │
│     Search any GitHub username              │
│                                             │
│  ┌───────────────────────────────┐          │
│  │ pradipchjana                  │          │
│  └───────────────────────────────┘          │
│                                             │
│          [ Search Profile ]                 │
│                                             │
└─────────────────────────────────────────────┘

Learning:

* Client Component
* useState
* useRouter
* Navigation

---

# Screen 2 - Loading State

┌─────────────────────────────────────────────┐
│                                             │
│         Loading profile...                  │
│                                             │
│     [ Skeleton Avatar ]                     │
│     [ Skeleton Profile ]                    │
│     [ Skeleton Repositories ]               │
│                                             │
└─────────────────────────────────────────────┘

Learning:

* loading.tsx
* Suspense

---

# Screen 3 - Profile Dashboard

┌─────────────────────────────────────────────┐
│ Avatar                                      │
│                                             │
│ Pradip Chandra Jana                         │
│ @pradipchjana                               │
│                                             │
│ Followers: 3                                │
│ Following: 1                                │
│ Repositories: 22                            │
└─────────────────────────────────────────────┘

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Repos       │ │ Followers   │ │ Following   │
│ 22          │ │ 3           │ │ 1           │
└─────────────┘ └─────────────┘ └─────────────┘

┌─────────────────────────────────────────────┐
│ Repository List                             │
└─────────────────────────────────────────────┘

Learning:

* Server Components
* Async Pages
* Server Fetching

---

# Screen 4 - Repository List

┌─────────────────────────────────────────────┐
│ advent-of-code                              │
│ JavaScript                                  │
│ ⭐ 0    🍴 0                                │
│ Updated 1 Jan 2026                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ readit                                      │
│ TypeScript                                  │
│ ⭐ 2    🍴 1                                │
│ Updated 15 Jun 2026                         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ hotel-booking-system                        │
│ Java                                        │
│ ⭐ 5    🍴 2                                │
│ Updated 20 Jun 2026                         │
└─────────────────────────────────────────────┘

Learning:

* List Rendering
* Reusable Components
* Data Mapping

---

# Screen 5 - User Not Found

┌─────────────────────────────────────────────┐
│                                             │
│            User Not Found                   │
│                                             │
│      Check the username and retry           │
│                                             │
│          [ Go Back ]                        │
│                                             │
└─────────────────────────────────────────────┘

Learning:

* error.tsx
* Error Boundaries

---

# Next.js Concepts Mapped

Feature                    → Concept

Search Form                → Client Component
User Route                 → Dynamic Routing
Profile Fetch              → Server Component
Repository Fetch           → Server Fetching
Loading Screen             → loading.tsx
Error Screen               → error.tsx
GitHub API Proxy           → Route Handler (BFF)
Profile URL                → App Router

---

# Stretch Goals

After MVP is complete:

1. Total Stars Card
2. Total Forks Card
3. Most Used Language
4. Recently Updated Repository
5. GitHub Profile Link
6. Search History