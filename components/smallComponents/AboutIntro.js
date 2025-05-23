import PropTypes from "prop-types";

const AboutIntro = ({ intro }) => (
  <main>
    <article>
      {intro.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </article>
    <div className="aboutimg">
      <img src="/pictures/mainabout.jpg" alt="Vitalie Melnic" />
    </div>
  </main>
);

AboutIntro.propTypes = {
  intro: PropTypes.instanceOf(Object).isRequired,
};
export default AboutIntro;
