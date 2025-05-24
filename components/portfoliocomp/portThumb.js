"use client";

import PropTypes from "prop-types";
import Link from "next/link";

const PortThumb = ({ image, title, slug }) => (
  <div className="post_thumb ">
    <Link href={`/portfolio/${slug}`}>
      <button type="button" className="link_container">
        <img className="img_fluid" src={image} alt={title} />
      </button>
    </Link>
  </div>
);

PortThumb.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PortThumb;
