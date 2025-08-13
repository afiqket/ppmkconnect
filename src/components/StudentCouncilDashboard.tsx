import React, { useState } from 'react'
import { Users, Calendar, TrendingUp, Settings, Bell, Search, Plus, Filter, MoreVertical, CheckCircle, Clock, AlertCircle, DollarSign, FileText, MessageSquare } from 'lucide-react'

interface StudentCouncilDashboardProps {
  onNavigate: (view: string) => void
  onLogout: () => void
}

const StudentCouncilDashboard: React.FC<StudentCouncilDashboardProps> = ({ onNavigate, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const clubs = [
    { id: 1, name: 'Photography Club', members: 45, status: 'active', category: 'Arts', lastActivity: '2 hours ago' },
    { id: 2, name: 'Debate Society', members: 32, status: 'pending', category: 'Academic', lastActivity: '1 day ago' },
    { id: 3, name: 'Environmental Club', members: 67, status: 'active', category: 'Social', lastActivity: '3 hours ago' },
    { id: 4, name: 'Tech Innovation', members: 89, status: 'active', category: 'Technology', lastActivity: '30 min ago' },
    { id: 5, name: 'Music Society', members: 54, status: 'review', category: 'Arts', lastActivity: '5 hours ago' },
  ]

  const pendingApprovals = [
    { id: 1, type: 'Event', title: 'Annual Photography Exhibition', club: 'Photography Club', date: '2024-02-15' },
    { id: 2, type: 'Budget', title: 'Equipment Purchase Request', club: 'Tech Innovation', amount: '$2,500' },
    { id: 3, type: 'Club', title: 'New Club Registration', club: 'Robotics Club', members: 15 },
  ]

  const recentActivity = [
    { id: 1, action: 'Event approved', club: 'Environmental Club', time: '2 hours ago' },
    { id: 2, action: 'Budget allocated', club: 'Music Society', time: '4 hours ago' },
    { id: 3, action: 'New member joined', club: 'Debate Society', time: '6 hours ago' },
    { id: 4, action: 'Event completed', club: 'Photography Club', time: '1 day ago' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Student Council</h1>
                <p className="text-sm text-gray-600">Administrative Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                <Settings className="w-5 h-5 text-gray-600" />
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
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'clubs', label: 'Club Directory', icon: Users },
            { id: 'events', label: 'Events', icon: Calendar },
            { id: 'approvals', label: 'Approvals', icon: CheckCircle },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
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

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Clubs</p>
                    <p className="text-3xl font-bold text-gray-800">127</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-500">+12%</span>
                  <span className="text-gray-600 ml-1">from last month</span>
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Members</p>
                    <p className="text-3xl font-bold text-gray-800">3,247</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-green-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-500">+8%</span>
                  <span className="text-gray-600 ml-1">from last month</span>
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Events This Month</p>
                    <p className="text-3xl font-bold text-gray-800">45</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-500">+23%</span>
                  <span className="text-gray-600 ml-1">from last month</span>
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Budget Allocated</p>
                    <p className="text-3xl font-bold text-gray-800">$45K</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-blue-500">75%</span>
                  <span className="text-gray-600 ml-1">of total budget</span>
                </div>
              </div>
            </div>

            {/* Pending Approvals & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pending Approvals */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Pending Approvals</h3>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    {pendingApprovals.length} pending
                  </span>
                </div>
                <div className="space-y-4">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.club}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors">
                          Approve
                        </button>
                        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors">
                          Review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 p-3 hover:bg-white/10 rounded-lg transition-colors">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.club} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Clubs Tab */}
        {activeTab === 'clubs' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search clubs..."
                  className="w-full pl-10 pr-4 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center px-4 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg hover:bg-white/30 transition-all">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Club
                </button>
              </div>
            </div>

            {/* Clubs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <div key={club.id} className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{club.name}</h3>
                        <p className="text-sm text-gray-600">{club.category}</p>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Members</span>
                      <span className="font-medium text-gray-800">{club.members}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Status</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        club.status === 'active' ? 'bg-green-100 text-green-800' :
                        club.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {club.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Last Activity</span>
                      <span className="text-sm text-gray-800">{club.lastActivity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Analytics Overview</h2>
              <button
                onClick={() => onNavigate('analytics')}
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all"
              >
                View Detailed Analytics
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Engagement Rate</h3>
                <div className="text-3xl font-bold text-teal-600 mb-2">78%</div>
                <p className="text-sm text-gray-600">Average across all clubs</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Event Attendance</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-sm text-gray-600">Average attendance rate</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Member Growth</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">+15%</div>
                <p className="text-sm text-gray-600">This semester</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentCouncilDashboard
