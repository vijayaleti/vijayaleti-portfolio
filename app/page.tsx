import { Suspense } from 'react'
import Section from '../components/Section'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import SkillsCloud from '../components/SkillsCloud'
import Badge from '../components/Badge'
import DataEngineeringStats from '../components/DataEngineeringStats'
import resumeData from '../data/resume.json'
import Image from 'next/image'
import { Database, Cloud, Cpu, BarChart3, Zap, Shield } from 'lucide-react'

// Loading components
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
  </div>
)

export default function HomePage() {
  const { basics, work, projects, skills, education, certificates } = resumeData

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <Section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge variant="primary" size="md">
                      <Database className="w-4 h-4 mr-2" />
                      Data Engineer
                    </Badge>
                    <Badge variant="secondary" size="md">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Available for Opportunities
                    </Badge>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                      Vijay Aleti
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                    Cloud Data Solutions Expert
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {basics.summary.split('.').slice(0, 2).join('.')}. 
                  
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {basics?.summary?
                  basics.summary.split('.').slice(0, 2).join('.') + '.'
                   : ''}
                  Currently pursuing my Master's at Saint Louis University while gaining hands-on experience 
                  as a Data Engineer Intern at Clairvoyant.
                </p>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ETL Pipelines</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Cloud Platforms</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Let's Connect
                  </a>
                  <a
                    href="/Vijay_Aleti_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-medium transition-all duration-300 flex items-center justify-center border border-gray-300 dark:border-gray-600"
                  >
                    <BarChart3 className="w-5 h-5 mr-2" />
                    View Resume
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {basics.profiles.map((profile) => (
                    <a
                      key={profile.network}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <span className="sr-only">{profile.network}</span>
                      <span className="font-medium text-sm">{profile.network}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src={basics.image}
                    alt={basics.name}
                    width={400}
                    height={400}
                    className="mx-auto rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technology Stack Icons */}
      <Section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-8">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-70">
              <div className="flex flex-col items-center space-y-2">
                <Cloud className="w-8 h-8 text-orange-500" />
                <span className="text-sm font-medium">AWS</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Cloud className="w-8 h-8 text-blue-500" />
                <span className="text-sm font-medium">Azure</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Database className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-medium">Spark</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Cpu className="w-8 h-8 text-orange-600" />
                <span className="text-sm font-medium">Databricks</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Database className="w-8 h-8 text-blue-500" />
                <span className="text-sm font-medium">Snowflake</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <BarChart3 className="w-8 h-8 text-green-500" />
                <span className="text-sm font-medium">Python</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me" subtitle="Get to know me better">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  My Data Engineering Journey
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate Data Engineer with over 3 years of hands-on experience building 
                    robust, scalable data solutions across major cloud platforms. Currently pursuing 
                    my Master's in Information Systems at Saint Louis University while working as 
                    a Data Engineer Intern at Clairvoyant.
                  </p>
                  <p>
                    My expertise spans the entire data lifecycle - from ingesting raw data through 
                    building ETL pipelines, to creating analytics platforms that drive business decisions. 
                    I specialize in cloud-native architectures, having worked extensively with AWS, 
                    Azure, and GCP ecosystems.
                  </p>
                  <p>
                    What drives me is solving complex data challenges and turning raw information into 
                    actionable insights. I believe in building not just functional systems, but elegant, 
                    maintainable solutions that scale with business needs.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    Current Focus
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Completing MS in Information Systems (May 2025)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Data Engineer Intern at Clairvoyant
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Building ML-powered analytics platforms
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        Contributing to open-source data tools
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    Quick Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20M+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Records Processed Daily</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">99.9%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Pipeline Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5TB+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Data Migrated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">40%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Avg Performance Gain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Expertise" subtitle="Technologies and tools I work with daily" className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <Suspense fallback={<LoadingSkeleton />}>
            <SkillsCloud skills={skills} />
          </Suspense>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience" subtitle="My journey in data engineering">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              
              <div className="space-y-12">
                {work.map((job, index) => (
                  <Suspense key={index} fallback={<LoadingSkeleton />}>
                    <ExperienceCard
                      {...job}
                      index={index}
                    />
                  </Suspense>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" subtitle="Data engineering solutions I've built" className="bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Suspense key={index} fallback={<LoadingSkeleton />}>
                <ProjectCard
                  {...project}
                  index={index}
                />
              </Suspense>
            ))}
          </div>
        </div>
      </Section>

      {/* Education & Certifications */}
      <Section id="education" title="Education & Certifications" subtitle="Academic background and professional credentials">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  Education
                </h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                              {edu.studyType} in {edu.area}
                            </h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {edu.institution}
                            </p>
                          </div>
                          <Badge variant="secondary" size="sm">
                            {edu.startDate.split('-')[0]} - {edu.endDate.split('-')[0]}
                          </Badge>
                        </div>
                        {edu.score && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            GPA: {edu.score}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.slice(0, 4).map((course) => (
                            <Badge key={course} variant="secondary" size="sm">
                              {course}
                            </Badge>
                          ))}
                          {edu.courses.length > 4 && (
                            <Badge variant="secondary" size="sm">
                              +{edu.courses.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {cert.name}
                        </h4>
                        <Badge variant="primary" size="sm">
                          {cert.date.split('-')[0]}
                        </Badge>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {cert.issuer}
                      </p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                        >
                          Verify Certificate
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Build Something Together" subtitle="I'm always excited to discuss new data engineering opportunities" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Whether you're looking to build robust data pipelines, migrate to the cloud, 
                  or optimize your analytics infrastructure, I'd love to hear about your challenges 
                  and explore how we can work together.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">{basics.email}</p>
                </div>

                <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">{basics.phone}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${basics.email}?subject=Data Engineering Opportunity&body=Hi Vijay, I'd like to discuss a data engineering opportunity with you.`}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
                <a
                  href={basics.profiles.find(p => p.network === 'LinkedIn')?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg font-medium transition-all duration-300 flex items-center justify-center border border-gray-300 dark:border-gray-600"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}