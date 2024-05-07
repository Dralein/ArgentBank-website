import PropTypes from "prop-types";

const features = ({ imgurl, title, text }) => {
  return (
    <div className="feature-item">
      <img src={imgurl} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

features.propTypes = {
  imgurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default features;
