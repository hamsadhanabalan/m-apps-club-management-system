"use client"
import { useEffect, useState } from "react"
import DashboardLayout from "@/components/DashboardLayout"
import { BookOpen, Calendar, Trophy, Award, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Dashboard() {

   const [stats, setStats] = useState({
    courses: 0,
    events: 0,
    quizzes: 0,
    certificates: 0
  })

  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
  // Fetch dashboard stats
  fetch("/api/student/dashboard")
    .then((res) => res.json())
    .then((data) => setStats(data));

  // Fetch leaderboard
  fetch("/api/leaderboard")
    .then((res) => res.json())
    .then((data) => setLeaderboard(data));
}, []);
  return (
    <DashboardLayout>

      {/* WELCOME SECTION */}

      <div className="bg-gradient-to-r from-blue-900 to-purple-700 text-white p-8 rounded-2xl shadow-lg mb-10">

        <h1 className="text-3xl font-bold">
          Welcome back, Hamsa 👋
        </h1>

        <p className="mt-2 opacity-90">
          Track your learning progress, participate in events, and grow with MAPPS Club.
        </p>

        <div className="flex gap-4 mt-6">

          <Link
            href="/courses"
            className="bg-white text-blue-900 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-200 transition"
          >
            Explore Courses <ArrowRight size={16}/>
          </Link>

          <Link
            href="/student/events"
            className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
          >
            View Events
          </Link>

        </div>

      </div>


      {/* STATS CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Courses Enrolled</p>
              <h2 className="text-3xl font-bold text-blue-900 mt-2">{stats.courses}</h2>
            </div>
            <BookOpen size={32} className="text-blue-900"/>
          </div>
        </motion.div>


        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Events Joined</p>
              <h2 className="text-3xl font-bold text-green-600 mt-2">{stats.events}</h2>
            </div>
            <Calendar size={32} className="text-green-600"/>
          </div>
        </motion.div>


        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Quizzes Attempted</p>
              <h2 className="text-3xl font-bold text-purple-600 mt-2">{stats.quizzes}</h2>
            </div>
            <Trophy size={32} className="text-purple-600"/>
          </div>
        </motion.div>


        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Certificates Earned</p>
              <h2 className="text-3xl font-bold text-red-500 mt-2">{stats.certificates}</h2>
            </div>
            <Award size={32} className="text-red-500"/>
          </div>
        </motion.div>

      </div>



      {/* SECOND SECTION */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

        {/* COURSE PROGRESS */}

        <div className="bg-white rounded-xl shadow-lg p-6 border">

          <h2 className="text-xl font-semibold mb-6">
            Course Progress
          </h2>

          <div className="space-y-5">

            <div>
              <p className="text-sm font-medium mb-2">
                React Development
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-900 h-3 rounded-full w-[70%]"></div>
              </div>
            </div>


            <div>
              <p className="text-sm font-medium mb-2">
                AI Fundamentals
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full w-[50%]"></div>
              </div>
            </div>


            <div>
              <p className="text-sm font-medium mb-2">
                Cloud Computing
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full w-[30%]"></div>
              </div>
            </div>

          </div>

        </div>



        {/* UPCOMING EVENTS */}

        <div className="bg-white rounded-xl shadow-lg p-6 border">

          <h2 className="text-xl font-semibold mb-6">
            Upcoming Events
          </h2>

          <div className="space-y-4">

            <div className="p-4 border rounded-lg hover:bg-gray-50 transition">
              <p className="font-medium">AI Workshop</p>
              <p className="text-sm text-gray-500">April 10 • Online</p>
            </div>

            <div className="p-4 border rounded-lg hover:bg-gray-50 transition">
              <p className="font-medium">Hackathon 2026</p>
              <p className="text-sm text-gray-500">April 22 • Campus</p>
            </div>

            <div className="p-4 border rounded-lg hover:bg-gray-50 transition">
              <p className="font-medium">Cloud Bootcamp</p>
              <p className="text-sm text-gray-500">May 3 • Hybrid</p>
            </div>

          </div>

        </div>

      </div>



      {/* THIRD SECTION */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

        {/* LEADERBOARD */}
<div className="space-y-4">

  {leaderboard.map((user: any, index) => {

    let medal = "";
    if (index === 0) medal = "🥇";
    else if (index === 1) medal = "🥈";
    else if (index === 2) medal = "🥉";

    return (
      <div
        key={index}
        className={`flex justify-between p-3 rounded-lg ${
          user.name === "Hamsa"
            ? "bg-blue-50"
            : "bg-gray-50"
        }`}
      >
        <span>
          {medal} {user.name}
        </span>
        <span>{user.score} pts</span>
      </div>
    );
  })}

</div>

        {/* RECENT ACTIVITY */}

        <div className="bg-white rounded-xl shadow-lg p-6 border">

          <h2 className="text-xl font-semibold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4 text-gray-600">

            <div className="flex gap-3">
              <span>📚</span>
              <p>Completed &quot;React Basics&quot; course</p>
            </div>

            <div className="flex gap-3">
              <span>🏆</span>
              <p>Scored 90% in JavaScript Quiz</p>
            </div>

            <div className="flex gap-3">
              <span>📅</span>
              <p>Registered for AI Workshop</p>
            </div>

            <div className="flex gap-3">
              <span>🎓</span>
              <p>Earned Cloud Computing Certificate</p>
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  )
}