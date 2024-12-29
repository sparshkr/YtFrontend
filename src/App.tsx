import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import VideoList from "./components/VideoList";
import { Github, Youtube } from "lucide-react";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        {/* Navbar */}
        <nav className="bg-gray-800 border-b border-gray-700 fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center space-x-3 group">
                  <Youtube className="h-6 w-6 text-red-500 group-hover:text-red-400 transition-colors duration-200" />
                  <span className="font-bold text-xl text-gray-100 group-hover:text-white transition-colors duration-200">
                    VideoHub
                  </span>
                </Link>
              </div>

              <div className="flex items-center">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16 min-h-screen bg-gray-900">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/:cursor?" element={<VideoList />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2024 VideoHub. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
