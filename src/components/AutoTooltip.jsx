import React, { PropTypes } from 'react';
import RcTooltip from 'rc-tooltip';

import reactStringReplace from 'react-string-replace';

const styles = {
  span: {
    borderBottom: 'dashed 1px #aaaaaa',
    cursor: 'pointer',
  },
  tooltip: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    display: 'block',
    maxWidth: 120,
  },
};

const AutoTooltip = props => {
  return (
    <span>
      {reactStringReplace(
        props.children,
        Object.keys(props.tooltips),
        (match, i) => (
          <RcTooltip
            placement={props.placement}
            trigger={props.trigger}
            overlay={<span style={styles.text}>{props.tooltips[match]}</span>}
            overlayStyle={styles.tooltip}
            mouseLeaveDelay={0}
          >
            <span style={styles.span}>
              {match}
            </span>
          </RcTooltip>
        ),
      )}
    </span>
  );
};

AutoTooltip.propTypes = {
  placement: PropTypes.string,
  trigger: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element.isRequired,
  match: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  tooltips: PropTypes.objectOf(PropTypes.any),
};

AutoTooltip.defaultProps = {
  match: '',
  tooltips: {},
  placement: 'bottom',
  trigger: ['click'], // Can be 'click', 'hover' and/or 'focus'
};

export default AutoTooltip;
