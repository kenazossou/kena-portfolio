/**
 * PORTFOLIO EXPERIENCES DATA
 * 
 * This file contains all the portfolio experiences/projects.
 * Add new experiences by following the same structure.
 * 
 * Each experience entry includes:
 * - Basic info (title, description, type)
 * - Technologies and skills showcased
 * - Links and resources
 * - Display options (featured, thumbnails)
 * 
 * HOW TO ADD NEW EXPERIENCES:
 * 1. Add a new object to the experiences array
 * 2. Provide id, title, description, type
 * 3. List technologies and skills
 * 4. Add thumbnail and URLs
 * 5. Set featured = true if you want it on home
 * 
 * The system automatically handles:
 * - Type-specific rendering (embedded vs external)
 * - Filtering and sorting
 * - Gallery display
 * - Scene navigation
 */

import type { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    id: 'flight-reconstruction',
    title: 'Aircraft Flight Reconstruction',
    description: 'Real-time 3D visualization of aircraft flight paths with terrain and weather simulation.',
    type: 'web',
    skills: ['3D Graphics', 'Unity', 'Geospatial Data'],
    technologies: ['Unity', 'C#', 'WebGL'],
    featured: true,
    date: '2019-Present',
    tags: ['aviation', '3d', 'real-time'],
    fullDescription: `
      R&D Engineer position at CEFA Aviation focusing on 3D development.
      
      Project features:
      • Real-world terrain rendering using satellite imagery and elevation data
      • Multi-aircraft model support
      • Weather and time simulation systems
      • Cross-platform support: Windows, WebGL, iOS
      
      This project showcases skills in real-time graphics programming,
      geospatial data processing, and complex 3D application architecture.
    `,
    links: {
      demo: 'https://cefa-aviation.com/'
    }
  },
  {
    id: 'vr-train-maintenance',
    title: 'VR Train Maintenance Training',
    description: 'Immersive VR experience for training railway maintenance staff on safety procedures.',
    type: 'other',
    skills: ['VR Development', 'Unity', 'XR'],
    technologies: ['Unity', 'C#', 'HTC VIVE'],
    featured: true,
    date: '2017-2018',
    tags: ['vr', 'training', 'safety'],
    fullDescription: `
      R&D internship at SNCF (French National Railway Company).
      
      Developed an immersive 3D experience combining real 3D models
      with practical training scenarios for maintenance staff safety.
      
      This project provided hands-on experience in:
      • VR/AR development and interaction design
      • User experience in immersive environments
      • Real-world problem solving in training applications
    `,
    links: {
      demo: 'https://www.sncf.com/'
    }
  },
  {
    id: 'vr-train-crew',
    title: 'VR 360° Crew Training',
    description: 'Combined 3D models with 360° video for immersive train crew training.',
    type: 'other',
    skills: ['VR', 'Video Integration', 'Unity'],
    technologies: ['Unity', 'C#', 'HTC VIVE', '360° Video'],
    date: '2018',
    tags: ['vr', '360video', 'training']
  },
  {
    id: 'ar-factory',
    title: 'AR Factory Integration',
    description: 'Augmented Reality solution for Industry 4.0 factory optimization.',
    type: 'other',
    skills: ['AR Development', 'Unity', 'Industry 4.0'],
    technologies: ['Unity', 'C#', 'AR'],
    date: '2018',
    tags: ['ar', 'industry40', 'optimization'],
    fullDescription: `
      R&D Engineer at MODIS working on optimal AR integration for
      aeronautical factory operations. Focused on improving workflow
      efficiency and worker guidance through augmented reality.
    `
  },
  {
    id: 'internet-tv-box',
    title: 'IPTV Box Management System',
    description: 'Software for Internet TV Box Information System management.',
    type: 'web',
    skills: ['Backend Development', 'C#', '.NET'],
    technologies: ['C#', '.NET', 'Windows'],
    date: '2018-2019',
    tags: ['software', 'backend', 'windows']
  },
  {
    id: 'water-shader',
    title: 'Water & Electricity Flow Simulation',
    description: 'Shader programming simulating water and electricity flow for hydroelectricity central.',
    type: 'threejs',
    skills: ['Shader Programming', 'Graphics', 'Physics Simulation'],
    technologies: ['Unity ShaderLab', 'HLSL'],
    featured: true,
    tags: ['shader', 'simulation', 'graphics'],
    fullDescription: `
      Advanced shader programming project demonstrating real-time
      simulation of fluid dynamics for educational and industrial applications.
      
      Techniques explored:
      • Custom shader development
      • Flow field visualization
      • Real-time performance optimization
      • Physics-based rendering
    `
  },
  {
    id: 'virtual-theremin',
    title: 'Virtual Theremin',
    description: 'Musical instrument simulation using Leap Motion gesture recognition.',
    type: 'web',
    skills: ['Gesture Recognition', 'Audio Programming', 'C#'],
    technologies: ['C#', 'Leap Motion', 'Audio API'],
    featured: true,
    tags: ['music', 'gesture', 'interactive'],
    fullDescription: `
      Interactive project combining gesture recognition with audio synthesis
      to create a virtual musical instrument experience.
      
      This project demonstrates:
      • Real-time gesture tracking integration
      • Audio synthesis and effects
      • Interactive user experience design
      • Novel interaction paradigms
    `
  }
]

/**
 * Helper function to get featured experiences
 * Useful for home page display
 */
export const getFeaturedExperiences = () => {
  return experiences.filter(exp => exp.featured).slice(0, 3)
}

/**
 * Helper function to filter experiences by type
 * Useful for creating type-specific views
 */
export const getExperiencesByType = (type: string) => {
  return experiences.filter(exp => exp.type === type)
}

/**
 * Helper function to search experiences by skill or technology
 * Useful for filtering functionality
 */
export const searchExperiences = (query: string) => {
  const lowerQuery = query.toLowerCase()
  return experiences.filter(
    exp =>
      exp.title.toLowerCase().includes(lowerQuery) ||
      exp.description.toLowerCase().includes(lowerQuery) ||
      exp.skills.some(skill => skill.toLowerCase().includes(lowerQuery)) ||
      exp.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))
  )
}
