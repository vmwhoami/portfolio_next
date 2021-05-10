import path from 'path';
import fs from 'fs';
import Heading from '../components/smallComponents/Heading';
export const About = ({ experience }) => {

  const knoledge = ["HTML", 'CSS', 'SCSS', 'JAVASCRIPT', 'RUBY', 'RUBY ON RAILS', 'NODE JS',
    'REACT',
    'REDUX',
    'NEXT JS',
    'PostgressSQL',
    'MongoD']
  const tools = ['Photoshop', 'Illustrator', 'PremierePro', 'After Effects']
  const featured = ['Should Web Developers Learn How To Use Photoshop?']
  return (
    <div className="container aboutpage">
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
            <div className="whyme__experience__container">

            </div>
          </div>
          <div className="whyme__skills">
            <h2>Skills</h2>

            <div className="whyme__skills__container">
              <div className="whyme__skills__knoledge">
                <h3>Knoledge</h3>
                <ul>{knoledge.map(el => <li key={el} >{el}</li>)}</ul>
              </div>
              <div className="whyme__skills__tools">
                <h3>Tools</h3>
                <ul>{tools.map(el => <li key={el} >{el}</li>)}</ul>
              </div>
            </div>
          </div>
          <div className="whyme__featured">
            <h2>Featured</h2>
            <div className="whyme__skills__articles">
              <h3>Articles</h3>
              <ul>{featured.map(el => <li key={el} >{el}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export const getStaticProps = async () => {
  const filepath = path.join(process.cwd(), 'data', 'experience.json')
  const jsonData = await fs.readFileSync(filepath)
  const data = JSON.parse(jsonData)
  return {
    props: data
  }
}

export default About;
``