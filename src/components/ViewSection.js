import PropTypes from 'prop-types';

export function ViewSection({ memo }) {
  if (memo === undefined) {
    return null;
  } else {
    return <p className="memo-content">{memo.content}</p>;
  }
}

ViewSection.propTypes = {
  memo: PropTypes.object,
};
