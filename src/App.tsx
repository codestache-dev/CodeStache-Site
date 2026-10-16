import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProductsSection from './components/ProductsSection'
import TeamSection from './components/TeamSection'
import BudgetEstimator from './components/BudgetEstimator'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-app text-main flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProductsSection />
          <TeamSection />
          <BudgetEstimator />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
