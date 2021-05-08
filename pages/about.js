import Heading from '../components/smallComponents/Heading';

export const About = () => (
  <div className="container">
    <Heading
      white="About "
      color="me"
      bg="About"
    />
    <div className="aboutp">

      <main>
        <article>
          <p> Hi there as I already stated on my main page my name is Vitalie.
        </p>
          <p>  I'm a full-stack developer and I've spent the whole 2020 pair programming with people across five different time zones in a Development Program called Microverse.</p>
        </article>

        <div className="aboutimg">
          <img src="/pictures/mainabout.jpg" alt="vitalieMelnic" />
        </div>
      </main>

      <div className="whyme">
        <div className="whyme__experience">
          <h2>Experience</h2>
        </div>
        <div className="whyme__skills"></div>
        <div className="whyme__featured"></div>
      </div>
    </div>
  </div>

);

export default About;
