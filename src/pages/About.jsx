import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div>
      <section className={`py-12 ${theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}>
        <div className={`max-w-4xl mx-auto p-8 md:p-12 rounded-lg shadow-md ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
          <h2 className={`text-3xl font-bold mb-4 ${theme === "light" ? "text-blue-800" : "text-blue-300"}`}>
            About Max Car Rental
          </h2>
          <p className={`text-lg leading-relaxed font-serif mb-6 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            Discover a smarter way to drive with Max Car Rental—the ultimate destination for effortless vehicle rentals. From stylish sedans to spacious SUVs, our curated selection ensures you always find the perfect ride at the best price. With just a few clicks, you can search, filter, and reserve your car anytime, anywhere. No hidden fees, no long waits—just a smooth, reliable experience designed around your needs. Whether it’s a weekend adventure or daily commute, Max Car Rental puts you in the driver’s seat faster. Book today and experience convenience, flexibility, and unbeatable value.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
