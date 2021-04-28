import PropTypes from 'prop-types';
import Link from 'next/link';

const PortThumb = ({
  id, image,
}) => (
  <div className="post_thumb ">
    <Link href={`/portfolio/${id}`}>
      <a className="link_container">
        <img className="img_fluid" src={image} />
      </a>
    </Link>
  </div>
);

PortThumb.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

};

export default PortThumb;
