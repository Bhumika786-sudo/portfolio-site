# Portfolio Website - Bhumika Verma

**Student:** Bhumika Verma  
**Course:** Full-Stack Web Development  
**Institution:** Red River College Polytechnic  
**Assignment:** Coding Assignment 14  
**Graduation:** May 2026

---

##  How to Run

### Prerequisites
- Docker Desktop installed and running

### Commands

**1. Clone Repository**
```bash
git clone https://github.com/Bhumika786-sudo/portfolio-site.git
cd portfolio-site
```

**2. Build Docker Image**
```bash
docker build -t verma_bhumika_coding_assignment14 .
```

**3. Run Container**
```bash
docker run -d -p 5575:5575 --name verma_bhumika_coding_assignment14 verma_bhumika_coding_assignment14
```

**4. Access Portfolio**
```
http://localhost:5575
```

### Stop Container
```bash
docker stop verma_bhumika_coding_assignment14
docker rm verma_bhumika_coding_assignment14
```

---

##  Portfolio Sections

### 1. Basic Information
- Name, title, bio, photo
- Contact links (Email, GitHub, LinkedIn)

### 2. Work/Projects (6 Projects)
- Northern Lights Outdoor Gear (Ruby on Rails E-commerce)
- UI Component Library (React/TypeScript/Storybook)
- Rails CRM Application (Active Admin)
- Penetration Testing Portfolio (Kali Linux/Metasploit)
- Python Data Analysis (Pandas/SQLite)
- PHP Secure Blog

### 3. Skills (5 Categories)
- **Languages:** JavaScript, TypeScript, Ruby, Python, PHP, HTML/CSS, SQL
- **Frameworks:** React, Ruby on Rails, Node.js, Bootstrap
- **Tools:** Docker, Git, VS Code, Storybook, Nginx
- **Security:** Kali Linux, Metasploit, OWASP Top 10
- **Databases:** PostgreSQL, MySQL, SQLite

### 4. Resources
- React Documentation
- Ruby on Rails Guides
- MDN Web Docs
- Docker Documentation
- OWASP
- GitHub

### 5. Developer Setup
- VS Code extensions (Prettier, ESLint, GitLens)
- WSL with Ubuntu
- Cascadia Code font

---

##  Technical Details

### Docker Configuration
- **Container Name:** verma_bhumika_coding_assignment14
- **Port:** 5575
- **Base Image:** nginx:alpine
- **Server:** Nginx

### Key Files

**Dockerfile**
```dockerfile
FROM nginx:alpine
COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5575
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf**
- Configures server to listen on port 5575
- Serves static files from production build
- Handles React Router client-side routing

---

##  Project Structure

```
portfolio-site/
build/              # Production build
 public/
 images/         # Profile photo
 src/
 components/     # React components (Header, About, Projects, Skills, etc.)
 data/           # Portfolio content (portfolioData.js)
 App.js
 Dockerfile
  nginx.conf
   README.md
```

---

##  Assignment Requirements

-  Container name: verma_bhumika_coding_assignment14
- Runs on localhost:5575
- Production build with Nginx
-  All required sections (Basic Info, Work, Skills, Resources, Setup)
-  Dockerfile and nginx.conf configured
-  Professional design and styling
-  Complete documentation

---

##  Troubleshooting

**Port already in use:**
```bash
docker stop verma_bhumika_coding_assignment14
docker rm verma_bhumika_coding_assignment14
```

**Container won't start:**
```bash
docker logs verma_bhumika_coding_assignment14
```

**Need to rebuild:**
```bash
docker stop verma_bhumika_coding_assignment14
docker rm verma_bhumika_coding_assignment14
docker rmi verma_bhumika_coding_assignment14
docker build -t verma_bhumika_coding_assignment14 .
docker run -d -p 5575:5575 --name verma_bhumika_coding_assignment14 verma_bhumika_coding_assignment14
```

---

##  Links

- **GitHub:** https://github.com/Bhumika786-sudo/portfolio-site
- **Portfolio:** http://localhost:5575

---

## 👤 Contact

**Bhumika Verma**  
 bverma2@rrc.ca  
 [@Bhumika786-sudo](https://github.com/Bhumika786-sudo)  
 [LinkedIn](https://www.linkedin.com/in/bhumika-verma-886412346/)

---

