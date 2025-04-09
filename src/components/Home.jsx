import './Home.css'
import { useState  , useEffect , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import bg from './assets/bg.jpg'







function Home(){
const [count, setCount] = useState(0)
  
const stackRef = useRef(null)
const aboutMe = useRef(null)
const [hasTyped, setHasTyped] = useState(false)
const [stackText, setStackText] = useState('')
const [showSurvey, setShowSurvey] = useState(false);

const navigate = useNavigate()
  useEffect( ()=>{
    const mouse = document.getElementById('CursorGlow')
    const handleMouse = (e)=>{
      if(mouse){
        mouse.style.top = `${e.clientY}px`
        mouse.style.left= `${e.clientX}px`
      }
    }
    document.addEventListener('mousemove' , handleMouse)

    return () => {
      document.removeEventListener('mousemove' , handleMouse)
    } }, []
  )

  let isTyping = false
  function type(ref, text, speed) {
    if(isTyping) return
    isTyping = true
    let index =0
    if (!ref.current) return;
    ref.current.textContent = ''

    function typing() {
        if (index < text.length) {
            if (ref.current) {
                ref.current.textContent += text.charAt(index)
                index++;
                setTimeout(typing, speed)
            }
        }
        else isTyping=false
    }

    typing();
}
 
useEffect(() => {
   const stack = 'AI , C++/C , JavaScript , [ MERN ->  MongoDB , ExpressJS , ReactJS , NodeJS ], Python , ML , GIT , HTML , CSS , TAILWIND , BOOTSTRAP '
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasTyped) {
                type(stackRef, stack, 100)
                setHasTyped(true)
            }
        });
    }, { threshold: 0.2 });

    if (stackRef.current) {
        observer.observe(stackRef.current)
    }

    return () => {
        if (stackRef.current) {
            observer.unobserve(stackRef.current)
        }
    }
}, [hasTyped])



  useEffect(()=>{
    const text=" I am a dev , physics enthusiast and explorer. I specialize in full-stack development . I love to work on interdisciplinary engineering projects also"
    const speed = 100
    type(aboutMe , text , 10)
  } , [])



  
  


  return (
    <>
      <div id='CursorGlow'></div>
      
      <div id='app'>
        <div id="titleBar">
          <div className="title">
            <a href="#about" className="titleButton">About me</a>
          </div>
          <div className="title">
          <p className="titleButton" onClick={()=> navigate('/survey')}>Survey</p>
          </div>
          <div className="title">
            <a href="#terminal-body" className="titleButton">Tech Stack</a>
          </div>
        
          <div className="title">
            <a href="#about" className="titleButton">Connect</a>
          </div>
          <div className="title">
            <a href="#about" className="titleButton">Projects</a>
          </div>
          <div className="title">
            <a href="#about" className="titleButton">Blog</a>
          </div>
          <div className="title">
            <a href="#about" className="titleButton">Github</a>
          </div>
          
        </div>
        <div id='about'>
          <div id="me">
            <div id='profile-photo'></div>
          </div>
            <div id='name'><p>Adarsh Pandey</p></div>
            <div id='about-me'><p><span id='typed-text' ref={aboutMe}></span><span className='cursor'>|</span></p></div>
        </div>
        <div id='stack-pre'>
          <div id="stack">
              
          <section className="terminal">
             <div className="terminal-header">
               <span className="red"></span>
               <span className="yellow"></span>
               <span className="green"></span>
             </div>
             <div className="terminal-body" id="terminal-body">
               <p className="command"> echo "Tech Stack"</p>
               <p className="output"><span id="tech-stack" ref={stackRef}><span className='cursor'>|</span></span></p>
              </div>
          </section>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home