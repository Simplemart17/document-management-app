import React from 'react';
import './scss/Button.scss';

const Button = (props) => {
  let {
    size,
    type,
    isActive,
    submit = false,
    alignImageRight = true,
    disabled,
    classes,
    ...rest
  } = props;
  type = !type ? 'hollow' : type;
  size = !size ? 'regular' : size;
  isActive = isActive !== undefined ? isActive : false;

  const classNames = isActive
    ? `button active ${size} ${type}`
    : `button ${size} ${type}`;

  const renderButtonContent = (props) => {
    // spinner shows when isLoading is true
    if (props.isLoading) {
      return (
        <div className={isActive ? 'inline white' : 'inline'}>
          {/* <Spinner size="small" /> */}
        </div>
      );
    }

    return alignImageRight
      ? (
          <React.Fragment>
            {props.name} {props.icon && <img src={props.icon} alt="button" />}
          </React.Fragment>
        )
      : (
          <React.Fragment>
            {props.icon && <img src={props.icon} alt="button" />} {props.name}
          </React.Fragment>
        );
  };

  const classList = `${
    classes
      ? `${classNames} ${classes}`
      : `${classNames}`
  } ${disabled ? 'disabled' : ''}`.trim();

  return (
    <button
      { ...rest }
      type={submit ? 'submit' : 'button'}
      id={props.id}
      disabled={disabled}
      className={classList}
      onClick={props.onClick}
    >
      {renderButtonContent(props)}
    </button>
  );
};

export default Button;
