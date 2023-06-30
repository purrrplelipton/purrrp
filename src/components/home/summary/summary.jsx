import "./summary.css";

const Summary = () => {
  return (
    <div className={"summary"}>
      <p>Hey there! I&apos;m</p>
      <h1>Emmanuel Adeyeye.</h1>
      <h2>
        My focus is on utilizing technology to create solutions that cater to
        human needs - and maybe wants
      </h2>
      <div>
        <p>
          I&apos;m an aspiring{" "}
          <abbr title="someone being exceptionally skilled or productive in their role as a software engineer">
            10x software engineer
          </abbr>{" "}
          with 3+ years of hobbyist experience and 1+ year of professional
          experience in the frontend space
        </p>
        <a href="mailto:immanueltoby@gmail.com">Let&apos;s Talk</a>
      </div>
    </div>
  );
};

export default Summary;
