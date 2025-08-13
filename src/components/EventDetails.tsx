import React, { useState } from 'react'
import { ArrowLeft, Calendar, Clock, MapPin, Users, Share2, Heart, MessageCircle, Star, Camera, Music, Trophy, BookOpen } from 'lucide-react'

interface EventDetailsProps {
  onNavigate: (view: string) => void
  onBack: () => void
}

const EventDetails: React.FC<EventDetailsProps> = ({ onNavigate, onBack }) => {
  const [isAttending, setIsAttending] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)

  const event = {
    id: 1,
    title: 'Annual Photography Workshop',
    description: 'Join us for an immersive photography workshop where you\'ll learn advanced techniques, composition principles, and post-processing skills. Perfect for both beginners and intermediate photographers looking to enhance their craft.',
    fullDescription: `This comprehensive workshop will cover:

• Camera fundamentals and manual settings
• Composition techniques and rule of thirds
• Lighting principles for different scenarios
• Portrait and landscape photography
• Basic photo editing and post-processing
• Equipment recommendations and care

Our experienced instructors will provide hands-on guidance and personalized feedback. All skill levels are welcome, and equipment will be provided for those who need it.

Refreshments will be provided during breaks, and participants will receive a digital resource pack with tips, presets, and editing tutorials.`,
    date: 'Saturday, January 20, 2024',
    time: '2:00 PM - 6:00 PM',
    location: 'Art Building, Room 205',
    organizer: 'Photography Club',
    attendees: 47,
    maxAttendees: 60,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Workshop',
    tags: ['Photography', 'Creative', 'Hands-on', 'All Levels'],
    likes: 23,
    comments: 8,
    rating: 4.8
  }

  const relatedEvents = [
    {
      id: 2,
      title: 'Digital Art Showcase',
      date: 'Jan 25',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      attendees: 32
    },
    {
      id: 3,
      title: 'Music Production Workshop',
      date: 'Feb 2',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      attendees: 28
    },
    {
      id: 4,
      title: 'Creative Writing Session',
      date: 'Feb 8',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      attendees: 19
    }
  ]

  const comments = [
    {
      id: 1,
      user: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      comment: 'This looks amazing! Can\'t wait to learn some new techniques.',
      time: '2 hours ago',
      likes: 5
    },
    {
      id: 2,
      user: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      comment: 'Will there be outdoor shooting opportunities as well?',
      time: '1 hour ago',
      likes: 2
    },
    {
      id: 3,
      user: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      comment: 'Perfect timing! I just got my first DSLR camera.',
      time: '45 minutes ago',
      likes: 3
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'workshop':
        return <BookOpen className="w-4 h-4" />
      case 'competition':
        return <Trophy className="w-4 h-4" />
      case 'social':
        return <Users className="w-4 h-4" />
      case 'performance':
        return <Music className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
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
              <h1 className="text-xl font-bold text-gray-800">Event Details</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg border transition-all ${
                  isLiked
                    ? 'bg-red-500 text-white border-red-500'
                    : 'backdrop-blur-md bg-white/20 border-white/30 hover:bg-white/30 text-gray-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Event Image */}
            <div className="relative rounded-xl overflow-hidden mb-6">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-2 backdrop-blur-md bg-white/20 rounded-lg px-3 py-1 border border-white/30">
                  {getCategoryIcon(event.category)}
                  <span className="text-sm font-medium text-white">{event.category}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-1 backdrop-blur-md bg-white/20 rounded-lg px-3 py-1 border border-white/30">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">{event.rating}</span>
                </div>
              </div>
            </div>

            {/* Event Info */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h1>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium text-gray-800">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium text-gray-800">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Attendees</p>
                    <p className="font-medium text-gray-800">{event.attendees}/{event.maxAttendees}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">About This Event</h3>
                <div className="prose prose-sm text-gray-600">
                  {event.fullDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-2">{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                    <span>{event.likes + (isLiked ? 1 : 0)}</span>
                  </button>
                  <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{event.comments}</span>
                  </button>
                </div>
                <button
                  onClick={() => setIsAttending(!isAttending)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    isAttending
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600'
                  }`}
                >
                  {isAttending ? 'Attending ✓' : 'Join Event'}
                </button>
              </div>
            </div>

            {/* Comments Section */}
            {showComments && (
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Comments ({comments.length})</h3>
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-3">
                      <img
                        src={comment.avatar}
                        alt={comment.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-800 text-sm">{comment.user}</span>
                          <span className="text-xs text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{comment.comment}</p>
                        <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-red-500 transition-colors">
                          <Heart className="w-3 h-3" />
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            {/* Organizer Info */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Organized by</h3>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{event.organizer}</p>
                  <p className="text-sm text-gray-500">Student Organization</p>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg hover:bg-white/30 transition-all text-gray-700 font-medium">
                View Club Profile
              </button>
            </div>

            {/* Attendance Progress */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Attendance</h3>
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{event.attendees} registered</span>
                  <span>{event.maxAttendees} max</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full"
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {event.maxAttendees - event.attendees} spots remaining
              </p>
            </div>

            {/* Related Events */}
            <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Related Events</h3>
              <div className="space-y-3">
                {relatedEvents.map((relatedEvent) => (
                  <div key={relatedEvent.id} className="flex items-center space-x-3 p-3 backdrop-blur-md bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                    <img
                      src={relatedEvent.image}
                      alt={relatedEvent.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{relatedEvent.title}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{relatedEvent.date}</span>
                        <span>{relatedEvent.attendees} attending</span>
                      </div>
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

export default EventDetails
