import Link from 'next/link';

const PortContent = ({ title, description, id, convertTitle }) => (
  <div className="post_content">
    <div className="entry_header">
      <h3>
        <Link href={`/portfolio/${convertTitle(title)}`}>
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

export default PortContent;
