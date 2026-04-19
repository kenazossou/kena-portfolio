/**
 * EXPERIENCE TYPE DEFINITIONS
 * 
 * This file defines the core types for managing portfolio experiences.
 * It allows you to easily add and manage different types of projects:
 * - Three.js interactive experiences
 * - Unity WebGL builds
 * - Unreal Engine builds
 * - Web-based projects
 * - Any other type of embedded content
 * 
 * By maintaining strict typing here, you ensure consistency across
 * all experience components and data structures.
 */

/**
 * ExperienceType: Categorizes the type of experience/project
 * - 'threejs': Interactive Three.js experiences in the browser
 * - 'unity': Unity WebGL builds embedded in iframes
 * - 'unreal': Unreal Engine Pixel Streaming or builds
 * - 'web': Regular web applications/projects
 * - 'other': Any other type of experience
 */
export type ExperienceType = 'threejs' | 'unity' | 'unreal' | 'web' | 'other'

/**
 * SkillCategory: Groups skills by domain for organization
 * Add more as needed for your portfolio
 */
export type SkillCategory = 'gameEngine' | 'modeling' | 'programming' | 'database' | 'other'

/**
 * Experience: Core interface for a portfolio experience/project
 * All portfolio items must conform to this structure
 */
export interface Experience {
  // Unique identifier for the experience
  id: string
  
  // Display name
  title: string
  
  // Brief description shown in cards
  description: string
  
  // Type of experience (determines how it's displayed/embedded)
  type: ExperienceType
  
  // Skills highlighted by this project
  skills: string[]
  
  // Technologies used
  technologies: string[]
  
  // Path to thumbnail/preview image
  thumbnail?: string
  
  // For web/external links: URL to the project
  url?: string
  
  // For embedded experiences (unity, threejs):
  // Path to the component or WebGL build
  componentPath?: string
  
  // Full description for detail view
  fullDescription?: string
  
  // Date when project was created/completed
  date?: string
  
  // Category/tags for filtering
  tags?: string[]
  
  // Whether this experience is featured on home
  featured?: boolean
  
  // Links to source code, documentation, etc.
  links?: {
    github?: string
    demo?: string
    docs?: string
  }
}

/**
 * Skill: Interface for skill items used in resume/about sections
 */
export interface Skill {
  name: string
  category: SkillCategory
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

/**
 * SceneType: Available scenes in the portfolio
 * Add new scenes here as you expand the site
 */
export type SceneType = 'home' | 'gallery' | 'experience-detail' | 'about'
