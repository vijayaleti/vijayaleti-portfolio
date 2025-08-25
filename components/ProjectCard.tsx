'use client'

import { useState } from 'react'
import Badge from './Badge'
import { ExternalLink, Github, Calendar, Users, Database, Cloud, BarChart3, Cpu, Zap, TrendingUp } from 'lucide-react'

interface ProjectCardProps {
  name: string
  description: string
  highlights: string[]
  keywords: string[]
  startDate: string
  endDate: string
  url?: string
  roles: string[]
  entity: string
  type: string
  index: number
}

export default function ProjectCard({
  name,
  description,
  highlights,
  keywords,
  startDate,
  endDate,
  url,
  roles,
  entity,
  type,
  index
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    })
  }

  const getProjectTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'data analytics platform':
        return <BarChart3 className="w-6 h-6" />
      case 'data pipeline':
        return <Database className="w-6 h-6" />
      case 'web application':
        return <Cloud className="w-6 h-6" />
      case 'ml platform':
        return <Cpu className="w-6 h-6" />
      default:
        return <Zap className="w-6 h-6" />
    }
  }

  const getProjectGradient = (type: string) => {
    switch (type.toLowerCase()) {
      case 'data analytics platform':
        return 'from-blue-500 to-cyan-500'
      case 'data pipeline':
        return 'from-green-500 to-emerald-500'
      case 'web application':
        return 'from-purple-500 to-pink-500'
      case 'ml platform':
        return 'from-orange-500 to-red-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const extractMetrics = (highlights: string[]) => {
    const metrics: string[] = []
    highlights.forEach(highlight => {
      // Look for percentages, numbers with units (K, M, TB), and other metrics
      const matches = highlight.match(/(\d+(?:\.\d+)?(?:%|K|M|TB|GB|ms|s|TB\+|M\+|\+))/g)
      if (matches) {
        metrics.push(...matches.slice(0, 2)) // Take up to 2 metrics per highlight
      }
    })
    return metrics.slice(0, 3) // Show up to 3 metrics total
  }

  const getTechCategories = (keywords: string[]) => {
    const categories = {
      cloud: keywords.filter(k => ['AWS', 'Azure', 'GCP', 'S3', 'EC2', 'Lambda'].some(cloud => k.includes(cloud))),
      data: keywords.filter(k => ['Python', 'SQL', 'Pandas', 'PySpark', 'Spark'].some(data => k.includes(data))),
      tools: keywords.filter(k => !['AWS', 'Azure', 'GCP', 'S3', 'EC2', 'Lambda', 'Python', 'SQL', 'Pandas', 'PySpark', 'Spark'].some(tech => k.includes(tech)))
    }
    return categories
  }

  const metrics = extractMetrics(highlights)
  const techCategories = getTechCategories(keywords)

  return (
    <div 
      className={`group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform ${
        isHovered ? 'scale-105 -translate-y-2' : ''
      }`}
      style={{ 
        animationDelay: `${index * 0.15}s`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Header with Gradient */}
      <div className={`h-32 bg-gradient-to-br ${getProjectGradient(type)} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white opacity-90">
            {getProjectTypeIcon(type)}
          </div>
        </div>
        
        {/* Top-right badges */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Bottom overlay with type */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <Badge variant="secondary" size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
            {type}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        {/* Project Title and Meta */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {name}
          </h3>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{entity}</span>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-md">
                <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400 mr-1" />
                <span className="text-xs font-semibold text-green-700 dark:text-green-300">{metric}</span>
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
          {description}
        </p>

        {/* Role */}
        <div className="flex flex-wrap gap-2 mb-4">
          {roles.map((role) => (
            <Badge key={role} variant="primary" size="sm">
              {role}
            </Badge>
          ))}
        </div>

        {/* Tech Stack Categories */}
        <div className="space-y-3">
          {techCategories.cloud.length > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <Cloud className="w-3 h-3 text-blue-500 mr-2" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Cloud</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {techCategories.cloud.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {techCategories.data.length > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <Database className="w-3 h-3 text-green-500 mr-2" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Data</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {techCategories.data.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {techCategories.tools.length > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <Cpu className="w-3 h-3 text-purple-500 mr-2" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Tools</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {techCategories.tools.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
                {techCategories.tools.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                    +{techCategories.tools.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expandable Details */}
      <div className={`overflow-hidden transition-all duration-500 ${
        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-500" />
            Key Features & Achievements
          </h4>
          <ul className="space-y-2">
            {highlights.slice(0, 3).map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: isHovered ? 'slideInFromBottom 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}