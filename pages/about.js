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
          <p>  I'm a full-stack developer and I've spent the whole 2020 working with people across five different time zones in a Development Program called Microverse.</p>
        </article>

        <div className="aboutimg">
          <img src="/pictures/mainabout.jpg" alt="vitalieMelnic" />
        </div>
      </main>



    </div>
  </div>

);

export default About;
