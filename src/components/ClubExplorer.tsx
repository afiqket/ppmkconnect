import React, { useState } from 'react'
import { Search, Filter, Users, MapPin, Calendar, Star, ArrowLeft, Heart, Eye, Award, Zap } from 'lucide-react'

interface ClubExplorerProps {
  onNavigate: (view: string) => void
  onBack: () => void
}

const ClubExplorer: React.FC<ClubExplorerProps> = ({ onNavigate, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', label: 'All Clubs', count: 127 },
    { id: 'arts', label: 'Arts & Culture', count: 23 },
    { id: 'sports', label: 'Sports & Fitness', count: 18 },
    { id: 'academic', label: 'Academic', count: 31 },
    { id: 'technology', label: 'Technology', count: 15 },
    { id: 'social', label: 'Social Impact', count: 22 },
    { id: 'hobby', label: 'Hobbies', count: 18 },
  ]

  const clubs = [
    {
      id: 1,
      name: 'Photography Club',
      category: 'arts',
      description: 'Capture moments, create memories. Join us for workshops, photo walks, and exhibitions.',
      members: 145,
      rating: 4.8,
      location: 'Art Building',
      nextEvent: 'Feb 15, 2024',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      achievements: ['Best Club 2023', 'Most Active'],
      tags: ['Photography', 'Art', 'Creative'],
      isPopular: true,
    },
    {
      id: 2,
      name: 'Environmental Club',
      category: 'social',
      description: 'Making a difference for our planet. Join our sustainability initiatives and green projects.',
      members: 89,
      rating: 4.9,
      location: 'Science Building',
      nextEvent: 'Feb 18, 2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      achievements: ['Eco Champion 2023'],
      tags: ['Environment', 'Sustainability', 'Community'],
      isNew: true,
    },
    {
      id: 3,
      name: 'Tech Innovation Hub',
      category: 'technology',
      description: 'Building the future through technology. Coding workshops, hackathons, and tech talks.',
      members: 203,
      rating: 4.7,
      location: 'Computer Lab',
      nextEvent: 'Feb 20, 2024',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      achievements: ['Innovation Award', 'Largest Tech Club'],
      tags: ['Programming', 'AI', 'Innovation'],
      isPopular: true,
    },
    {
      id: 4,
      name: 'Debate Society',
      category: 'academic',
      description: 'Sharpen your argumentative skills and engage in intellectual discourse.',
      members: 67,
      rating: 4.6,
      location: 'Main Hall',
      nextEvent: 'Feb 22, 2024',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      achievements: ['National Champions'],
      tags: ['Debate', 'Public Speaking', 'Critical Thinking'],
    },
    {
      id: 5,
      name: 'Music Society',
      category: 'arts',
      description: 'Express yourself through music. From classical to contemporary, all genres welcome.',
      members: 112,
      rating: 4.8,
      location: 'Music Room',
      nextEvent: 'Feb 25, 2024',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      achievements: ['Best Performance 2023'],
      tags: ['Music', 'Performance', 'Creative'],
    },
    {
      id: 6,
      name: 'Fitness & Wellness',
      category: 'sports',
      description: 'Stay healthy, stay strong. Group workouts, yoga sessions, and wellness workshops.',
      members: 156,
      rating: 4.5,
      location: 'Gym',
      nextEvent: 'Feb 16, 2024',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      achievements: ['Health Champion'],
      tags: ['Fitness', 'Wellness', 'Health'],
      isNew: true,
    },
  ]

  const filteredClubs = clubs.filter(club => {
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
              <div>
                <h1 className="text-xl font-bold text-gray-800">Explore Clubs</h1>
                <p className="text-sm text-gray-600">Discover your perfect community</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search clubs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Find Your
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent"> Perfect Club</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a community of passionate students. Discover clubs that match your interests and make lasting connections.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                    : 'backdrop-blur-md bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">127</div>
            <div className="text-gray-600">Active Clubs</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">3,247</div>
            <div className="text-gray-600">Total Members</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">45</div>
            <div className="text-gray-600">Events This Month</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.7</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club) => (
            <div key={club.id} className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Club Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {club.isPopular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center">
                      <Zap className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  {club.isNew && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      New
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 backdrop-blur-md bg-white/20 rounded-full border border-white/30 hover:bg-white/30 transition-all">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Club Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{club.name}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{club.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">•</span>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 ml-1">{club.members} members</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{club.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {club.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                {club.achievements.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center space-x-1 mb-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-700">Achievements</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {club.achievements.map((achievement, index) => (
                        <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Location and Next Event */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {club.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Next event: {club.nextEvent}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => onNavigate('club-detail')}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all font-medium"
                  >
                    View Details
                  </button>
                  <button className="px-4 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg hover:bg-white/30 transition-all">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No clubs found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClubExplorer
