import './index.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
function App() {
  return (
    <div className='bg-gray-800'>
      <Header />
      <Introduction />
      <Experience />
      <Projects />
      <Skills />
      {/* <div className="min-h-screen flex justify-center items-center text-center"> */}
      <Contact />

    </div>
  )
}
export default App
