import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Footer from './components/Footer.jsx'
import AissistantDemo from './components/AissistantDemo.jsx'
import PipelineExplorer from './components/PipelineExplorer.jsx'
import SignGallery from './components/SignGallery.jsx'
import projects from './data/projects.js'

const signifyProject = projects.find((p) => p.id === 'signify')
const aissistantProject = projects.find((p) => p.id === 'aissistant')

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      <section className="section" id="work">
        <div className="container">
          <p className="section-label">Selected work</p>
          <h2>AI-Powered Mobile Applications</h2>

          <ProjectCard project={signifyProject}>
            <PipelineExplorer />
            <SignGallery />
          </ProjectCard>

          <ProjectCard project={aissistantProject}>
            <AissistantDemo />
          </ProjectCard>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container">
          <p className="section-label">About</p>
          <h2>Background</h2>
<p>
  Apart from coursework, I build projects in my free time (see{' '}
  <a href="#aissistant">AIssistant</a>) and contribute to open source. I have a
  merged documentation PR to Hugging Face Transformers for the CamemBERT model
  card (
  <a
    href="https://github.com/huggingface/transformers/pull/39227"
    target="_blank"
    rel="noopener noreferrer"
  >
    PR #39227
  </a>
  ). This helped me understand how large codebases are built, reviewed and
  maintained. I have built end-to-end mobile applications that respond within
  1 second and serve a real purpose, such as sign language communication and
  task categorization with recurrence detection.
</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
