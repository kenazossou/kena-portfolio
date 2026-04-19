/**
 * GALLERY SCENE COMPONENT
 * 
 * Displays all portfolio experiences in a gallery view.
 * 
 * This scene combines:
 * - A 3D background environment (optional)
 * - HTML UI overlay with ExperienceGrid component
 * - Navigation back to home
 * - Filtering and sorting capabilities
 * 
 * Future enhancements:
 * - 3D gallery layout (cards floating in space)
 * - Filter by type or technology
 * - Search functionality
 * - Animations and transitions
 */

'use client'

import { useState } from 'react'
import { useStore } from '@/store/useStore'
import { experiences } from '@/data/experiences'
import ExperienceGrid from '@/components/experience/ExperienceGrid'

export default function GalleryScene() {
  const setScene = useStore((s) => s.setScene)

  // State for filtering
  const [filterType, setFilterType] = useState<string | null>(null)

  // Filter experiences based on selected type
  const filteredExperiences = filterType
    ? experiences.filter((exp) => exp.type === filterType)
    : experiences

  // Get unique types for filter buttons
  const types = Array.from(new Set(experiences.map((exp) => exp.type)))

  return (
    <div className="w-full h-full">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black -z-10" />

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with navigation */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Navigation button */}
            <button
              onClick={() => setScene('home')}
              className="
                inline-flex items-center gap-2 text-gray-400 hover:text-white
                transition-colors mb-6
              "
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>

            <h1 className="text-4xl font-bold text-white mb-4">Portfolio Gallery</h1>
            <p className="text-gray-400 max-w-2xl">
              Explore my projects, experiences, and technical work across various domains including game development,
              VR/AR, 3D graphics, and software engineering.
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilterType(null)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-colors
                  ${
                    filterType === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }
                `}
              >
                All ({experiences.length})
              </button>

              {types.map((type) => {
                const count = experiences.filter((exp) => exp.type === type).length
                return (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`
                      px-4 py-2 rounded-lg font-medium transition-colors capitalize
                      ${
                        filterType === type
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }
                    `}
                  >
                    {type} ({count})
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="flex-1 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <ExperienceGrid experiences={filteredExperiences} />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-950 border-t border-gray-800 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-white mb-2">Contact</h3>
                <p className="text-gray-400 text-sm">
                  <a href="mailto:elcanahzossou@gmail.com" className="hover:text-white transition-colors">
                    elcanahzossou@gmail.com
                  </a>
                </p>
                <p className="text-gray-400 text-sm">
                  <a href="tel:+33698017037" className="hover:text-white transition-colors">
                    +33 (0)6 9801 7037
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Location</h3>
                <p className="text-gray-400 text-sm">71 Rue du Général Conrad</p>
                <p className="text-gray-400 text-sm">67000 Strasbourg, France</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Navigation</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <button onClick={() => setScene('home')} className="text-gray-400 hover:text-white transition-colors text-left">
                    Home
                  </button>
                  <button onClick={() => setScene('about')} className="text-gray-400 hover:text-white transition-colors text-left">
                    About
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
              <p>© 2025 El Canah Zossou. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
