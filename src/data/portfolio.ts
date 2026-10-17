/**
 * All site content lives here. Edit this file to update the portfolio.
 *
 * Source: Resume_Data_Engineer.pdf (primary) and Mohammad_Rabby_Chosun_University_CV.pdf
 * (computer-vision skills, coursework and languages). Nothing below is invented.
 */
import type {
  Achievement,
  Certification,
  EducationItem,
  ExperienceItem,
  FocusArea,
  Highlight,
  NavItem,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
  SpokenLanguage,
} from "@/types/portfolio";

export const profile: Profile = {
  name: "Mohammad Rabby",
  firstName: "Mohammad",
  lastName: "Rabby",
  title: "AI Engineer & Data Engineer",
  location: "Dhaka, Bangladesh",
  email: "mdrabbyu70@gmail.com",
  phone: { display: "+880 1888-586784", tel: "+8801888586784" },
  headline: {
    lead: "I turn real business problems into",
    emphasis: "production-ready AI and data systems.",
  },
  intro:
    "I build LLM-powered workflows with the Claude and OpenAI APIs, automate data pipelines with Python and SQL, and ship end-to-end solutions backed by proper testing.",
  metaDescription:
    "Mohammad Rabby is an AI and Data Engineer in Dhaka, Bangladesh, building LLM-powered workflows, automated data pipelines, and tested end-to-end systems with Python, SQL, and the Claude and OpenAI APIs.",
  photo: {
    // To change your photo: replace public/images/profile.png (any size or
    // aspect ratio works), or point `src` at a different file in /public.
    src: "/images/profile.png",
    alt: "Portrait of Mohammad Rabby in a dark suit and tie",
    objectPosition: "50% 30%",
  },
  resume: {
    // To change your résumé: replace public/resume/Mohammad_Rabby_Resume.pdf.
    href: "/resume/Mohammad_Rabby_Resume.pdf",
    fileName: "Mohammad_Rabby_Resume.pdf",
  },
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/rabbyece10",
    handle: "rabbyece10",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-rabby-6801aa1ba/",
    handle: "mohammad-rabby",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/rabbyeceku/",
    handle: "rabbyeceku",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/mdrabbyu70",
    handle: "mdrabbyu70",
  },
];

export const highlights: Highlight[] = [
  { value: "500+", label: "news sources monitored 24/7 across 48 countries" },
  { value: "204", label: "test cases in one production pytest suite, 100% passing" },
  { value: "10+", label: "languages handled by a multilingual NLP detection engine" },
  { value: "3×", label: "Best Employee of the Data Team within 8 months" },
];

export const about = {
  paragraphs: [
    "I’m an AI and Data Engineer based in Dhaka, currently working as a Data Analyst at Data Insight LLC. My work sits where data engineering meets applied AI: I build LLM-powered workflows with the Claude and OpenAI APIs, automate data pipelines with Python and SQL, and turn the results into dashboards and systems that teams rely on.",
    "I work comfortably across the stack — from ETL and Power BI dashboards to browser automation, AI agents, and real-time object detection on edge hardware. What ties it together is how I ship: I take AI-generated code seriously enough to review, debug, and validate it before it goes out, and my production projects carry real test suites.",
    "My B.Sc. in Electronics & Communication Engineering from Khulna University, with coursework in machine learning, artificial intelligence, and image processing, gives me a foundation that spans software and embedded hardware.",
  ],
  focusAreas: [
    {
      title: "LLM applications & agents",
      description:
        "Claude and OpenAI APIs, prompt engineering, retrieval-augmented generation, AI agents, and workflow automation.",
    },
    {
      title: "Data pipelines & analytics",
      description:
        "ETL in Python and SQL, Apache Airflow, and decision-ready dashboards in Power BI, Tableau, and Excel.",
    },
    {
      title: "Tested, reliable delivery",
      description:
        "Pytest, Playwright, REST API testing, and CI/CD — with AI-generated code reviewed, debugged, and validated before it ships.",
    },
  ] satisfies FocusArea[],
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Analyst",
    organization: "Data Insight LLC.",
    location: "Dhaka, Bangladesh",
    start: "Oct 2025",
    end: "Present",
    highlights: [
      "Build and automate dashboards, reports, and data workflows in Python, SQL, Excel, and Power BI.",
      "Manage end-to-end AI and automation projects.",
      "Develop and evaluate machine learning models, including YOLO-based computer vision for object detection and real-time visual inference.",
      "Validate large datasets for accuracy and collaborate cross-functionally to deliver decision-ready insights.",
    ],
    tools: ["Python", "SQL", "Power BI", "Excel", "YOLO"],
  },
  {
    role: "Data Analyst Intern",
    organization: "CodeAlpha Technologies",
    location: "Lucknow, India (Remote)",
    start: "Mar 2025",
    end: "Aug 2025",
    highlights: [
      "Wrote and optimized complex SQL queries for data extraction, integration, and validation across large relational datasets.",
      "Cleaned, validated, and analyzed large datasets to generate actionable insights that supported business decisions.",
      "Automated recurring reporting and built interactive Power BI and Excel dashboards, reducing manual report-preparation time.",
    ],
    tools: ["SQL", "Power BI", "Excel"],
  },
];

export const projects: Project[] = [
  {
    title: "AI-Powered B2B Lead Generation Platform",
    year: "2026",
    summary:
      "A live platform that reads company websites, drafts outreach campaigns, and turns plain-English audience descriptions into structured filters.",
    highlights: [
      "LLM website-analysis pipeline that extracts company offerings to auto-fill onboarding, with a heuristic fallback and input capping to cut token spend.",
      "AI Campaign Builder that generates cold-outreach sequences as drafts only, with a validator that blocks unfilled placeholders from reaching real recipients.",
      "Natural-language audience builder that converts free text into JSON filters, validated with 87 test suites and mutation testing.",
    ],
    stack: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "Next.js", "Playwright"],
    link: { kind: "live", href: "https://youleadme.com/" },
  },
  {
    title: "Real-Time Sports News Intelligence System",
    year: "2026",
    summary:
      "A 24/7 monitoring system that scrapes multilingual news, scores risk, and sends concise English alerts to Telegram.",
    highlights: [
      "Asynchronous scraping pipeline with 50 concurrent workers watching 500+ sources in 48 countries, using Playwright and rotating proxies for JS-heavy and bot-protected sites.",
      "Multilingual detection engine (10+ languages, stemming, fuzzy matching) feeding a weighted 0–10 risk score with an ML confidence filter, matched to live fixtures via REST APIs.",
      "Claude API summaries with structured prompts; SQLite deduplication, automatic source recovery, and a 204-case pytest suite (100% passing).",
    ],
    stack: ["Python", "asyncio", "Playwright", "Claude API", "SQLite", "Telegram"],
    link: { kind: "github", href: "https://github.com/rabbyece10/smart-scout-bot" },
  },
  {
    title: "AI Voice Booking Agent for Courier Services",
    year: "2026",
    summary:
      "A 24/7 AI phone agent that quotes and books courier jobs for a UK courier company, handling live customer calls.",
    highlights: [
      "Real-time quotes from Google Maps mileage and tiered pricing, using FastAPI and Vapi (GPT-4.1).",
      "Async webhooks create Cal.com bookings, Google Sheets records, Twilio SMS, and Resend email confirmations concurrently.",
      "Deployed on Render with fault-tolerant fallbacks, automated failure alerts, and a 129-case pytest suite.",
    ],
    stack: ["Python", "FastAPI", "Vapi", "Twilio", "Google Maps API", "Render"],
    link: {
      kind: "github",
      href: "https://github.com/rabbyece10/SS-Courier-AI-Voice-Booking-Line",
    },
  },
  {
    title: "Edge-AI Blind Assist System",
    year: "2026",
    summary:
      "Real-time object detection with audio feedback for visually impaired users, running entirely on a Jetson Nano.",
    highlights: [
      "YOLO and OpenCV computer-vision pipeline delivering real-time detection with spoken feedback.",
      "EasyOCR scene-text recognition and bi-directional voice APIs for interactive, multilingual audio.",
      "GPU-accelerated Python pipeline optimized for on-device inference without cloud dependency.",
    ],
    stack: ["Python", "YOLO", "OpenCV", "EasyOCR", "Jetson Nano"],
    link: {
      kind: "github",
      href: "https://github.com/rabbyece10/Edge-AI-Blind-Assist-System-Computer-Vision-",
    },
  },
  {
    title: "Stock Market Forecasting with Time-Series Data",
    year: "2024",
    summary:
      "A forecasting pipeline comparing deep-learning and statistical models for stock price movements.",
    highlights: [
      "LSTM and ARIMA models trained on features engineered from candlestick data.",
      "Models validated and benchmarked with RMSE and MAE to compare accuracy trade-offs.",
    ],
    stack: ["Python", "Scikit-learn", "LSTM", "ARIMA"],
    link: {
      kind: "github",
      href: "https://github.com/rabbyece10/Stock-Market_Analysis_Prophet-and-Arima-Model",
    },
  },
  {
    title: "E-Commerce Customer Order & Revenue Dashboard",
    year: "2023",
    summary:
      "An ETL pipeline and Power BI dashboards that surface high-value customers, revenue leakage, and repeat-purchase trends.",
    highlights: [
      "Python and SQL ETL to clean, aggregate, and analyze customer transactions and order history.",
      "Interactive dashboards covering RFM segmentation, sales KPIs, and customer retention.",
    ],
    stack: ["Python", "SQL", "Power BI", "Excel", "Pandas"],
    link: {
      kind: "github",
      href: "https://github.com/rabbyece10/E-Commerce-Customer-Order-Revenue-Dashboard",
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & LLM Engineering",
    skills: [
      "Claude API",
      "OpenAI API",
      "Prompt Engineering",
      "RAG",
      "LLM Applications",
      "AI Agents",
      "AI Workflow Automation",
      "NLP",
    ],
  },
  {
    category: "Data Engineering & Databases",
    skills: [
      "ETL Pipelines",
      "Apache Airflow",
      "Docker",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "FastAPI",
      "Web Scraping",
      "asyncio",
    ],
  },
  {
    category: "Machine Learning & Computer Vision",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "YOLO",
      "OpenCV",
      "EasyOCR",
      "CNNs",
      "LSTM",
      "ARIMA",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "QA & Test Automation",
    skills: [
      "Pytest",
      "Playwright",
      "Selenium",
      "REST API Testing",
      "Test Case Design",
      "Regression & Functional Testing",
      "Defect Tracking",
    ],
  },
  {
    category: "Languages",
    skills: ["Python", "SQL", "R", "PySpark", "C", "JavaScript (basic)", "HTML", "CSS"],
  },
  {
    category: "AI-Assisted Development",
    skills: [
      "Claude Code",
      "GitHub Copilot",
      "AI-Assisted Test Generation",
      "AI-Driven Root-Cause Analysis",
    ],
  },
  {
    category: "BI, Tools & Platforms",
    skills: [
      "Power BI",
      "Tableau",
      "Excel",
      "Git & GitHub",
      "CI/CD",
      "Azure",
      "Linux",
      "Jupyter",
      "VS Code",
      "Agile",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Khulna University",
    degree: "B.Sc. (Engg) in Electronics & Communication Engineering",
    location: "Khulna, Bangladesh",
    start: "Jan 2020",
    end: "Feb 2025",
    gpa: "3.28",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Image Processing",
      "Data Structures",
      "Python",
      "Java",
      "C",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Agile Project Management",
    issuer: "Google",
    platform: "Coursera",
    date: "Aug 2025",
    year: "2025",
    file: "/certificates/agile-project-management-google.pdf",
    verifyUrl: "https://coursera.org/verify/04K8HEDN6VKB",
  },
  {
    name: "Databases & SQL for Data Science with Python",
    issuer: "IBM",
    platform: "Coursera",
    date: "Jul 2025",
    year: "2025",
    file: "/certificates/databases-sql-python-ibm.pdf",
    verifyUrl: "https://coursera.org/verify/834TY10DYNIA",
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    platform: "Coursera",
    date: "Jul 2025",
    year: "2025",
    file: "/certificates/prompt-engineering-ibm.pdf",
    verifyUrl: "https://coursera.org/verify/HP8ZOVYS92EM",
  },
  {
    name: "Introducing Generative AI with AWS",
    issuer: "AWS",
    platform: "Udacity",
    date: "Jun 2025",
    year: "2025",
    file: "/certificates/generative-ai-aws-udacity.pdf",
    verifyUrl: "https://www.udacity.com/certificate/e/4d5a9b40-3e42-11f0-a372-1b729bf06392",
  },
  {
    name: "SQL for Data Science",
    issuer: "UC Davis",
    platform: "Coursera",
    date: "May 2025",
    year: "2025",
    file: "/certificates/sql-for-data-science-uc-davis.pdf",
    verifyUrl: "https://coursera.org/verify/T1SQ3PU0EGXB",
  },
  {
    name: "30-Days Power BI Micro Course",
    issuer: "Skill Course",
    platform: "E-learning",
    date: "Feb 2025",
    year: "2025",
    file: "/certificates/power-bi-micro-course.pdf",
  },
  {
    name: "Primary Aspects of Data Analysis (Excel & Power BI)",
    issuer: "Data Solution 360",
    platform: "Workshop",
    date: "Sep 2024",
    year: "2024",
    file: "/certificates/data-analysis-excel-power-bi-data-solution-360.pdf",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    platform: "Coursera",
    date: "Sep 2024",
    year: "2024",
    file: "/certificates/google-ai-essentials.pdf",
    verifyUrl: "https://coursera.org/verify/AICI5Y81IUBJ",
  },
  { name: "Machine Learning Specialization", issuer: "IBM", date: "2024", year: "2024" },
  { name: "Complete Data Analyst Bootcamp", date: "2024", year: "2024" },
  {
    name: "Machine Learning Introduction for Everyone",
    issuer: "IBM",
    platform: "Coursera",
    date: "Apr 2023",
    year: "2023",
    file: "/certificates/machine-learning-intro-ibm.pdf",
    verifyUrl: "https://coursera.org/verify/M7WQDXN6FKZY",
  },
  {
    name: "Python Data Structures",
    issuer: "University of Michigan",
    platform: "Coursera",
    date: "Mar 2023",
    year: "2023",
    file: "/certificates/python-data-structures-umich.pdf",
    verifyUrl: "https://coursera.org/verify/6AL3HRVLT3ZM",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Best Employee of the Data Team — three times",
    detail:
      "Recognized three times within eight months at Betopia Group for consistent, high-impact delivery.",
  },
  {
    title: "Regular algorithmic problem solving",
    detail: "Ongoing data structures, algorithms, and SQL practice on LeetCode and HackerRank.",
  },
  {
    title: "Public, tested project portfolio",
    detail:
      "End-to-end automation, AI, and analytics projects on GitHub with documented code and test suites.",
  },
];

export const spokenLanguages: SpokenLanguage[] = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];
