import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart, Home, Search, MessageCircle, Compass, FolderOpen, StickyNote, LogIn,
  Bell, Users, Star, BarChart3, Gift, SunMoon, UserCircle
} from "lucide-react";
import { motion } from "framer-motion";

// Dummy Data (replace with API calls later)
const games = [
  { title: "Best game", subtitle: "by football" },
  { title: "Spotlight Game", subtitle: "Top Rated" },
  { title: "Arcade Frenzy", subtitle: "Most Played" },
  { title: "Puzzle Master", subtitle: "Trending" },
];
const leaderboard = [
  { rank: "🏆", name: "PlayerOne", points: 1200 },
  { rank: "🥈", name: "GamerX", points: 950 },
  { rank: "🥉", name: "ProHero", points: 870 },
];
const friends = [
  { status: "🟢", name: "Alex", online: true },
  { status: "🟢", name: "Mia", online: true },
  { status: "⚪", name: "Sam", online: false },
];
const notifications = [
  "🎮 New game update available",
  "⭐ Your review got 5 likes",
  "👥 New friend request",
];
const achievements = [
  { icon: "🏅", name: "First Win" },
  { icon: "🎯", name: "Sharp Shooter" },
];
const activities = [
  "Played 'Best game'",
  "Earned 'First Win' badge",
  "Added Mia as friend",
];

// Navigation links
const navLinks = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: MessageCircle, label: "Chat" },
  { icon: Compass, label: "Explore" },
  { icon: FolderOpen, label: "Library" },
  { icon: Star, label: "Reviews" },
  { icon: Gift, label: "Rewards" },
  { icon: StickyNote, label: "Notes" },
];

// Side nav button
const IconButton = React.memo(
  ({ icon: Icon, label, ...props }: { icon: any; label: string }) => (
    <button
      {...props}
      className="group flex items-center gap-3 rounded-2xl p-3 hover:bg-muted w-full transition"
      aria-label={label}
    >
      <Icon className="size-5" />
      <span className="opacity-80 group-hover:opacity-100 text-sm">{label}</span>
    </button>
  )
);

// Game card
const GameCard = React.memo(
  ({ title, subtitle }: { title: string; subtitle: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-2xl shadow-md" tabIndex={0} aria-label={`${title} - ${subtitle}`}>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            <span className="font-semibold">{title}</span>
            <span className="ml-2 text-muted-foreground text-sm">{subtitle}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-muted to-muted-foreground/10 grid place-items-center">
            <div className="text-sm opacity-70">Game preview</div>
          </div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 opacity-80">
              <Heart className="size-4" />
              <span>Rating</span>
            </div>
            <div className="opacity-80">Most played</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
);

// Advanced Search & Filters
const AdvancedSearch = () => (
  <Card className="rounded-2xl shadow-md" aria-label="Advanced Search">
    <CardHeader>
      <CardTitle>
        <Search className="size-4" /> Advanced Search & Filters
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Input placeholder="Search by genre, rating, platform..." className="rounded-2xl mb-2" />
      <div className="flex gap-2">
        <Button variant="secondary">Genre</Button>
        <Button variant="secondary">Sort by Rating</Button>
        <Button variant="secondary">Platform</Button>
      </div>
    </CardContent>
  </Card>
);

// Achievements
const AchievementCard = () => (
  <Card className="rounded-2xl shadow-md" aria-label="Achievements">
    <CardHeader>
      <CardTitle className="text-base flex items-center gap-2">
        🏅 Achievements
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {achievements.map((a, i) => <li key={i}>{a.icon} {a.name}</li>)}
      </ul>
    </CardContent>
  </Card>
);

// Activity Feed
const ActivityFeedCard = () => (
  <Card className="rounded-2xl shadow-md" aria-label="Activity Feed">
    <CardHeader>
      <CardTitle className="text-base flex items-center gap-2">
        📢 Activity Feed
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {activities.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </CardContent>
  </Card>
);

// Profile Card
const ProfileCard = ({ user }: { user: any }) => (
  <Card className="rounded-2xl shadow-md" aria-label="User Profile">
    <CardHeader>
      <CardTitle className="text-base flex items-center gap-2">
        <UserCircle className="size-5" /> {user.name}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-sm">Level: {user.level}</div>
      <div className="text-sm">Points: {user.points}</div>
    </CardContent>
  </Card>
);

// Theme Switcher
const ThemeSwitcher = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => (
  <IconButton icon={SunMoon} label="Theme Switch" onClick={toggleTheme} />
);

// Leaderboard
const LeaderboardCard = React.memo(() => (
  <Card className="rounded-2xl shadow-md" aria-label="Leaderboard">
    <CardHeader>
      <CardTitle className="text-base flex items-center gap-2">
        <BarChart3 className="size-4" /> Leaderboard
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {leaderboard.map((item, idx) => (
          <li key={idx}>{item.rank} {item.name} – {item.points} pts</li>
        ))}
      </ul>
    </CardContent>
  </Card>
));

// Friends Online
const FriendsCard = React.memo(() => (
  <Card className="rounded-2xl shadow-md" aria-label="Friends Online">
    <CardHeader>
      <CardTitle className="text-base flex items-center gap-2">
        <Users className="size-4" /> Friends Online
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {friends.map((friend, idx) => (
          <li key={idx}>{friend.status} {friend.name} {friend.online ? "" : "(offline)"}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
));

// Notifications
const NotificationsCard = React.memo(() => (
  <Card className="rounded-2xl shadow-md" aria-label="Notifications">
    <CardHeader>
      <CardTitle className="text-base flex items-center gap-2">
        <Bell className="size-4" /> Notifications
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {notifications.map((note, idx) => <li key={idx}>{note}</li>)}
      </ul>
    </CardContent>
  </Card>
);

// Example user object
const user = { name: "Denzel", level: 7, points: 3200 };

export default function WoopenGamersUI() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return (
    <div className={`min-h-screen bg-background text-foreground ${theme}`}>
      {/* Top nav (mobile) */}
      <nav className="md:hidden sticky top-0 z-40 bg-background/80 backdrop-blur border-b" aria-label="Mobile navigation">
        <div className="max-w-7xl mx-auto flex items-center gap-3 p-3">
          <Button variant="ghost" size="icon" className="rounded-2xl" aria-label="Home">
            <Home className="size-5" />
          </Button>
          <div className="flex-1">
            <Input placeholder="Search" className="rounded-2xl" aria-label="Search" />
          </div>
          <Button className="rounded-2xl gap-2" aria-label="Log in or Sign up">
            <LogIn className="size-4" />
            Log in / Sign up
          </Button>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto grid md:grid-cols-[18rem_1fr_18rem] gap-6 p-4 md:p-6">
        {/* Left sidebar */}
        <aside className="hidden md:flex md:flex-col rounded-2xl border bg-card/50 shadow-sm p-4 gap-2" role="navigation" aria-label="Sidebar">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-8 rounded-xl bg-primary/10 grid place-items-center">🎮</div>
            <div className="font-semibold">Woopen Gamers</div>
          </div>
          {navLinks.map((nav, idx) => (
            <IconButton key={nav.label} icon={nav.icon} label={nav.label} />
          ))}
          <div className="mt-auto pt-3 border-t">
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
        </aside>
        {/* Main content */}
        <main className="grid gap-6" role="main">
          {/* Quick actions */}
          <section className="rounded-2xl border bg-card/50 shadow-sm p-3 md:p-4 flex flex-wrap items-center gap-2 md:gap-3" aria-label="Quick actions">
            <div className="flex items-center gap-2 flex-1">
              <Button variant="secondary" className="rounded-2xl">MY GAMES</Button>
              <Button variant="ghost" className="rounded-2xl">DOWNLOAD</Button>
              <Button variant="ghost" className="rounded-2xl">Game room</Button>
              <Button variant="ghost" className="rounded-2xl">Leaderboard</Button>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Input placeholder="Search games" className="rounded-2xl w-56" aria-label="Search games" />
              <Button className="rounded-2xl gap-2" aria-label="Log in or Sign up">
                <LogIn className="size-4" />
                Log in / Sign up
              </Button>
            </div>
          </section>
          {/* Game cards */}
          <section className="hidden md:grid grid-cols-2 gap-6" aria-label="Game cards">
            {games.map((game, idx) => (
              <GameCard key={idx} title={game.title} subtitle={game.subtitle} />
            ))}
          </section>
          {/* Advanced Search */}
          <AdvancedSearch />
          {/* Activity Feed */}
          <ActivityFeedCard />
        </main>
        {/* Right sidebar with extra features */}
        <aside className="hidden md:flex md:flex-col gap-4" aria-label="Sidebar features">
          <ProfileCard user={user} />
          <NotificationsCard />
          <FriendsCard />
          <LeaderboardCard />
          <AchievementCard />
        </aside>
      </div>
    </div>
  );
}