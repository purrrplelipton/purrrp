import React from 'react';
import './summary.css';

function Summary() {
  return (
    <div className="summary">
      <p>Hey there! I am</p>
      <h1>Emmanuel Adeyeye.</h1>
      <h2>
        My focus is on utilizing technology to create solutions that cater to
        human needs - and maybe wants
      </h2>
      <div>
        <p>
          I&apos;m an aspiring{' '}
          <abbr title="someone being exceptionally skilled or productive in their role as a software engineer">
            10x software engineer
          </abbr>{' '}
          with 3+ years of hobbyist experience and 1+ year of professional
          experience in the frontend space.
          <br />
          <br />I like to think I&apos;m a master at perfecting the
          imperfections of perfection, makes me sleep at night{' '}
          <span
            className="smiley"
            style={{ display: 'inline-block', transform: 'rotate(90deg)' }}
          >
            :)
          </span>
        </p>
        <a href="mailto:immanueltoby@gmail.com">Let&apos;s Talk</a>
      </div>
    </div>
  );
}

export default Summary;
