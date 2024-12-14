import PropTypes from "prop-types";

export function ViewSection({ memo }) {
  return <p className="memo-content">{memo.content}</p>;
}

ViewSection.propTypes = {
  memo: PropTypes.object.isRequired,
};
