import PropTypes from 'prop-types';
import '../../styles/buttonStyles.css';

export const Button = ({ children, variant, disabledShadow, disabledButton, startIcon, endIcon, size, color }) => {
  const lowerCaseVariant = variant.toLowerCase();
  const lowerCaseSize = size && size.toLowerCase();
  const shadowModifier = disabledShadow ? 'Button--disableShadow' : '';

  if (disabledButton) {
    return (
      <button
        disabled
        className={`Button Button--${lowerCaseVariant} Button--${lowerCaseSize} ${shadowModifier}`}
      >
        {startIcon && <span className="material-symbols-outlined">{startIcon}</span>}
        {children}
        {endIcon && <span className="material-symbols-outlined">{endIcon}</span>}
      </button>
    );
  }

  return (
    <button className={`Button Button--${lowerCaseVariant} Button--${lowerCaseSize} Button--${color} ${shadowModifier}`} >
      {startIcon && <span className="material-symbols-outlined">{startIcon}</span>}
      {children}
      {endIcon && <span className="material-symbols-outlined">{endIcon}</span>}
    </button>
  );
};

Button.defaultProps = {
  variant: 'default',
  disabledShadow: false,
  disabledButton: false,
  startIcon: null,
  endIcon: null
};

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  disabledShadow: PropTypes.bool,
  disabledButton: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
};
