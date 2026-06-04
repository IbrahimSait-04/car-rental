import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8 sm:p-12 grid md:grid-cols-2 gap-10">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions or need assistance with booking your car?  
            Feel free to contact us, we’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">📍 Address</h4>
              <p className="text-gray-600">UIT Kollam, Kerala, India</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">📞 Phone</h4>
              <p className="text-gray-600">+91 87145 04530</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">✉️ Email</h4>
              <p className="text-gray-600">saitibrahimsait8369@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold 
                       hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
