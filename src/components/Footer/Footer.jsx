import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'
import './styles.css';

export function Footer() {

  const handleWhatsAppNavigation = () => {
    // URL to open a chat on WhatsApp with a predefined message
    const phoneNumber = '+919698975464'; // Replace with your phone number
    const message = 'Hello, I would like to get in touch!';
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');

  };


  return (
    <footer className="footer">
      <a href="https://www.yogeshrajadev.com" className="logo">
        <span>www.yogeshrajadev.com</span>
        {/* <span>singh.in</span> */}
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media" style={{ paddingTop: 0 }}>
        <a
          href="https://www.linkedin.com/in/yogesh-raja"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/yogeshraja98/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          // href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Yogesh"
          onClick={handleWhatsAppNavigation}
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        {/* <a
          href="https://t.me/yogeshrajadev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}
      </div>
    </footer>
  )
}
