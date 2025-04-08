import { useState  , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import bg from './assets/bg.jpg'

function App() {
  const [count, setCount] = useState(0)
  
const stackRef = useRef(null)
const aboutMe = useRef(null)
const [hasTyped, setHasTyped] = useState(false)
const [stackText, setStackText] = useState('')

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
   const stack = 'C++ , MERN , JavaScript , ReactJS , ExpressJS , MongoDB , NodeJS'
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
            <a href="#terminal-body" className="titleButton">Tech Stack</a>
          </div>
          <div className="title">
            <a href="#about" className="titleButton">Survey</a>
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
            <div id='about-me'><p><span id='typed-text' ref={aboutMe}></span><span id='cursor'>|</span></p></div>
        </div>
        <div id='stack-pre'>
          <div id="stack">
              
          <section class="terminal">
             <div class="terminal-header">
               <span class="red"></span>
               <span class="yellow"></span>
               <span class="green"></span>
             </div>
             <div class="terminal-body" id="terminal-body">
               <p class="command"> echo "Tech Stack"</p>
               <p class="output"><span id="tech-stack" ref={stackRef}><span id='cursor'>|</span></span></p>
              </div>
          </section>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
