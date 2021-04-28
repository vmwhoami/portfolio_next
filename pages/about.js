import Link from 'next/link';
import Heading from '../components/smallComponents/Heading';

export const About = () => (
  <div className="container">
    <Heading
      white="About "
      color="me"
      bg="About"
    />
    <Link href="/">Home</Link>
  </div>
);

export default About;
