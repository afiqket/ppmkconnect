import React, { useState } from 'react'
import { Users, Calendar, MessageSquare, FileText, Settings, Bell, Plus, Search, Filter, MoreVertical, Upload, Send, Eye, Download } from 'lucide-react'

interface ClubDashboardProps {
  onNavigate: (view: string) => void
  onLogout: () => void
}

const ClubDashboard: React.FC<ClubDashboardProps> = ({ onNavigate, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const members = [
    { id: 1, name: 'Alice Johnson', role: 'President', joinDate: '2023-09-01', status: 'active' },
    { id: 2, name: 'Bob Smith', role: 'Vice President', joinDate: '2023-09-05', status: 'active' },
    { id: 3, name: 'Carol Davis', role: 'Secretary', joinDate: '2023-09-10', status: 'active' },
    { id: 4, name: 'David Wilson', role: 'Member', joinDate: '2023-10-15', status: 'active' },
    { id: 5, name: 'Eva Brown', role: 'Member', joinDate: '2023-11-20', status: 'inactive' },
  ]

  const events = [
    { id: 1, title: 'Photography Workshop', date: '2024-02-15', time: '2:00 PM', location: 'Art Building', status: 'approved', attendees: 25 },
    { id: 2, title: 'Annual Exhibition', date: '2024-03-10', time: '6:00 PM', location: 'Main Hall', status: 'pending', attendees: 0 },
    { id: 3, title: 'Guest Speaker Session', date: '2024-02-28', time: '4:00 PM', location: 'Conference Room', status: 'draft', attendees: 0 },
  ]

  const documents = [
    { id: 1, name: 'Club Constitution', type: 'PDF', size: '2.4 MB', uploadDate: '2023-09-01' },
    { id: 2, name: 'Meeting Minutes - Jan 2024', type: 'DOC', size: '1.2 MB', uploadDate: '2024-01-15' },
    { id: 3, name: 'Budget Proposal 2024', type: 'XLS', size: '856 KB', uploadDate: '2024-01-20' },
    { id: 4, name: 'Event Photos', type: 'ZIP', size: '45.2 MB', uploadDate: '2024-01-25' },
  ]

  const announcements = [
    { id: 1, title: 'New Workshop Series Starting', content: 'We are excited to announce a new series of photography workshops...', date: '2024-01-28', priority: 'high' },
    { id: 2, title: 'Meeting Reminder', content: 'Don\'t forget about our monthly meeting this Friday...', date: '2024-01-26', priority: 'medium' },
    { id: 3, title: 'Equipment Available', content: 'New camera equipment is now available for member use...', date: '2024-01-24', priority: 'low' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Photography Club</h1>
                <p className="text-sm text-gray-600">Club Officer Dashboard</p>
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
            { id: 'overview', label: 'Overview', icon: Users },
            { id: 'members', label: 'Members', icon: Users },
            { id: 'events', label: 'Events', icon: Calendar },
            { id: 'announcements', label: 'Announcements', icon: MessageSquare },
            { id: 'documents', label: 'Documents', icon: FileText },
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
                    <p className="text-sm text-gray-600">Total Members</p>
                    <p className="text-3xl font-bold text-gray-800">45</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-500">+5</span>
                  <span className="text-gray-600 ml-1">new this month</span>
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Upcoming Events</p>
                    <p className="text-3xl font-bold text-gray-800">3</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-green-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-blue-500">Next:</span>
                  <span className="text-gray-600 ml-1">Feb 15</span>
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Discussions</p>
                    <p className="text-3xl font-bold text-gray-800">12</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-500">+3</span>
                  <span className="text-gray-600 ml-1">new today</span>
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Documents</p>
                    <p className="text-3xl font-bold text-gray-800">28</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-blue-500">Storage:</span>
                  <span className="text-gray-600 ml-1">2.1 GB used</span>
                </div>
              </div>
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Announcements */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Recent Announcements</h3>
                  <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {announcements.slice(0, 3).map((announcement) => (
                    <div key={announcement.id} className="p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{announcement.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{announcement.content.substring(0, 80)}...</p>
                          <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                          announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {announcement.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-left">
                    <Plus className="w-6 h-6 text-teal-600 mb-2" />
                    <p className="font-medium text-gray-800">Create Event</p>
                    <p className="text-sm text-gray-600">Plan a new activity</p>
                  </button>
                  <button className="p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-left">
                    <Send className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="font-medium text-gray-800">Send Announcement</p>
                    <p className="text-sm text-gray-600">Notify all members</p>
                  </button>
                  <button className="p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-left">
                    <Upload className="w-6 h-6 text-purple-600 mb-2" />
                    <p className="font-medium text-gray-800">Upload Document</p>
                    <p className="text-sm text-gray-600">Share files</p>
                  </button>
                  <button
                    onClick={() => onNavigate('chat-forum')}
                    className="p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-left"
                  >
                    <MessageSquare className="w-6 h-6 text-orange-600 mb-2" />
                    <p className="font-medium text-gray-800">Open Forum</p>
                    <p className="text-sm text-gray-600">Chat with members</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div className="space-y-6">
            {/* Search and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search members..."
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
                  Invite Member
                </button>
              </div>
            </div>

            {/* Members List */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10 border-b border-white/20">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Member</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/20">
                    {members.map((member) => (
                      <tr key={member.id} className="hover:bg-white/10 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-medium">{member.name.charAt(0)}</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-800">{member.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-800">{member.role}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">{member.joinDate}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                            <MoreVertical className="w-4 h-4 text-gray-600" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            {/* Events Header */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Club Events</h2>
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </button>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'approved' ? 'bg-green-100 text-green-800' :
                      event.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status}
                    </span>
                    <button className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <button className="w-full py-2 text-teal-600 hover:text-teal-700 font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            {/* Documents Header */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Document Library</h2>
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </button>
            </div>

            {/* Documents List */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10 border-b border-white/20">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Document</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Size</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Upload Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/20">
                    {documents.map((doc) => (
                      <tr key={doc.id} className="hover:bg-white/10 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-800">{doc.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-800">{doc.type}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">{doc.size}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600">{doc.uploadDate}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                              <Download className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClubDashboard
