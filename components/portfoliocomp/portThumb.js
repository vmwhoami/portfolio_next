import Link from 'next/link';

const PortThumb = ({ image, title }) => (
  <div className="post_thumb ">
    <Link href={`/portfolio/${title}`} ><a className="link_container">
      <img className="img_fluid" src={image} />
    </a>
    </Link>
  </div>
);

export default PortThumb