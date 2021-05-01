import PropTypes from 'prop-types';
import Link from 'next/link';

const PortContent = ({
  title, description, id,
}) => (
  <div className="post_content">
    <div className="entry_header">
      <h2>
        <Link href={`/portfolio/${id}`}>
          <button type="button" className="portfolio__heading portcontent">
            {title}
          </button>
        </Link>
      </h2>
    </div>
    <div className="entry_content">
      <p>
        {`${description.split('.')[0]}...`}
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
