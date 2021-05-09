import Heading from '../components/smallComponents/Heading';

export const About = () => {
  const knoledge = ["HTML", 'CSS', 'SCSS', 'JAVASCRIPT', 'RUBY', 'RUBY ON RAILS', 'NODE JS',
    'REACT',
    'REDUX',
    'NEXT JS',
    'PostgressSQL',
    'MongoD']
  const tools = ['Photoshop', 'Illustrator', 'PremierePro', 'After Effects']

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
            <h3>Articles</h3>
          </div>
        </div>
      </div>
    </div>

  )
};

export default About;
