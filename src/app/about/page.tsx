import { Container, Heading, Paragraph, Highlight } from "@/components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Container className="py-8">
        <div className="max-w-4xl">
        <Heading className="text-4xl md:text-5xl font-bold mb-6">
          About <Highlight variant="primary">Hugo Tonioni</Highlight>
        </Heading>
        
        <Heading as="h2" className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full-Stack Software Engineer
        </Heading>

        <div className="space-y-6 text-lg leading-relaxed">
          <Paragraph>
            I'm a <Highlight variant="secondary">Full-Stack Software Engineer</Highlight> specializing in
            TypeScript-based web applications and scalable SaaS solutions. Currently working as
            a <Highlight>Software Engineer at Automate Army</Highlight>, building custom full-stack systems
            with Next.js, React, Node.js, and modern cloud architecture with AI integrations.
          </Paragraph>

          <Paragraph>
            My expertise spans from modern web applications to enterprise Salesforce solutions. At Automate Army,
            I architect scalable SaaS applications using cutting-edge technologies like Next.js, TypeScript, Supabase
            (PostgreSQL), Google Cloud Platform, and Vercel. I implement <Highlight variant="accent">AI-driven workflows</Highlight> using
            LLM APIs and prompt engineering to create reliable production-ready automation.
          </Paragraph>

          <Paragraph>
            Previously at <Highlight>Embraer</Highlight>, I delivered enterprise automation solutions and web applications that streamlined business
            processes and captured hundreds of leads. I developed full-stack features using <Highlight variant="accent">JavaScript, TypeScript, React, and Node.js</Highlight>,
            built RESTful APIs, created automation workflows, and worked extensively with databases and enterprise platforms to solve complex business challenges.
          </Paragraph>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
            <Paragraph className="text-blue-800 dark:text-blue-200 font-medium">
              💡 "My goal is to bridge the gap between creative design and robust functionality, 
              creating digital experiences that make a real impact."
            </Paragraph>
          </div>
        </div>

        {/* International Experience */}
        <div className="mt-12">
          <Heading as="h3" className="text-2xl font-semibold mb-6">
            International Experience & Education
          </Heading>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg space-y-4">
            <Paragraph>
              <strong>🇺🇸 Cultural Exchange Program</strong> - Completed a one-year program in Sarasota, Florida (2018-2019), 
              focusing on language improvement and cultural immersion. During this time, I volunteered on automation projects 
              and managed inventory systems using Excel and Zendesk.
            </Paragraph>
            <Paragraph className="mb-4">
              <strong>🎓 Bachelor of Information Technology</strong> - Estácio de Sá (Expected graduation: 12/2027) 
              with focus on modern software development practices, algorithms, and system design.
            </Paragraph>
            <Paragraph>
              My academic journey complements my practical experience, providing a solid foundation 
              in computer science fundamentals while I build real-world applications.
            </Paragraph>
          </div>
        </div>

        {/* Full-Stack Tech Stack */}
        <div className="mt-12">
          <Heading as="h3" className="text-2xl font-semibold mb-6">
            Tech Stack & Skills
          </Heading>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 text-lg">Frontend Development</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "JavaScript", "React", "TypeScript", "HTML5",
                  "CSS3", "Next.js", "Tailwind CSS", "Responsive Design"
                ].map((tech) => (
                  <div key={tech} className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center border border-green-200 dark:border-green-800">
                    <span className="font-medium text-green-800 dark:text-green-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 text-lg">Backend & Databases</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Node.js", "Nest.js", "Python", "PostgreSQL",
                  "REST APIs", "Supabase", "Database Design", "Server Architecture"
                ].map((tech) => (
                  <div key={tech} className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center border border-blue-200 dark:border-blue-800">
                    <span className="font-medium text-blue-800 dark:text-blue-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 text-lg">Cloud & AI</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Google Cloud Platform", "Vercel", "CI/CD", "AI Integration",
                  "LLM APIs", "Prompt Engineering", "MCP Integrations", "Automation"
                ].map((tech) => (
                  <div key={tech} className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg text-center border border-cyan-200 dark:border-cyan-800">
                    <span className="font-medium text-cyan-800 dark:text-cyan-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3 text-lg">Salesforce Platform</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "LWC", "Apex", "Visualforce Pages", "SLDS",
                  "Experience Cloud", "Salesforce Admin", "CRM Analytics", "Automation Flows"
                ].map((tech) => (
                  <div key={tech} className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg text-center border border-orange-200 dark:border-orange-800">
                    <span className="font-medium text-orange-800 dark:text-orange-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3 text-lg">DevOps & Tools</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Git", "GitHub", "Bitbucket", "Jira", 
                  "Confluence", "Azure DevOps", "DBeaver", "Zendesk"
                ].map((tech) => (
                  <div key={tech} className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center border border-purple-200 dark:border-purple-800">
                    <span className="font-medium text-purple-800 dark:text-purple-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-3 text-lg">Languages</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Portuguese (Native)", "English (Fluent)", "Spanish (Basic)"
                ].map((lang) => (
                  <div key={lang} className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg text-center border border-pink-200 dark:border-pink-800">
                    <span className="font-medium text-pink-800 dark:text-pink-200">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mt-12">
          <Heading as="h3" className="text-2xl font-semibold mb-6">
            Professional Highlights
          </Heading>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">🚀 Automate Army (Nov 2025 - Present)</h4>
              <Paragraph className="text-purple-700 dark:text-purple-300">
                Software Engineer building scalable SaaS solutions with Next.js, React, Node.js, and AI integrations.
                Focused on delivering custom full-stack systems with modern cloud architecture (GCP, Vercel, Supabase).
              </Paragraph>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">🏢 Embraer (Jan 2024 - Nov 2025)</h4>
              <Paragraph className="text-blue-700 dark:text-blue-300">
                Software Developer building enterprise web applications and automation solutions. Developed full-stack features with
                JavaScript, TypeScript, React, and Node.js. Created automated workflows and APIs that captured 200+ leads.
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Current Learning Focus */}
        <div className="mt-12">
          <Heading as="h3" className="text-2xl font-semibold mb-6">
            Current Learning Focus
          </Heading>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">🎯 Backend Architecture</h4>
              <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                <li>• Node.js patterns</li>
                <li>• Microservices architecture</li>
                <li>• Database design & optimization</li>
                <li>• API security & authentication</li>
                <li>• Cloud deployment strategies</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-800">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">🚀 Modern Full-Stack Patterns</h4>
              <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                <li>• Advanced React patterns & state management</li>
                <li>• Full-stack testing strategies</li>
                <li>• Performance optimization across the stack</li>
                <li>• Modern deployment & CI/CD pipelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 p-8 rounded-lg">
          <Heading as="h3" className="text-2xl font-semibold mb-4">
            Why I Love Development
          </Heading>
          <Paragraph className="text-lg">
            There's something magical about turning ideas into interactive experiences. Every line of code 
            is a step toward solving real problems and making technology more accessible. I'm driven by 
            the endless possibilities in web development and the constant evolution of the field.
          </Paragraph>
          <Paragraph className="text-lg mt-4">
            When I'm not coding, I'm probably reading about new frameworks, watching tech talks, or 
            planning my next project. The journey from frontend to full-stack is exciting, and I'm 
            enjoying every step of it!
          </Paragraph>
        </div>
      </div>
    </Container>

    {/* Floating Resume Download Button */}
    <div className="fixed bottom-7 right-12 z-50">
      <a
        href="/resume/HugoTonioni-resume.pdf"
        download="Hugo_Tonioni_Resume.pdf"
        className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float flex items-center gap-3 min-w-max"
        title="Download Resume"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        
        {/* Icon and Text */}
        <div className="relative z-10 flex items-center gap-3">
          <FaDownload className="text-lg group-hover:animate-bounce" />
          <span className="font-semibold text-sm hidden sm:block">Download CV</span>
          <span className="font-semibold text-sm sm:hidden">CV</span>
        </div>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 group-hover:animate-ping"></div>
      </a>
    </div>
  </>
  );
}

export default About;