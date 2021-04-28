import PropTypes from 'prop-types';
import Link from 'next/link';

const PortContent = ({
  title, description, id,
}) => (
  <div className="post_content">
    <div className="entry_header">
      <h3>
        <Link href={`/portfolio/${id}`}>
          <a className="portfolio__heading">
            {title}
          </a>
        </Link>
      </h3>
    </div>
    <div className="entry_content">
      <p>
        {`${description} `}
        {' '}
      </p>
    </div>
  </div>
);

PortContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default PortContent;
