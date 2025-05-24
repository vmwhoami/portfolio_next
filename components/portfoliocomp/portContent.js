"use client";

import PropTypes from "prop-types";
import Link from "next/link";

const PortContent = ({ title, description, slug }) => (
  <div className="post_content">
    <div className="entry_header">
      <h2>
        <Link href={`/portfolio/${slug}`}>
          <button type="button" className="portfolio__heading portcontent">
            {title}
          </button>
        </Link>
      </h2>
    </div>
    <div className="entry_content">
      <p>{`${description.split(" ").slice(0, 10).join(" ")}...`} </p>
    </div>
  </div>
);

PortContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export default PortContent;
