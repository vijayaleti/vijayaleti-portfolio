# Vijay Aleti - Data Engineer Portfolio

A modern, responsive portfolio website showcasing my journey and expertise as a Data Engineer. Built with Next.js 14, TypeScript, and Tailwind CSS, optimized for performance and SEO.

## 🌟 About Me

I'm a passionate Data Engineer with 3+ years of experience building cloud-native data pipelines, ETL workflows, and analytics platforms across AWS, Azure, and GCP. Currently pursuing my Master's in Information Systems at Saint Louis University while working as a Data Engineer Intern at Clairvoyant.

## 🚀 Live Demo

Visit my portfolio: [https://vijayaleti.dev](https://vijayaleti.dev)

## 📊 Key Achievements

- **20M+** records processed daily across multiple data pipelines
- **99.9%** pipeline uptime with proactive monitoring and alerting
- **40%** average performance improvement through optimization
- **5TB+** of enterprise data migrated from on-premise to cloud
- **$50K+** annual cost savings through efficient query design

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes (Dark/Light mode)

### Data Engineering Skills
- **Programming**: Python, SQL, Scala, R, Bash
- **Big Data**: Apache Spark, Databricks, PySpark
- **ETL/ELT**: Apache Airflow, dbt, Azure Data Factory, AWS Glue
- **Cloud Platforms**: AWS, Azure, GCP
- **Data Warehouses**: Snowflake, Redshift, BigQuery, Synapse
- **Streaming**: Apache Kafka, Apache Flink, Kinesis
- **Monitoring**: Grafana, Prometheus, CloudWatch

## 📁 Project Structure

```
vijayaleti-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO optimization
│   ├── page.tsx            # Homepage with data engineering focus
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation with contact links
│   ├── Footer.tsx          # Footer with specializations
│   ├── ExperienceCard.tsx  # Work experience with metrics
│   ├── ProjectCard.tsx     # Data engineering projects
│   ├── SkillsCloud.tsx     # Interactive skills visualization
│   ├── DataEngineeringStats.tsx # Key metrics display
│   ├── Badge.tsx           # Reusable badge component
│   └── Section.tsx         # Layout wrapper component
├── data/
│   └── resume.json         # Structured resume data
├── public/
│   ├── avatar.svg          # Profile image
│   └── Vijay_Aleti_Resume.pdf # Resume download
└── styles/
    └── globals.css         # Additional global styles
```

## 🎯 Features

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### ⚡ **Performance Optimized**
- Lighthouse score: 95+ across all metrics
- Image optimization and lazy loading
- Automatic code splitting

### 🔍 **SEO & Analytics**
- Structured data (JSON-LD)
- Open Graph and Twitter Card meta tags
- Google Analytics integration ready

### 🎨 **Modern UI/UX**
- Clean, minimalist design
- Smooth animations and transitions
- Dark/light theme support
- Interactive components

### 📊 **Data Engineering Focus**
- Specialized components for technical skills
- Project showcases with metrics
- Achievement highlights with quantified results

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vijayaleti/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🔧 Customization

### Update Personal Information
Edit `data/resume.json` with your information:

```json
{
  "basics": {
    "name": "Your Name",
    "email": "your.email@example.com",
    "phone": "+1 (XXX) XXX-XXXX",
    // ... more fields
  }
}
```

### Customize Styling
- Colors: `tailwind.config.mjs`
- Components: Individual `.tsx` files
- Global styles: `styles/globals.css`

### Add New Sections
1. Create component in `components/`
2. Import and use in `app/page.tsx`
3. Add to navigation in `components/Header.tsx`

## 📈 Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking
npm run format       # Format with Prettier

# Analysis
npm run analyze      # Bundle size analysis
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Supports Next.js static export
- **AWS Amplify**: Full-stack deployment
- **Railway/Render**: Container-based deployment

## 📞 Contact

- **Email**: aletivijay59@gmail.com
- **Phone**: +1 (314) 537-7952
- **LinkedIn**: [linkedin.com/in/vijay-aleti](https://linkedin.com/in/vijay-aleti)
- **GitHub**: [github.com/vijayaleti](https://github.com/vijayaleti)
- **Location**: St. Louis, Missouri

## 🎓 Education

- **MS Information Systems** - Saint Louis University (2023-2025)
- **BTech Mining Engineering** - JNTU Hyderabad (2016-2019)

## 📜 Certifications

- Azure Fundamentals (AZ-900) - Microsoft
- Security, Compliance, and Identity Fundamentals (SC-900) - Microsoft
- Vault Associate - HashiCorp
- IBM Data Engineering Professional Certificate - Coursera
- Data Engineering with Databricks - DataCamp

## 🤝 Contributing

If you find any issues or have suggestions for improvements, please feel free to:

1. Open an issue
2. Submit a pull request
3. Contact me directly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design inspiration**: Modern portfolio trends and data visualization principles
- **Technology stack**: Next.js team for the amazing framework
- **Icons**: Lucide React for beautiful, consistent icons
- **Styling**: Tailwind CSS for utility-first styling

---

**Built with ❤️ by Vijay Aleti**

*Transforming raw data into actionable insights, one pipeline at a time.*