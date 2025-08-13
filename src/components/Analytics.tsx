import React, { useState } from 'react'
import { ArrowLeft, TrendingUp, Users, Calendar, Award, BarChart3, PieChart, Activity, Download, Filter, RefreshCw } from 'lucide-react'

interface AnalyticsProps {
  onNavigate: (view: string) => void
  onBack: () => void
}

const Analytics: React.FC<AnalyticsProps> = ({ onNavigate, onBack }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedMetric, setSelectedMetric] = useState('all')

  const overviewStats = [
    {
      title: 'Total Clubs',
      value: '24',
      change: '+3',
      changeType: 'increase',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Members',
      value: '1,247',
      change: '+127',
      changeType: 'increase',
      icon: Activity,
      color: 'green'
    },
    {
      title: 'Events This Month',
      value: '18',
      change: '+5',
      changeType: 'increase',
      icon: Calendar,
      color: 'purple'
    },
    {
      title: 'Engagement Rate',
      value: '78%',
      change: '+12%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'orange'
    }
  ]

  const clubPerformance = [
    {
      name: 'Photography Club',
      members: 89,
      events: 5,
      engagement: 92,
      growth: '+15%'
    },
    {
      name: 'Debate Society',
      members: 67,
      events: 3,
      engagement: 88,
      growth: '+8%'
    },
    {
      name: 'Music Club',
      members: 134,
      events: 7,
      engagement: 85,
      growth: '+22%'
    },
    {
      name: 'Drama Club',
      members: 78,
      events: 4,
      engagement: 81,
      growth: '+5%'
    },
    {
      name: 'Tech Society',
      members: 156,
      events: 6,
      engagement: 79,
      growth: '+18%'
    }
  ]

  const eventMetrics = [
    {
      event: 'Annual Photography Workshop',
      attendees: 47,
      capacity: 60,
      satisfaction: 4.8,
      engagement: 94
    },
    {
      event: 'Debate Championship',
      attendees: 32,
      capacity: 40,
      satisfaction: 4.6,
      engagement: 89
    },
    {
      event: 'Music Concert',
      attendees: 156,
      capacity: 200,
      satisfaction: 4.9,
      engagement: 96
    },
    {
      event: 'Tech Talk Series',
      attendees: 89,
      capacity: 100,
      satisfaction: 4.7,
      engagement: 91
    }
  ]

  const monthlyData = [
    { month: 'Jan', events: 12, members: 1120, engagement: 72 },
    { month: 'Feb', events: 15, members: 1156, engagement: 75 },
    { month: 'Mar', events: 18, members: 1189, engagement: 78 },
    { month: 'Apr', events: 14, members: 1203, engagement: 76 },
    { month: 'May', events: 16, members: 1225, engagement: 79 },
    { month: 'Jun', events: 18, members: 1247, engagement: 78 }
  ]

  const getStatColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 90) return 'text-green-600 bg-green-100'
    if (engagement >= 80) return 'text-blue-600 bg-blue-100'
    if (engagement >= 70) return 'text-orange-600 bg-orange-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-bold text-gray-800">Analytics Dashboard</h1>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                <RefreshCw className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                <Download className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${getStatColor(stat.color)} rounded-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    stat.changeType === 'increase' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Monthly Trends Chart */}
          <div className="col-span-8">
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Monthly Trends</h2>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg">Events</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Members</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Engagement</button>
                </div>
              </div>
              
              {/* Simple Bar Chart Visualization */}
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-sm text-gray-600 font-medium">{data.month}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs text-gray-500">Events: {data.events}</span>
                        <span className="text-xs text-gray-500">Members: {data.members}</span>
                        <span className="text-xs text-gray-500">Engagement: {data.engagement}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
                          style={{ width: `${(data.events / 20) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Performance */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Recent Event Performance</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Event</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Attendance</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Satisfaction</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-600">Engagement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventMetrics.map((event, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="py-4">
                          <div className="font-medium text-gray-800">{event.event}</div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-800">{event.attendees}/{event.capacity}</span>
                            <div className="w-16 bg-gray-200 rounded-full h-1">
                              <div
                                className="bg-blue-500 h-1 rounded-full"
                                style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center space-x-1">
                            <Award className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-800">{event.satisfaction}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEngagementColor(event.engagement)}`}>
                            {event.engagement}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Club Performance Sidebar */}
          <div className="col-span-4">
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Top Performing Clubs</h2>
              <div className="space-y-4">
                {clubPerformance.map((club, index) => (
                  <div key={index} className="p-4 backdrop-blur-md bg-white/20 rounded-lg border border-white/30">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-800 text-sm">{club.name}</h3>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {club.growth}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                      <div>
                        <span className="block text-gray-500">Members</span>
                        <span className="font-medium text-gray-800">{club.members}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500">Events</span>
                        <span className="font-medium text-gray-800">{club.events}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500">Engagement</span>
                        <span className="font-medium text-gray-800">{club.engagement}%</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-blue-500 h-1 rounded-full"
                          style={{ width: `${club.engagement}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all text-left">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Generate Report</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all text-left">
                  <PieChart className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Export Data</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all text-left">
                  <Filter className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Custom Filter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
