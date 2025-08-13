import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
import StudentCouncilDashboard from './components/StudentCouncilDashboard'
import ClubDashboard from './components/ClubDashboard'
import MemberView from './components/MemberView'
import ClubExplorer from './components/ClubExplorer'
import EventDetails from './components/EventDetails'
import ChatForum from './components/ChatForum'
import Analytics from './components/Analytics'

type UserRole = 'guest' | 'student-council' | 'club-officer' | 'member'
type CurrentView = 'landing' | 'council-dashboard' | 'club-dashboard' | 'member-view' | 'club-explorer' | 'event-details' | 'chat-forum' | 'analytics'

function App() {
  const [userRole, setUserRole] = useState<UserRole>('guest')
  const [currentView, setCurrentView] = useState<CurrentView>('landing')

  const handleLogin = (role: UserRole) => {
    setUserRole(role)
    switch (role) {
      case 'student-council':
        setCurrentView('council-dashboard')
        break
      case 'club-officer':
        setCurrentView('club-dashboard')
        break
      case 'member':
        setCurrentView('member-view')
        break
      default:
        setCurrentView('landing')
    }
  }

  const handleNavigation = (view: CurrentView) => {
    setCurrentView(view)
  }

  const handleLogout = () => {
    setUserRole('guest')
    setCurrentView('landing')
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'council-dashboard':
        return <StudentCouncilDashboard onNavigate={handleNavigation} onLogout={handleLogout} />
      case 'club-dashboard':
        return <ClubDashboard onNavigate={handleNavigation} onLogout={handleLogout} />
      case 'member-view':
        return <MemberView onNavigate={handleNavigation} onLogout={handleLogout} />
      case 'club-explorer':
        return <ClubExplorer onNavigate={handleNavigation} onBack={() => handleNavigation('member-view')} />
      case 'event-details':
        return <EventDetails onNavigate={handleNavigation} onBack={() => handleNavigation('member-view')} />
      case 'chat-forum':
        return <ChatForum onNavigate={handleNavigation} onBack={() => handleNavigation('club-dashboard')} />
      case 'analytics':
        return <Analytics onNavigate={handleNavigation} onBack={() => handleNavigation('council-dashboard')} />
      default:
        return <LandingPage onLogin={handleLogin} onNavigate={handleNavigation} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {renderCurrentView()}
    </div>
  )
}

export default App
