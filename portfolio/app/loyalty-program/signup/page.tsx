'use client'
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaMedal, FaGift, FaHandshake, FaChartLine, FaUserFriends, FaClock } from 'react-icons/fa';
import { Card, CardHeader,CardTitle, CardContent } from '@/app/components/ui/AnimatedCard';
import Progress from '@/app/components/ui/Progress';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/AnimatedAlert';
import { motion } from 'framer-motion';




const LoyaltyDashboard = () => {
  const [activeTime, setActiveTime] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [userStats, setUserStats] = useState({
    points: 1250,
    referrals: 3,
    activities: 15,
    level: 'Silver',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition:{
            delayChildren: 0.3,
            staggerChildren: 0.2
        }

    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y:0,
        opacity:1,
    }
  }

  const activityData = [
    { name: 'Week 1', points: 200 },
    { name: 'Week 2', points: 300 },
    { name: 'Week 3', points: 400 },
    { name: 'Week 4', points: 350 },
  ];

  useEffect(() => {
    let interval:NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setActiveTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (interval !== null){
        clearInterval(interval);

    }
      
    
    return () => {
        if (interval !== null){
            clearInterval(interval);

        }
    }
        
  }, [isActive]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const formatTime = (seconds:number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div className="bg-gradient-to-br from-purple to-indigo-900 min-h-screen text-white p-8" 
    initial="hidden"
    animate="visible"
    variants={itemVariants}
    
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 className="text-4xl font-extrabold mb-8 text-center" variants={itemVariants}>Welcome to Your Loyalty Dashboard</motion.h1>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
        >
          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <FaMedal className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.points}</div>
              <p className="text-xs text-muted-foreground">
                +20% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Referrals</CardTitle>
              <FaUserFriends className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.referrals}</div>
              <p className="text-xs text-muted-foreground">
                2 pending approvals
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activities Completed</CardTitle>
              <FaHandshake className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.activities}</div>
              <p className="text-xs text-muted-foreground">
                5 new activities available
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Level</CardTitle>
              <FaChartLine className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.level}</div>
              <p className="text-xs text-muted-foreground">
                250 points to next level
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Activity Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="points" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Referral Program</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Referral Progress</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="w-full" />
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                        <FaGift className="h-6 w-6 text-white mr-3" />
                        <h3 className="text-xl font-bold text-white">New Reward Unlocked!</h3>
                    </div>
                    <p className="mt-2 text-white">
                        You have earned a free consultation. Claim it now!
                    </p>
                    <button className="mt-3 bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors">
                        Claim Reward
                    </button>
                    
                </div>
                <p>Share your unique referral link:</p>
                <div className="flex">
                  <input 
                    type="text" 
                    value="https://example.com/ref/user123" 
                    className="flex-grow px-3 py-2 bg-white bg-opacity-20 rounded-l-md"
                    readOnly
                  />
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-r-md">
                    Copy
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg mb-8">
          <CardHeader>
            <CardTitle>Active Time in Program</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center space-x-2">
              <FaClock className="text-2xl text-yellow-400" />
              <span className="text-4xl font-bold">{formatTime(activeTime)}</span>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Upcoming Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4">
              <h3 className="font-semibold mb-2">Social Media Boost</h3>
              <p>Share our latest campaign and earn 50 bonus points!</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4">
              <h3 className="font-semibold mb-2">Webinar Attendance</h3>
              <p>Join our expert webinar this Friday for 100 points.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4">
              <h3 className="font-semibold mb-2">Feedback Challenge</h3>
              <p>Provide valuable feedback on our new product for 75 points.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

};export default LoyaltyDashboard;