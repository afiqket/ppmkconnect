import React from 'react'
import { Users, Calendar, Trophy, MessageCircle, Shield, Sparkles, ArrowRight, Star, CheckCircle } from 'lucide-react'

interface LandingPageProps {
  onLogin: (role: 'student-council' | 'club-officer' | 'member') => void
  onNavigate: (view: string) => void
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">PPMKConnect</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('club-explorer')}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Explore Clubs
              </button>
              <div className="flex space-x-2">
                <button
                  onClick={() => onLogin('member')}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onLogin('student-council')}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Sparkles className="w-4 h-4 text-teal-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Connecting Communities Nationwide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Unite Your
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent"> Student Community</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              PPMKConnect is the comprehensive platform that bridges Student Councils with social clubs across the nation. 
              Streamline management, boost engagement, and foster meaningful connections in your educational community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onLogin('student-council')}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Start Managing Clubs
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => onNavigate('club-explorer')}
                className="px-8 py-4 backdrop-blur-md bg-white/20 text-gray-700 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Public Clubs
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Students collaborating"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed for Student Councils, Club Officers, and Members to create thriving communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Council Features */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Student Council</h3>
              <p className="text-gray-600 mb-6">Complete oversight and management tools for administrators.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Club Directory & Approval
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Event Management
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Budget & Resources
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Analytics & Reports
                </li>
              </ul>
            </div>

            {/* Club Officer Features */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Club Officers</h3>
              <p className="text-gray-600 mb-6">Comprehensive tools to manage and grow your club.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Member Management
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Event Planning
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Communication Hub
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Document Storage
                </li>
              </ul>
            </div>

            {/* Member Features */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Members</h3>
              <p className="text-gray-600 mb-6">Discover, join, and engage with clubs that match your interests.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Club Discovery
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Event Calendar
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Achievement System
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Personalized Feed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-12 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-gray-600">Active Clubs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-800 mb-2">25K+</div>
                <div className="text-gray-600">Students Connected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-800 mb-2">1.2K+</div>
                <div className="text-gray-600">Events Organized</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-gray-600">Universities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl border border-white/20 p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent"> Student Community?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students, clubs, and councils already using PPMKConnect to build stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onLogin('student-council')}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => onLogin('member')}
                className="px-8 py-4 backdrop-blur-md bg-white/20 text-gray-700 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Join as Member
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">PPMKConnect</span>
            </div>
            <div className="text-gray-600 text-center md:text-right">
              <p>© 2024 PPMKConnect. Empowering student communities nationwide.</p>
              <p className="text-sm mt-1">Built with passion for education and community building.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
