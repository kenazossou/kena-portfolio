/**
 * EXPERIENCE CARD COMPONENT
 * 
 * Displays a single experience/project as an interactive card.
 * Used in experience grids and galleries.
 * 
 * Features:
 * - Responsive design with Tailwind CSS
 * - Type-specific styling and icons
 * - Technology tags
 * - Click handlers for detail navigation
 * - Hover effects for interactivity
 */

'use client'

import { Experience } from '@/types/experience'
import { useStore } from '@/store/useStore'

interface ExperienceCardProps {
  experience: Experience
}

/**
 * Get icon or visual indicator based on experience type
 */
const getTypeIndicator = (type: Experience['type']) => {
  const indicators: Record<Experience['type'], { label: string; color: string }> = {
    threejs: { label: '3D', color: 'bg-blue-500' },
    unity: { label: 'Unity', color: 'bg-purple-500' },
    unreal: { label: 'Unreal', color: 'bg-orange-500' },
    web: { label: 'Web', color: 'bg-green-500' },
    other: { label: 'Other', color: 'bg-gray-500' }
  }
  return indicators[type]
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const setScene = useStore((s) => s.setScene)
  const setSelectedExperience = useStore((s) => s.setSelectedExperience)

  const typeIndicator = getTypeIndicator(experience.type)

  const handleClick = () => {
    // Set which experience is being viewed
    setSelectedExperience(experience.id)
    // Navigate to detail scene
    setScene('experience-detail')
  }

  return (
    <div
      onClick={handleClick}
      className="
        bg-gray-900 rounded-lg overflow-hidden shadow-lg
        hover:shadow-2xl transition-all duration-300
        cursor-pointer hover:scale-105 border border-gray-700
        hover:border-blue-500
      "
    >
      {/* Thumbnail or placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden group">
        {experience.thumbnail ? (
          <img
            src={experience.thumbnail}
            alt={experience.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <svg className="w-16 h-16 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
            </svg>
          </div>
        )}

        {/* Type badge overlay */}
        <div className={`absolute top-2 right-2 ${typeIndicator.color} text-white px-2 py-1 rounded text-xs font-semibold`}>
          {typeIndicator.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 truncate">{experience.title}</h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{experience.description}</p>

        {/* Skills */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {experience.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-xs bg-gray-800 text-blue-400 px-2 py-1 rounded border border-gray-700"
              >
                {skill}
              </span>
            ))}
            {experience.skills.length > 3 && (
              <span className="text-xs text-gray-500 px-2 py-1">+{experience.skills.length - 3}</span>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {experience.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {experience.technologies.length > 4 && (
              <span className="text-xs text-gray-500 px-2 py-1">+{experience.technologies.length - 4}</span>
            )}
          </div>
        </div>

        {/* Date and action */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-700">
          {experience.date && <span className="text-xs text-gray-500">{experience.date}</span>}
          <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
            View →
          </button>
        </div>
      </div>
    </div>
  )
}
