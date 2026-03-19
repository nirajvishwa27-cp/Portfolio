import profileImage from "../assets/profile/Niraj.png";
import ibmProjectManagementImage from "../assets/image.png";
import ibmCloudImage from "../assets/image copy.png";
import hackcryptImage from "../assets/image copy 2.png";
import techathonImage from "../assets/image copy 3.png";
import edunetAiImage from "../assets/image copy 4.png";
import gfgDsaImage from "../assets/image copy 5.png";
import error404Image from "../assets/Niraj _DCC.jpeg";

export const personal = {
  name: "Niraj Vishwakarma",
  title: "Full Stack Developer | AI & Machine Learning Enthusiast",
  tagline:
    "I build polished full-stack products and intelligent systems that feel fast, thoughtful, and dependable.",
  bio: "I'm a Full Stack Developer specializing in modern JavaScript ecosystems like React, Next.js, Node.js, and NestJS. Currently pursuing a BE in Information Technology, I focus on building production-grade applications with clean architecture and strong backend systems. I enjoy transforming complex problems into efficient, scalable solutions and continuously explore AI, machine learning, and system design to deepen my craft.",
  objective:
    "Seeking opportunities to work on impactful products where I can contribute strong full-stack engineering, build elegant user experiences, and grow alongside high-performing teams.",
  email: "nirajvishwakarma27@gmail.com",
  phone: "",
  location: "Mumbai, India",
  github: "https://github.com/nirajvishwa27-cp",
  linkedin: "https://linkedin.com/in/nirajvishwakarma27",
  twitter: "https://x.com/niraj_Codes",
  resumeLink:
    "https://drive.google.com/file/d/1dviTs4bph01lc3qR841TOM0AY10YH4I-/view?usp=sharing",
  avatar: profileImage,
};

export const education = [
  {
    degree: "B.E. in Information Technology",
    school: "Shree L.R. Tiwari College of Engineering, Mumbai",
    year: "2023 - 2027",
    gpa: "Focused on full-stack systems, DSA, and AI",
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", level: 85, icon: "coffee" },
      { name: "JavaScript", level: 92, icon: "file-code" },
      { name: "Python", level: 80, icon: "terminal-square" },
      { name: "C++", level: 74, icon: "cpu" },
      { name: "C", level: 72, icon: "binary" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88, icon: "server" },
      { name: "Express.js", level: 85, icon: "zap" },
      { name: "REST APIs", level: 91, icon: "plug-zap" },
      { name: "WebSockets", level: 80, icon: "repeat" },
      { name: "JWT", level: 84, icon: "shield-check" },
      { name: "Prisma", level: 79, icon: "database-zap" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 91, icon: "atom" },
      { name: "Tailwind CSS", level: 89, icon: "palette" },
      { name: "TanStack Query", level: 81, icon: "chart-column-big" },
      { name: "Zustand", level: 77, icon: "brain-circuit" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: 83, icon: "database" },
      { name: "MongoDB", level: 85, icon: "leaf" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Docker", level: 76, icon: "container" },
      { name: "Git", level: 91, icon: "git-branch" },
      { name: "GitHub", level: 91, icon: "github" },
      { name: "Postman", level: 86, icon: "send" },
    ],
  },
];

export const projects = [
  {
    name: "Daily-DSA",
    description:
      "A LeetCode-style coding platform with authentication, submissions, and user analytics. Integrated Judge0 for multi-language code execution and improved API performance by 30%.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "Judge0", "Docker"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    name: "Track-U",
    description:
      "Academic workflow system for secure form creation, distribution, and tracking. Includes role-based access, WebSocket-based notifications, and CSV export.",
    tech: ["Node.js", "PostgreSQL", "JWT", "MongoDB", "WebSockets"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    name: "Streamify",
    description:
      "Real-time social learning platform with chat, friend requests, and multilingual interactions using event-driven APIs and optimized state management.",
    tech: ["React", "Node.js", "Zustand", "TanStack Query", "Streams.io"],
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600&q=80",
    live: "#",
    github: "#",
    featured: false,
  },
];


export const certifications = [
  {
    title: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Feb 26, 2026",
    year: "2026",
    credential: "ILB-DNRVRVRGKDNQPQ9X",
    link: "https://www.ibm.com/skillsbuild/",
    image: ibmProjectManagementImage,
    accent: "from-[#f4c430] via-[#f7df7a] to-[#fff2c2]",
    theme: "gold",
    type: "Professional",
  },
  {
    title: "Cloud Computing Fundamentals (Earn a credential!)",
    issuer: "IBM SkillsBuild",
    date: "Feb 26, 2026",
    year: "2026",
    credential: "PLAN-2EC3A305F2C3",
    link: "https://www.ibm.com/skillsbuild/",
    image: ibmCloudImage,
    accent: "from-[#d5cfcf] via-[#ece7e7] to-[#ffffff]",
    theme: "gold",
    type: "Cloud",
  },
  {
    title: "Green Skills and Artificial Intelligence",
    issuer: "Edunet Foundation x Shell x AICTE",
    date: "Jan 2026",
    year: "2026",
    credential: "S4F25_207669",
    link: "https://edunetfoundation.org/",
    image: edunetAiImage,
    accent: "from-[#7fd11b] via-[#b5e25a] to-[#eff8d4]",
    theme: "emerald",
    type: "Foundation Course",
  },
  {
    title: "HackCrypt 2026 - Cosmic Cipher",
    issuer: "TRCAC DevClub",
    date: "Jan 16-17, 2026",
    year: "2026",
    credential: "National Level Hackathon Participation",
    link: "https://www.linkedin.com/",
    image: hackcryptImage,
    accent: "from-[#d4a54a] via-[#f3d37a] to-[#f9ecd1]",
    theme: "bronze",
    type: "Hackathon",
  },
  {
    title: "GfG 160 - 160 Days of Problem Solving",
    issuer: "GeeksforGeeks x Nation SkillUp",
    date: "2026",
    year: "2026",
    credential: "Course Completion",
    link: "https://www.geeksforgeeks.org/",
    image: gfgDsaImage,
    accent: "from-[#1f8f5f] via-[#39b97a] to-[#d6f5e4]",
    theme: "emerald",
    type: "Competitive Programming",
  },
  {
    title: "Error 404: Beyond the Limit",
    issuer: "Unstop x Jai Hind College",
    date: "Undated Participation",
    year: "Recent",
    credential: "Participation Certificate",
    link: "https://unstop.com/",
    image: error404Image,
    accent: "from-[#2979d4] via-[#78b6ff] to-[#e4f1ff]",
    theme: "blue",
    type: "Hackathon",
  },
  {
    title: "Techathon'25",
    issuer: "Certificate of Participation",
    date: "Dec 18, 2025",
    year: "2025",
    credential: "Active Participation",
    link: "#",
    image: techathonImage,
    accent: "from-[#6e83ff] via-[#b085ff] to-[#f3d7ff]",
    theme: "sky",
    type: "Participation",
  },
];

export const achievements = [
  {
    title: "Built a Strong Certification Portfolio Across AI, Product, and Problem Solving",
    description:
      "Earned certifications from IBM SkillsBuild, Infosys Springboard, GeeksforGeeks, and Edunet, reflecting consistent learning across engineering and AI.",
    type: "Academic",
    year: "2025 - 2026",
    icon: "Award",
  },
  {
    title: "Participated in National-Level Hackathons",
    description:
      "Represented my college in competitive innovation events including HackCrypt 2026 and Error 404: Beyond the Limit.",
    type: "Hackathon",
    year: "2026",
    icon: "Trophy",
  },
  {
    title: "Completed Long-Horizon DSA Practice",
    description:
      "Finished the GeeksforGeeks 160 Days of Problem Solving track to strengthen algorithmic thinking and coding discipline.",
    type: "Competitive Coding",
    year: "2026",
    icon: "Code2",
  },
];
