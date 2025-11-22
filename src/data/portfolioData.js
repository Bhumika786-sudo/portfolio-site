export const portfolioData = {
  basicInfo: {
    name: "Bhumika Verma",
    title: "Full-Stack Web Development Student",
    bio: "Passionate developer currently studying at Red River College Polytechnic, graduating May 2026. Experienced in building web applications with Ruby on Rails, React, and modern web technologies. Skilled in cybersecurity, database management, and creating user-friendly interfaces.",
    email: "bverma2@rrc.ca",
    github: "https://github.com/Bhumika786-sudo/portfolio-site",
    linkedin: "https://www.linkedin.com/in/bhumika-verma-886412346",
    image: "/images/profile.jpg"
  },

  projects: [
    {
      id: 1,
      title: "Northern Lights Outdoor Gear",
      description: "Full-stack e-commerce application built with Ruby on Rails featuring product management, shopping cart, and checkout functionality.",
      image: "https://via.placeholder.com/400x200/667eea/ffffff?text=E-commerce+Site",
      link: "https://github.com/yourusername/northern-lights",
      techList: ["Ruby on Rails", "PostgreSQL", "Bootstrap", "ActiveRecord"]
    },
    {
      id: 2,
      title: "UI Component Library",
      description: "Reusable React component library built with TypeScript, documented with Storybook, and containerized with Docker.",
      image: "https://via.placeholder.com/400x200/764ba2/ffffff?text=Component+Library",
      link: "https://github.com/yourusername/component-library",
      techList: ["React", "TypeScript", "Storybook", "Docker"]
    },
    {
      id: 3,
      title: "Rails CRM Application",
      description: "Customer Relationship Management system with Active Admin integration for managing customer data and interactions.",
      image: "https://via.placeholder.com/400x200/f093fb/ffffff?text=CRM+Application",
      link: "https://github.com/yourusername/crm-app",
      techList: ["Ruby on Rails", "Active Admin", "PostgreSQL"]
    },
    {
      id: 4,
      title: "Penetration Testing Portfolio",
      description: "Comprehensive security assessments of vulnerable systems including Metasploitable2, Kioptrix levels, and DVWA using Kali Linux.",
      image: "https://via.placeholder.com/400x200/4facfe/ffffff?text=Security+Testing",
      link: "#",
      techList: ["Kali Linux", "Metasploit", "OWASP Top 10", "WebGoat"]
    },
    {
      id: 5,
      title: "Python Data Analysis",
      description: "Data analysis projects using Pandas and SQLite for processing and visualizing datasets.",
      image: "https://via.placeholder.com/400x200/00d4aa/ffffff?text=Data+Analysis",
      link: "#",
      techList: ["Python", "Pandas", "SQLite", "Data Visualization"]
    },
    {
      id: 6,
      title: "PHP Blog with Security",
      description: "Secure blog application implementing best practices for preventing common web vulnerabilities.",
      image: "https://via.placeholder.com/400x200/ff6b6b/ffffff?text=Secure+Blog",
      link: "#",
      techList: ["PHP", "MySQL", "Security Best Practices"]
    }
  ],

  skills: {
    description: "Full-stack developer with experience in modern web technologies, cybersecurity, and database management. Skilled in building scalable applications and conducting security assessments.",
    languages: [
      "JavaScript/TypeScript",
      "Ruby",
      "Python",
      "PHP",
      "HTML5/CSS3",
      "SQL",
      "Bash/Shell Scripting"
    ],
    frameworks: [
      "React",
      "Ruby on Rails",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "Tailwind CSS",
      "Active Admin"
    ],
    tools: [
      "Docker",
      "Git/GitHub",
      "VS Code",
      "WSL (Windows Subsystem for Linux)",
      "Storybook",
      "npm/yarn",
      "Nginx",
      "Webpack"
    ],
    security: [
      "Kali Linux",
      "Metasploit Framework",
      "OWASP Top 10",
      "DVWA",
      "WebGoat",
      "Penetration Testing",
      "Vulnerability Assessment"
    ],
    databases: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "ActiveRecord ORM",
      "Database Design",
      "SQL Queries & Optimization"
    ]
  },

  resources: [
    {
      id: 1,
      title: "React Documentation",
      image: "https://via.placeholder.com/80/61dafb/ffffff?text=React",
      summary: "Official React documentation for learning and reference",
      link: "https://react.dev"
    },
    {
      id: 2,
      title: "Ruby on Rails Guides",
      image: "https://via.placeholder.com/80/cc0000/ffffff?text=Rails",
      summary: "Comprehensive guides for Ruby on Rails development",
      link: "https://guides.rubyonrails.org"
    },
    {
      id: 3,
      title: "MDN Web Docs",
      image: "https://via.placeholder.com/80/000000/ffffff?text=MDN",
      summary: "Essential web development documentation and tutorials",
      link: "https://developer.mozilla.org"
    },
    {
      id: 4,
      title: "Docker Documentation",
      image: "https://via.placeholder.com/80/2496ed/ffffff?text=Docker",
      summary: "Learn containerization and Docker best practices",
      link: "https://docs.docker.com"
    },
    {
      id: 5,
      title: "OWASP",
      image: "https://via.placeholder.com/80/000000/ffffff?text=OWASP",
      summary: "Web application security resources and guidelines",
      link: "https://owasp.org"
    },
    {
      id: 6,
      title: "GitHub",
      image: "https://via.placeholder.com/80/181717/ffffff?text=GitHub",
      summary: "Version control and collaborative development platform",
      link: "https://github.com"
    }
  ],

  developerSetup: {
    vscode: {
      extensions: [
        "ES7+ React/Redux/React-Native snippets",
        "Prettier - Code formatter",
        "ESLint",
        "Ruby",
        "Docker",
        "GitLens",
        "Live Server",
        "Auto Rename Tag"
      ],
      settings: "Dark+ Theme, Auto Save enabled, Format on Save"
    },
    terminal: {
      setup: "Windows Subsystem for Linux (WSL) with Ubuntu",
      shell: "Bash"
    },
    font: {
      name: "Cascadia Code",
      features: "Ligatures enabled, Font size 14"
    }
  }
};