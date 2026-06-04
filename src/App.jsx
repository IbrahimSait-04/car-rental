import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainRouter from './Router/MainRouter'
import { useSelector } from 'react-redux'

const App = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={`flex flex-col min-h-screen ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-800 text-gray-100"}`}>
      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <MainRouter />
      </main>

      <Footer />
    </div>
  )
}

export default App
