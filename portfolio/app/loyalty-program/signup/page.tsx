'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarRadiusAxis, PolarAngleAxis, PolarGrid } from 'recharts';
import { FaMedal, FaGift, FaHandshake, FaChartLine, FaCalendarCheck, FaTrophy, FaChartBar, FaUserFriends, FaClock, FaCopy } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/AnimatedCard';
import Progress from '@/app/components/ui/Progress';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/AnimatedAlert';
import MagicButton from '@/app/components/ui/MagicButton';
import { Input } from '@/app/components/ui/Input';
import { Check, X, Clock } from 'lucide-react';

interface UserStats {
  points: number;
  referrals: number;
  activities: number;
  level: string;
}

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  change: string;
}

interface ChallengeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Achievement {
  id: string;
  name: string;
  progress: number;
  total: number;
}

interface AchievementCardProps {
  achievement: Achievement;
}

interface RadarDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  }
};

const RADAR_DATA: RadarDataPoint[] = [
  { subject: 'Referrals', A: 120, fullMark: 150 },
  { subject: 'Activities', A: 98, fullMark: 150 },
  { subject: 'Points', A: 86, fullMark: 150 },
  { subject: 'Engagement', A: 99, fullMark: 150 },
  { subject: 'Loyalty', A: 85, fullMark: 150 },
];

const activityData = [
  { name: 'Week 1', points: 200 },
  { name: 'Week 2', points: 300 },
  { name: 'Week 3', points: 400 },
  { name: 'Week 4', points: 350 },
];


const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change }) => (
  <motion.div variants={itemVariants}>
    <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{change}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, description, icon }) => (
  <motion.div variants={itemVariants}>
    <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <CardHeader className="flex flex-row items-center space-x-2">
        {icon}
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
        <button className="mt-4 w-full">Accept Challenge</button>
      </CardContent>
    </Card>
  </motion.div>
);

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => (
  <motion.div variants={itemVariants}>
    <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <CardHeader>
        <CardTitle>{achievement.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={(achievement.progress / achievement.total) * 100} className="w-full" />
        <p className="mt-2 text-sm">{achievement.progress} / {achievement.total}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const LoyaltyDashboard: React.FC = () => {
  const [activeTime, setActiveTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [userStats, setUserStats] = useState<UserStats>({
    points: 1250,
    referrals: 3,
    activities: 15,
    level: 'Silver',
  });
  const [layout, setLayout] = useState<string[]>(['stats', 'activity', 'referral', 'challenges']);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [achievements, setAchievements] = useState<Achievement[]>([
    { id: 'daily-login', name: 'Daily Login Streak', progress: 5, total: 7 },
    { id: 'referrals', name: 'Referral Master', progress: 3, total: 5 },
    { id: 'points', name: 'Point Collector', progress: 1250, total: 5000 },
  ]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setActiveTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (interval !== null) {
      clearInterval(interval);
    }

    const checkAchievements = () => {
      let notificationTriggered = false;
      const updatedAchievements = achievements.map((achievement) => {
        if (achievement.progress >= achievement.total && !notificationTriggered) {
          setShowNotification(true);
          notificationTriggered = true;
        }
        return achievement;
      });

      setAchievements(updatedAchievements);

      if (notificationTriggered) {
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }
    };

    checkAchievements();

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isActive, achievements]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newLayout = Array.from(layout);
    const [reorderedItem] = newLayout.splice(result.source.index, 1);
    newLayout.splice(result.destination.index, 0, reorderedItem);
    setLayout(newLayout);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  

  const referralCode = 'YOUR_REFERRRAL_CODE';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      alert('Referral code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-900 text-white p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Loyalty Dashboard
        </motion.h1>

        <AnimatePresence>
          {showNotification && (
                        <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="mb-4"
                      >
                        <div>
                          <AlertTitle>Achievement Unlocked!</AlertTitle>
                          <AlertDescription>
                            Congratulations! You've reached a new milestone.
                          </AlertDescription>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
          
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="dashboard">
                      {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                          {layout.map((section, index) => (
                            <Draggable key={section} draggableId={section} index={index}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {section === 'stats' && (
                                    <motion.div
                                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                                      variants={containerVariants}
                                      initial="hidden"
                                      animate="visible"
                                    >
                                      <StatCard
                                        title="Total Points"
                                        value={userStats.points}
                                        icon={<FaMedal className="h-6 w-6 text-yellow-400" />}
                                        change="+20% from last month"
                                      />
                                      <StatCard
                                        title="Referrals"
                                        value={userStats.referrals}
                                        icon={<FaUserFriends className="h-6 w-6 text-green-400" />}
                                        change="2 pending approvals"
                                      />
                                      <StatCard
                                        title="Activities Completed"
                                        value={userStats.activities}
                                        icon={<FaHandshake className="h-6 w-6 text-blue-400" />}
                                        change="5 new activities available"
                                      />
                                      <StatCard
                                        title="Current Level"
                                        value={userStats.level}
                                        icon={<FaChartLine className="h-6 w-6 text-purple-400" />}
                                        change="250 points to next level"
                                      />
                                    </motion.div>
                                  )}
                                  {section === 'activity' && (
                                    <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg mb-8">
                                      <CardHeader>
                                        <CardTitle>Activity Overview</CardTitle>
                                      </CardHeader>
                                      <CardContent>
                                        <ResponsiveContainer width="100%" height={300}>
                                          <RadarChart outerRadius={90} data={RADAR_DATA}>
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="subject" />
                                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                            <Radar name="User" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                          </RadarChart>
                                        </ResponsiveContainer>
                                      </CardContent>
                                    </Card>
                                  )}
                                  {section === 'referral' && (
                                    <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg mb-8">
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
                                            <MagicButton
                                              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-purple border-b-4 border-purple-700 hover:border-b-0 hover:translate-y-1 transition-all duration-300 ease-out"
                                              title="Claim Reward"
                                              icon={<FaGift />}
                                              position='center'
                                            />
                                          </div>
                                          <p>Share your unique referral link:</p>
                                          <div className="flex">
                                            <Input
                                              type="text"
                                              value="https://example.com/ref/user123"
                                              className="flex-grow bg-white bg-opacity-20"
                                              readOnly
                                            />
                                            <MagicButton
                                              className="ml-2 bg-white text-purple hover:bg-black transition-colors"
                                              title="Copy"
                                              icon={<FaCopy />}
                                              position='right'
                                              handleClick={handleCopy}
                                            />
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  )}
                                  {section === 'challenges' && (
                                    <motion.div
                                      className="mb-8"
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.2 }}
                                    >
                                      <h2 className="text-2xl font-bold mb-4">Daily Challenges</h2>
                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <ChallengeCard
                                          title="Social Media Boost"
                                          description="Share our latest campaign and earn 50 bonus points!"
                                          icon={<FaChartBar className="h-6 w-6 text-blue-400" />}
                                        />
                                        <ChallengeCard
                                          title="Webinar Attendance"
                                          description="Join our expert webinar this Friday for 100 points."
                                          icon={<FaCalendarCheck className="h-6 w-6 text-green-400" />}
                                        />
                                        <ChallengeCard
                                          title="Feedback Challenge"
                                          description="Provide valuable feedback on our new product for 75 points."
                                          icon={<FaTrophy className="h-6 w-6 text-yellow-400" />}
                                        />
                                      </div>
                                    </motion.div>
                                  )}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
          
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {achievements.map((achievement) => (
                        <AchievementCard
                          key={achievement.id}
                          achievement={achievement}
                        />
                      ))}
                    </div>
                  </motion.div>
          
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
                </div>
              </motion.div>
            );
          };
          
          export default LoyaltyDashboard;
          
