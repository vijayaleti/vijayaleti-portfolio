import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vijay Aleti - Data Engineer | Cloud Data Solutions Expert',
  description: 'Data Engineer with 3+ years of experience building cloud-native data pipelines, ETL workflows, and analytics platforms across AWS, Azure, and GCP. Specialized in Python, Spark, Databricks, and modern data stack.',
  keywords: 'vijay aleti, data engineer, aws, azure, python, spark, databricks, etl, data pipeline, snowflake, redshift, bigquery, cloud computing, data analytics, st louis',
  authors: [{ name: 'Vijay Aleti' }],
  creator: 'Vijay Aleti',
  publisher: 'Vijay Aleti',
  openGraph: {
    title: 'Vijay Aleti - Data Engineer | Cloud Data Solutions Expert',
    description: 'Experienced Data Engineer specializing in cloud-native data pipelines, ETL workflows, and analytics platforms across AWS, Azure, and GCP.',
    url: 'https://vijayaleti.dev',
    siteName: 'Vijay Aleti Portfolio',
    images: [
      {
        url: '/avatar.svg',
        width: 1200,
        height: 630,
        alt: 'Vijay Aleti - Data Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijay Aleti - Data Engineer',
    description: 'Data Engineer with expertise in AWS, Azure, Python, Spark, and modern data stack',
    images: ['/avatar.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://vijayaleti.dev" />
        <meta name="geo.region" content="US-MO" />
        <meta name="geo.placename" content="St. Louis" />
        <meta name="geo.position" content="38.627003;-90.199404" />
        <meta name="ICBM" content="38.627003, -90.199404" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vijay Aleti",
              "jobTitle": "Data Engineer",
              "description": "Data Engineer with 3+ years of experience building cloud-native data pipelines, ETL workflows, and analytics platforms across AWS, Azure, and GCP.",
              "url": "https://vijayaleti.dev",
              "email": "aletivijay59@gmail.com",
              "telephone": "+1-314-537-7952",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "St. Louis",
                "addressRegion": "MO",
                "addressCountry": "US"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Saint Louis University"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "Jawaharlal Nehru Technological University"
                }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Clairvoyant"
              },
              "knowsAbout": [
                "Data Engineering",
                "AWS",
                "Azure",
                "Python",
                "Apache Spark",
                "Databricks",
                "ETL",
                "Data Pipelines",
                "Cloud Computing"
              ],
              "sameAs": [
                "https://linkedin.com/in/vijay-aleti",
                "https://github.com/vijayaleti"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  )
}