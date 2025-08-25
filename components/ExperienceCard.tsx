'use client'

import { useState } from 'react'
import Badge from './Badge'
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp, TrendingUp, Database, Zap } from 'lucide-react'

interface ExperienceCardProps {
  name: string
  position: string
  url?: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[]
  index: number
}

export default function ExperienceCard({
  name,
  position,
  url,
  startDate,
  endDate,
  summary,
  highlights,
  index
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(index === 0) // Expand first card by default

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return dateString
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    })
  }

  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start)
    const endDate = end === 'Present' ? new Date() : new Date(end)
    const monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                       (endDate.getMonth() - startDate.getMonth())
    
    if (monthsDiff < 12) {
      return `${monthsDiff} ${monthsDiff === 1 ? 'month' : 'months'}`
    } else {
      const years = Math.floor(monthsDiff / 12)
      const months = monthsDiff % 12
      return `${years} ${years === 1 ? 'year' : 'years'}${months > 0 ? ` ${months} ${months === 1 ? 'month' : 'months'}` : ''}`
    }
  }

  const getCompanyColor = (companyName: string) => {
    switch (companyName.toLowerCase()) {
      case 'clairvoyant':
        return 'from-blue-500 to-purple-600'
      case 'accenture':
        return 'from-purple-500 to-pink-600'
      case 'sonata software':
        return 'from-green-500 to-blue-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const extractMetrics = (highlights: string[]) => {
    const metrics: string[] = []
    highlights.forEach(highlight => {
      const percentMatch = highlight.match(/(\d+)%/)
      const numberMatch = highlight.match(/(\d+[MK]?\+?)/)
      if (percentMatch) metrics.push(`${percentMatch[1]}%`)
      else if (numberMatch) metrics.push(numberMatch[1])
    })
    return metrics.slice(0, 3)
  }

  const metrics = extractMetrics(highlights)

  return (
    <div 
      className={`relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden ${
        isExpanded ? 'ring-2 ring-blue-500/20' : ''
      }`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      {/* Timeline Connector */}
      <div className="absolute -left-4 top-8 w-8 h-8 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>

      {/* Company Header */}
      <div className={`h-2 bg-gradient-to-r ${getCompanyColor(name)}`}></div>
      
      <div className="p-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {position}
              </h3>
              {endDate === 'Present' && (
                <Badge variant="success" size="sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Current
                </Badge>
              )}
            </div>
            
            <div className="flex items-center mb-3">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors duration-300"
                >
                  {name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {name}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-start lg:items-end text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center mb-1">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
            </div>
            <span className="font-medium text-blue-600 dark:text-blue-400">
              {calculateDuration(startDate, endDate)}
            </span>
          </div>
        </div>

        {/* Key Metrics */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center bg-blue-50 dark:bg-blue-900/30 px-3 py-2 rounded-lg">
                <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm font-bold text-blue-700 dark:text-blue-300">{metric}</span>
              </div>
            ))}
          </div>
        )}

        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {summary}
        </p>

        {/* Achievements Section */}
        {highlights && highlights.length > 0 && (
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mb-3 transition-colors duration-300 group"
            >
              <Database className="w-4 h-4 mr-2" />
              <span>Key Achievements ({highlights.length})</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 ml-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform duration-200" />
              )}
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    style={{
                      animationDelay: `${idx * 50}ms`,
                      animation: isExpanded ? 'slideInFromLeft 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}