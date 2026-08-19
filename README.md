# User Directory

A simple user directory built for the Entelligo Frontend Developer Internship take-home assignment.

Browse a list of users, click into any of them to see their full details — contact info, address, and company. Built with the App Router, so most of this is server-rendered straight from the API, no client-side loading spinners needed for the basic flow.

## Live demo

[add your Vercel link here once deployed]

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (Card, Avatar, Badge, Separator, Button, Skeleton)
- Data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

## What's in here

- **`/`** — the directory. Grid of user cards (avatar, name, email, company tagline).
- **`/users/[id]`** — a single user's full profile. Contact, address, and company sections, plus previous/next navigation between users.
- **Loading states** — `loading.tsx` on both routes, using shadcn Skeletons shaped like the actual content, so there's no layout jump once real data lands.
- **Error handling** — `error.tsx` on both routes for when the fetch itself fails, and `not-found.tsx` for when a user id doesn't exist.

## A few decisions worth explaining

- **Data fetching lives in `lib/api.ts`**, not inside the page components. Kept fetch logic separate from the UI so it's reusable and easier to reason about on its own — and it's the kind of split I'd want in a real project once there's more than one page pulling from the same API.
- **`getUserById` returns `null` on a 404** instead of throwing, so a bad id shows a proper "user not found" page instead of the generic error boundary. Genuine failures (network issues, 500s) still throw and hit `error.tsx`.
- **Types are defined once**, in `types/user.ts`, matching the actual shape JSONPlaceholder returns — so the rest of the app just works off a typed `User` object instead of guessing at fields.
- Avatars are pulled from `randomuser.me` (alternating men/women by user id) since the API itself doesn't provide photos — just for a bit of visual polish, falls back to initials if the image fails to load.

## Running it locally

```bash
npm install
npm run dev
```

Then open `localhost:3000`.
