import { Codepen, GitHub, Instagram, LinkedIn, Twitter } from "@assets/vectors";
import "./footer.css";

const socials = [
    {
      link: "https://github.com/purrrplelipton/",
      icon: <GitHub fill={"var(--clr-4)"} />,
      label: "GitHub",
    },
    {
      link: "https://codepen.io/purrrplelipton/",
      icon: <Codepen fill={"var(--clr-4)"} />,
      label: "Codepen",
    },
    {
      link: "https://twitter.com/purrrplelipton/",
      icon: <Twitter fill={"var(--clr-4)"} />,
      label: "Twitter",
    },
    {
      link: "https://linkedin.com/in/purrrplelipton/",
      icon: <LinkedIn fill={"var(--clr-4)"} />,
      label: "LinkedIn",
    },
    {
      link: "https://instagram.com/purrrple.lipton/",
      icon: <Instagram fill={"var(--clr-4)"} />,
      label: "Instagram",
    },
  ],
  myEmail = "purrrplelipton@outlook.com";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <section className="socials">
          {socials.map((social) => (
            <a
              key={social.link}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`link to my ${social.label}`}
            >
              {social.icon}
            </a>
          ))}
        </section>
        <aside className="mail-section">
          <a href="mailto:purrrplelipton@utlook.com">
            {myEmail.split("").map((char, i) => (
              <span key={`${char}-${i}`}>{char}</span>
            ))}
          </a>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
