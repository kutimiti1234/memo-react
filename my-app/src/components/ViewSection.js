import PropTypes from "prop-types";

export function EditSection({ memo }) {
  return <p className="memo-content">{memo.content}</p>;
}

EditSection.propTypes = {
  memo: PropTypes.object.isRequired,
};
