# Assignment-06 (KeenKeeper Website)

Keenkeeper is a personal relationship management app built with Next.js. The main goal was to practice building a full-featured friendship tracker with status management, interaction logging, and analytics — using local storage for persistence, dynamic routing for friend profiles, and component-based UI design with Tailwind CSS.

---

## Project Overview

Keenkeeper keeps track of your friendships so you never lose touch. Set goals for how often you want to connect with each person, and Keenkeeper will remind you when it's time to reach out. Log calls, texts, and video chats to keep a history of your interactions.

---

## Technologies Used

- [Next.js](https://nextjs.org/) — App Router & Server Components
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Recharts](https://recharts.org/) — Analytics charts
- [React Toastify](https://fkhadra.github.io/react-toastify/) — Toast notifications
- JavaScript (ES6+)
- JSON — Friend data

---

## Features

- **Friend Dashboard** — View all your friends at a glance with their connection status and tags
- **Friend Details** — See days since last contact, upcoming due dates, and relationship goals for each friend
- **Quick Check-In** — Log a Call, Text, or Video interaction with one tap
- **Timeline** — A chronological feed of all your interactions, filterable by type
- **Friendship Analytics** — Visual breakdown of your interaction habits by type (Call, Text, Video)
- **Status Tracking** — Friends are automatically marked as On-Track, Almost Due, or Overdue based on your goals

---


## Project Structure

I tried to keep the project well-organized:

- `components` folder for reusable UI parts like Banner
- `app/friend` for the friends homepage and individual friend detail pages
- `app/timeline` for the interaction history feed
- `app/status` for the friendship analytics page
- `public` folder for static assets like friends JSON data
- `asset` folder for local icons and images used across the app


---


# Responsive Design

I made the website fully responsive using Tailwind CSS breakpoints (`sm`, `md`, `lg`) to ensure a consistent experience across mobile, tablet, and desktop devices.

---