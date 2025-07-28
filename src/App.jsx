import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import robots from './assets/Robots.png'
import './App.css'

import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/tiktok'
import 'react-social-icons/youtube'
import 'react-social-icons/whatsapp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <a href="" target="">
            <img src={robots} className="logo robots floating" alt="robots" />
          </a>
      </div>
      <h1>Blip Academy</h1>
      <div className="card">
        <p>
          Muy pronto podrás conocer acerca de nuestros cursos libres y programas.
        </p>
      </div>
      <p className="read-the-docs">
        ¡Siguenos en nuestras redes sociales!
      </p>
      <div className="card">
   
        <SocialIcon style={{ marginRight: '10px' }} url="https://www.facebook.com/profile.php?id=61578404565263" target="_blank" network="facebook" />
        
        <SocialIcon style={{ marginRight: '10px' }} url="https://www.instagram.com/blip_academy/" target="_blank" network="instagram" />
        <SocialIcon style={{ marginRight: '10px' }} url="https://www.tiktok.com/@blip_academy" target="_blank" network="tiktok" />
        <SocialIcon style={{ marginRight: '10px' }} url="https://www.youtube.com/@Blip-Academy" target="_blank" network="youtube" />
        <SocialIcon style={{ marginRight: '10px' }} url="https://wa.me/50686769685" target="_blank" network="whatsapp" />

      </div>
    </>
  )
}

export default App
