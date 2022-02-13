import path from 'path';
import PropTypes from 'prop-types';
import fs from 'fs';
import Heading from '../components/smallComponents/Heading';
import Info from '../components/smallComponents/Info';
import { Youtube } from '../components/Svgs';
import AboutIntro from '../components/smallComponents/AboutIntro';

export const About = ({ experience, knoledge, tools, featured ,intro }) => (
  <div className="container aboutpage">
    <Heading white="About " color="me" bg="About" />
    <div className="aboutp">
      <AboutIntro intro={intro} />

      <div className="whyme">
        <div className="whyme__experience">
          <h2>Experience</h2>
          <div className="whyme__experience__container">
            {
              /* eslint-disable react/jsx-props-no-spreading */
              experience.map((exeperience) => <Info key={exeperience.id} {...exeperience} />)
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
    <div className="personal">
      <h2>Personal</h2>
      <div className="personal__info">
        <a href="https://www.youtube.com/user/vmwhoiam/videos" target="_blank" rel="noreferrer">
          <Youtube />
        </a>
        <div>
          <p>
            I have been often asked what did I do before coding.
            When I tell them that I was a dancer the next question
            is what type of dance did I dance.
          </p>
          <p>
            Because I started late I never considered
            myself a professional dancer.
            The same impostor syndrome is influencing my developer career at the moment.
          </p>
          <p>
            My channel link will be at your left or underneath for mobile, for anyone interested.
          </p>
          <p>
            I will include two of my least hated videos below so you
            won`&apos;`t have to jump to youtube.
          </p>
        </div>
      </div>
      <div className="personal__dance">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/XHBM84biLJI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/EmdMW_KyAhM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </div>

);
export const getStaticProps = async () => {
  const filepath = path.join(process.cwd(), 'page_text', 'experience.json');
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
  intro: PropTypes.instanceOf(Array).isRequired,
};
export default About;
