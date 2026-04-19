/**
 * HOME OVERLAY COMPONENT
 * 
 * HTML UI overlay displayed on top of the 3D homepage experience.
 * 
 * Features:
 * - Navigation menu
 * - Featured experiences preview
 * - Call-to-action buttons
 * - Responsive design for mobile/tablet/desktop
 * - Non-intrusive design that doesn't block the 3D content
 */

'use client'

import { useStore } from '@/store/useStore'
import { getFeaturedExperiences } from '@/data/experiences'

export default function HomeOverlay() {
  const setScene = useStore((s) => s.setScene)
  const scene = useStore((s) => s.scene)

  // Only show overlay on home scene
  if (scene !== 'home') return null

  const featured = getFeaturedExperiences()

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Top navigation bar */}
      <nav className="absolute top-0 left-0 right-0 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <div className="text-2xl font-bold text-white">
              El Canah <span className="text-blue-400">Zossou</span>
            </div>

            {/* Navigation menu */}
            <div className="hidden md:flex gap-8">
              <button className="text-gray-300 hover:text-white transition-colors">
                Home
              </button>
              <button
                onClick={() => setScene('gallery')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => setScene('about')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <a
                href="mailto:elcanahzossou@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center pointer-events-auto max-w-2xl px-4">
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            3D Developer
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 drop-shadow-md">
            Real-time Graphics • VR/AR • Game Engines • Interactive Experiences
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setScene('gallery')}
              className="
                bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8
                rounded-lg transition-colors drop-shadow-lg
              "
            >
              View Portfolio
            </button>
            <a
              href="mailto:elcanahzossou@gmail.com"
              className="
                bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8
                rounded-lg transition-colors drop-shadow-lg inline-block
              "
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section - Featured projects preview */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-auto bg-gradient-to-t from-black via-black/80 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-lg font-semibold text-gray-400 mb-6">Featured Work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featured.map((exp) => (
              <div
                key={exp.id}
                className="
                  bg-gray-900 bg-opacity-80 rounded-lg p-4 border border-gray-700
                  hover:border-blue-500 transition-colors cursor-pointer
                  hover:bg-opacity-100
                "
              >
                <h4 className="font-semibold text-white text-sm mb-2">{exp.title}</h4>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{exp.description}</p>
                <div className="flex gap-2">
                  {exp.skills.slice(0, 2).map((skill) => (
                    <span key={skill} className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom right - Social links and info */}
      <div className="absolute bottom-4 right-4 pointer-events-auto flex gap-4">
        <a
          href="mailto:elcanahzossou@gmail.com"
          className="text-gray-400 hover:text-white transition-colors"
          title="Email"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
        <a
          href="tel:+33698017037"
          className="text-gray-400 hover:text-white transition-colors"
          title="Phone"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.677 1.433 1.932 3.554 3.771 5.393 1.839 1.839 3.96 3.094 5.393 3.771l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.556a13 13 0 01-13-13V3z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
