import React, { useState } from 'react'
import { Calendar, Trophy, Bell, Search, Filter, MapPin, Clock, Users, Star, Award, Target, BookOpen, Heart } from 'lucide-react'

interface MemberViewProps {
  onNavigate: (view: string) => void
  onLogout: () => void
}

const MemberView: React.FC<MemberViewProps> = ({ onNavigate, onLogout }) => {
  const [activeTab, setActiveTab] = useState('feed')

  const myClubs = [
    { id: 1, name: 'Photography Club', role: 'Member', joined: '2023-09-15', events: 8, points: 120 },
    { id: 2, name: 'Environmental Club', role: 'Volunteer', joined: '2023-10-20', events: 5, points: 85 },
    { id: 3, name: 'Debate Society', role: 'Member', joined: '2023-11-05', events: 3, points: 45 },
  ]

  const upcomingEvents = [
    { id: 1, title: 'Photography Workshop', club: 'Photography Club', date: '2024-02-15', time: '2:00 PM', location: 'Art Building', rsvp: 'going' },
    { id: 2, title: 'Campus Cleanup Drive', club: 'Environmental Club', date: '2024-02-18', time: '9:00 AM', location: 'Main Campus', rsvp: 'maybe' },
    { id: 3, title: 'Debate Competition', club: 'Debate Society', date: '2024-02-22', time: '4:00 PM', location: 'Auditorium', rsvp: null },
    { id: 4, title: 'Guest Speaker: Wildlife Conservation', club: 'Environmental Club', date: '2024-02-25', time: '3:00 PM', location: 'Conference Hall', rsvp: null },
  ]

  const achievements = [
    { id: 1, title: 'Event Enthusiast', description: 'Attended 10+ events', icon: Calendar, earned: true, progress: 100 },
    { id: 2, title: 'Community Builder', description: 'Joined 3+ clubs', icon: Users, earned: true, progress: 100 },
    { id: 3, title: 'Photography Master', description: 'Complete photography course', icon: Award, earned: false, progress: 75 },
    { id: 4, title: 'Eco Warrior', description: 'Participate in 5 environmental events', icon: Heart, earned: false, progress: 60 },
    { id: 5, title: 'Debate Champion', description: 'Win a debate competition', icon: Trophy, earned: false, progress: 25 },
    { id: 6, title: 'Knowledge Seeker', description: 'Attend 20+ educational events', icon: BookOpen, earned: false, progress: 40 },
  ]

  const feedItems = [
    { id: 1, type: 'event', club: 'Photography Club', title: 'New workshop series announced!', content: 'Join us for a comprehensive photography workshop series starting next month...', time: '2 hours ago', image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, type: 'achievement', title: 'You earned a new badge!', content: 'Congratulations! You\'ve earned the "Event Enthusiast" badge for attending 10+ events.', time: '5 hours ago' },
    { id: 3, type: 'announcement', club: 'Environmental Club', title: 'Campus Cleanup Drive', content: 'Join us this weekend for our monthly campus cleanup drive. Let\'s make our campus beautiful!', time: '1 day ago', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, type: 'event', club: 'Debate Society', title: 'Inter-college debate competition', content: 'Registration is now open for the annual inter-college debate competition...', time: '2 days ago' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">JD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Welcome back, John!</h1>
                <p className="text-sm text-gray-600">Member Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={() => onNavigate('club-explorer')}
                className="px-4 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg hover:bg-white/30 transition-all text-gray-700"
              >
                Explore Clubs
              </button>
              <button
                onClick={onLogout}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 backdrop-blur-md bg-white/10 rounded-xl p-1 border border-white/20">
          {[
            { id: 'feed', label: 'My Feed', icon: BookOpen },
            { id: 'clubs', label: 'My Clubs', icon: Users },
            { id: 'events', label: 'Events', icon: Calendar },
            { id: 'achievements', label: 'Achievements', icon: Trophy },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-white/30 text-gray-800 shadow-lg'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-white/20'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Feed Tab */}
        {activeTab === 'feed' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Your Personalized Feed</h2>
                <div className="flex space-x-2">
                  <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                    <Filter className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Feed Items */}
              <div className="space-y-6">
                {feedItems.map((item) => (
                  <div key={item.id} className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.type === 'event' && <Calendar className="w-6 h-6 text-white" />}
                        {item.type === 'achievement' && <Trophy className="w-6 h-6 text-white" />}
                        {item.type === 'announcement' && <Bell className="w-6 h-6 text-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            {item.club && (
                              <span className="text-sm text-teal-600 font-medium">{item.club}</span>
                            )}
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                          </div>
                          <span className="text-sm text-gray-500">{item.time}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.content}</p>
                        {item.image && (
                          <img
                            src={item.image}
                            alt=""
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                        )}
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <button className="flex items-center space-x-1 hover:text-teal-600 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>Like</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-teal-600 transition-colors">
                            <Users className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Clubs Joined</span>
                    <span className="font-semibold text-gray-800">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Events Attended</span>
                    <span className="font-semibold text-gray-800">16</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Points</span>
                    <span className="font-semibold text-teal-600">250</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Badges Earned</span>
                    <span className="font-semibold text-gray-800">2</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  {upcomingEvents.slice(0, 3).map((event) => (
                    <div key={event.id} className="p-3 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
                      <h4 className="font-medium text-gray-800 text-sm">{event.title}</h4>
                      <p className="text-xs text-gray-600">{event.club}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.date}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveTab('events')}
                  className="w-full mt-4 py-2 text-teal-600 hover:text-teal-700 font-medium transition-colors text-sm"
                >
                  View All Events
                </button>
              </div>
            </div>
          </div>
        )}

        {/* My Clubs Tab */}
        {activeTab === 'clubs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">My Clubs</h2>
              <button
                onClick={() => onNavigate('club-explorer')}
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all"
              >
                Discover More Clubs
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myClubs.map((club) => (
                <div key={club.id} className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{club.name}</h3>
                      <p className="text-sm text-gray-600">{club.role}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Joined</span>
                      <span className="text-gray-800">{club.joined}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Events Attended</span>
                      <span className="text-gray-800">{club.events}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Points Earned</span>
                      <span className="text-teal-600 font-medium">{club.points}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <button className="w-full py-2 text-teal-600 hover:text-teal-700 font-medium transition-colors">
                      View Club Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      <p className="text-sm text-teal-600">{event.club}</p>
                    </div>
                    {event.rsvp && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.rsvp === 'going' ? 'bg-green-100 text-green-800' :
                        event.rsvp === 'maybe' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.rsvp}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {!event.rsvp && (
                      <>
                        <button className="flex-1 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all text-sm">
                          RSVP Going
                        </button>
                        <button className="flex-1 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg hover:bg-white/30 transition-all text-sm text-gray-700">
                          Maybe
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => onNavigate('event-details')}
                      className="px-4 py-2 text-teal-600 hover:text-teal-700 font-medium transition-colors text-sm"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Achievements</h2>
              <p className="text-gray-600">Unlock badges and track your progress across all activities</p>
            </div>

            {/* Progress Overview */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">2</div>
                  <div className="text-sm text-gray-600">Badges Earned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">250</div>
                  <div className="text-sm text-gray-600">Total Points</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">33%</div>
                  <div className="text-sm text-gray-600">Overall Progress</div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`backdrop-blur-md rounded-xl border p-6 shadow-lg transition-all ${
                  achievement.earned 
                    ? 'bg-gradient-to-br from-teal-50/50 to-blue-50/50 border-teal-200/50' 
                    : 'bg-white/10 border-white/20'
                }`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      achievement.earned 
                        ? 'bg-gradient-to-br from-teal-400 to-blue-500' 
                        : 'bg-gray-200'
                    }`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.earned ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${achievement.earned ? 'text-gray-800' : 'text-gray-600'}`}>
                        {achievement.title}
                      </h3>
                      {achievement.earned && (
                        <span className="text-xs text-teal-600 font-medium">EARNED</span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className={achievement.earned ? 'text-teal-600' : 'text-gray-800'}>
                        {achievement.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${
                          achievement.earned ? 'bg-gradient-to-r from-teal-400 to-blue-500' : 'bg-gray-400'
                        }`}
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MemberView
