import Link from 'next/link';

const PortThumb = ({ id, image, title, convertTitle }) => {

  return (
    <div className="post_thumb ">
      <Link href={`/portfolio/${id}`}>
        <a className="link_container">
          <img className="img_fluid" src={image} />
        </a>
      </Link>
    </div>
  )
};

export default PortThumb;
