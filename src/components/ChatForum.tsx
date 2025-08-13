import React, { useState } from 'react'
import { ArrowLeft, Send, Search, Users, Hash, Pin, Smile, Paperclip, MoreVertical } from 'lucide-react'

interface ChatForumProps {
  onNavigate: (view: string) => void
  onBack: () => void
}

const ChatForum: React.FC<ChatForumProps> = ({ onNavigate, onBack }) => {
  const [selectedChannel, setSelectedChannel] = useState('general')
  const [newMessage, setNewMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const channels = [
    { id: 'general', name: 'General', type: 'text', unread: 3, pinned: false },
    { id: 'announcements', name: 'Announcements', type: 'text', unread: 0, pinned: true },
    { id: 'events', name: 'Events', type: 'text', unread: 7, pinned: false },
    { id: 'projects', name: 'Projects', type: 'text', unread: 2, pinned: false },
    { id: 'random', name: 'Random', type: 'text', unread: 12, pinned: false },
    { id: 'help', name: 'Help & Support', type: 'text', unread: 1, pinned: false },
  ]

  const messages = [
    {
      id: 1,
      user: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'Hey everyone! Just wanted to share some exciting news about our upcoming photography workshop 📸',
      timestamp: '2:30 PM',
      isOwn: false,
      reactions: [{ emoji: '📸', count: 3 }, { emoji: '👍', count: 5 }]
    },
    {
      id: 2,
      user: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'That sounds amazing! When is it scheduled?',
      timestamp: '2:32 PM',
      isOwn: false,
      reactions: []
    },
    {
      id: 3,
      user: 'You',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'I\'m definitely interested! Will there be equipment provided for beginners?',
      timestamp: '2:35 PM',
      isOwn: true,
      reactions: [{ emoji: '❤️', count: 2 }]
    },
    {
      id: 4,
      user: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'Yes! We have cameras and lenses available for borrowing. The workshop is this Saturday at 2 PM in the Art Building.',
      timestamp: '2:37 PM',
      isOwn: false,
      reactions: [{ emoji: '🎉', count: 4 }]
    },
    {
      id: 5,
      user: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      message: 'Count me in! Should we bring anything specific?',
      timestamp: '2:40 PM',
      isOwn: false,
      reactions: []
    }
  ]

  const onlineMembers = [
    { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', status: 'online' },
    { name: 'Mike Johnson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', status: 'online' },
    { name: 'Emma Davis', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', status: 'away' },
    { name: 'Alex Rodriguez', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', status: 'online' },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('')
    }
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
              <div className="flex items-center space-x-2">
                <Hash className="w-5 h-5 text-gray-600" />
                <h1 className="text-xl font-bold text-gray-800">{channels.find(c => c.id === selectedChannel)?.name}</h1>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{onlineMembers.length} online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 w-48 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
              <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-140px)]">
          {/* Channels Sidebar */}
          <div className="col-span-3">
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg h-full">
              <div className="p-4 border-b border-white/20">
                <h2 className="font-semibold text-gray-800 mb-3">Channels</h2>
              </div>
              <div className="p-2 space-y-1 overflow-y-auto max-h-[calc(100%-80px)]">
                {channels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      selectedChannel === channel.id
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                        : 'hover:bg-white/20 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {channel.pinned ? (
                        <Pin className="w-4 h-4" />
                      ) : (
                        <Hash className="w-4 h-4" />
                      )}
                      <span className="text-sm font-medium">{channel.name}</span>
                    </div>
                    {channel.unread > 0 && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                        {channel.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-6">
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg h-full flex flex-col">
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex space-x-3 ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <img
                      src={message.avatar}
                      alt={message.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className={`flex-1 ${message.isOwn ? 'text-right' : ''}`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-gray-800 text-sm">{message.user}</span>
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                      </div>
                      <div className={`inline-block p-3 rounded-lg max-w-md ${
                        message.isOwn
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                          : 'bg-white/20 text-gray-800'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                      </div>
                      {message.reactions.length > 0 && (
                        <div className="flex space-x-1 mt-2">
                          {message.reactions.map((reaction, index) => (
                            <button
                              key={index}
                              className="flex items-center space-x-1 px-2 py-1 bg-white/20 rounded-full text-xs hover:bg-white/30 transition-all"
                            >
                              <span>{reaction.emoji}</span>
                              <span className="text-gray-600">{reaction.count}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                    <Paperclip className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder={`Message #${channels.find(c => c.id === selectedChannel)?.name}`}
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="w-full px-4 py-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                    <Smile className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Members Sidebar */}
          <div className="col-span-3">
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg h-full">
              <div className="p-4 border-b border-white/20">
                <h2 className="font-semibold text-gray-800 mb-3">Online Members</h2>
              </div>
              <div className="p-4 space-y-3 overflow-y-auto max-h-[calc(100%-80px)]">
                {onlineMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        member.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                      }`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{member.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{member.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatForum
