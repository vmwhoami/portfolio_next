import path from 'path';
import PropTypes from 'prop-types';
import fs from 'fs';
import Heading from '../components/smallComponents/Heading';
import Info from '../components/smallComponents/Info';

export const About = ({
  experience, knoledge, tools, featured,
}) => (
  <div className="container aboutpage">
    <Heading
      white="About "
      color="me"
      bg="About"
    />
    <div className="aboutp">

      <main>
        <article>
          <p>
            {' '}
            Hi there as I already stated on my main page my name is Vitalie.
          </p>
          <p>
            {' '}
            I&apos;m a full-stack developer and I&apos;ve spent the whole 2020 pair programming
            with people across five different time zones in a Development Program called Microverse.
          </p>
        </article>

        <div className="aboutimg">
          <img src="/pictures/mainabout.jpg" alt="vitalieMelnic" />
        </div>
      </main>

      <div className="whyme">
        <div className="whyme__experience">
          <h2>Experience</h2>
          <div className="whyme__experience__container">
            {
              /* eslint-disable react/jsx-props-no-spreading */

              experience.map((exp) => <Info key={exp.id} {...exp} />)
            }
          </div>
        </div>
        <div className="whyme__skills">
          <h2>Skills</h2>

          <div className="whyme__skills__container">
            <div className="whyme__skills__knoledge">
              <h3>Knoledge</h3>
              <ul>{knoledge.map((el) => <li key={el}>{el}</li>)}</ul>
            </div>
            <div className="whyme__skills__tools">
              <h3>Tools</h3>
              <ul>{tools.map((el) => <li key={el}>{el}</li>)}</ul>
            </div>
          </div>
        </div>
        <div className="whyme__featured">
          <h2>Featured</h2>
          <div className="whyme__skills__articles">
            <h3>Articles</h3>
            <ul>
              {featured.map((el) => (
                <li key={el.id}>
                  <a href={el.link} target="blank">
                    {' '}
                    {el.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

);
export const getStaticProps = async () => {
  const filepath = path.join(process.cwd(), 'data', 'experience.json');
  const jsonData = await fs.readFileSync(filepath);
  const data = JSON.parse(jsonData);
  return {
    props: data,
  };
};

About.propTypes = {
  experience: PropTypes.instanceOf(Object).isRequired,
  knoledge: PropTypes.instanceOf(Array).isRequired,
  tools: PropTypes.instanceOf(Array).isRequired,
  featured: PropTypes.instanceOf(Array).isRequired,
};
export default About;
