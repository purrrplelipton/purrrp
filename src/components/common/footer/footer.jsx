import {
  TablerBrandCodepen,
  TablerBrandGitHub,
  TablerBrandInstagram,
  TablerBrandLinkedIn,
  TablerBrandTwitter,
} from '@assets/vectors';
import React from 'react';
import './footer.css';

const socials = [
  {
    link: 'https://github.com/purrrplelipton/',
    icon: <TablerBrandGitHub />,
    label: 'GitHub',
  },
  {
    link: 'https://codepen.io/purrrplelipton/',
    icon: <TablerBrandCodepen />,
    label: 'Codepen',
  },
  {
    link: 'https://twitter.com/purrrplelipton/',
    icon: <TablerBrandTwitter />,
    label: 'Twitter',
  },
  {
    link: 'https://linkedin.com/in/purrrplelipton/',
    icon: <TablerBrandLinkedIn />,
    label: 'LinkedIn',
  },
  {
    link: 'https://instagram.com/purrrple.lipton/',
    icon: <TablerBrandInstagram />,
    label: 'Instagram',
  },
];
const myEmail = 'purrrplelipton@outlook.com';

function Footer() {
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
            {myEmail.split('').map((char, i) => (
              <span key={`${char}-${i}`}>{char}</span>
            ))}
          </a>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
