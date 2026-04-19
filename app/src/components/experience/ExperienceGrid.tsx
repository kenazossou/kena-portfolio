/**
 * EXPERIENCE GRID COMPONENT
 * 
 * Displays a grid of experience cards.
 * Handles:
 * - Responsive grid layout (auto-adjusts for different screen sizes)
 * - Optional filtering by type or skills
 * - Loading and empty states
 * - Extensible for future features (search, sort, filter)
 */

'use client'

import { Experience } from '@/types/experience'
import ExperienceCard from './ExperienceCard'

interface ExperienceGridProps {
  // Array of experiences to display
  experiences: Experience[]
  // Optional title for the grid
  title?: string
  // Optional description
  description?: string
  // Optional loading state
  isLoading?: boolean
}

export default function ExperienceGrid({
  experiences,
  title,
  description,
  isLoading = false
}: ExperienceGridProps) {
  return (
    <div className="w-full">
      {/* Header section */}
      {(title || description) && (
        <div className="mb-8">
          {title && <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>}
          {description && <p className="text-gray-400">{description}</p>}
        </div>
      )}

      {/* Loading state */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin">
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!isLoading && experiences.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No experiences found</p>
        </div>
      )}

      {/* Grid of experience cards */}
      {!isLoading && experiences.length > 0 && (
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
            auto-rows-fr
          "
        >
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}

      {/* Add more experiences hint */}
      {!isLoading && experiences.length > 0 && (
        <div className="mt-8 text-center text-gray-500 text-sm">
          Showing {experiences.length} experience{experiences.length !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  )
}
