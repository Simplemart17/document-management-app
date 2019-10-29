import React from 'react';
import './scss/InputField.scss';
import classNameFormatter from '../utils/helpers/classNameFormatter';

const InputField = ({
  error,
  showTextOnError,
  textarea,
  ...props
}) => {
  const classes = classNameFormatter(
    {
      'input-box-group__textarea-control': textarea,
      'input-box-group__control': !textarea,
      'input-box-group__control--error': Boolean(error),
    }
  );

  return (
    <div
      className={
        classNameFormatter(
          {
            'input-box-group': true,
            'input-box-group--error': Boolean(error),
          },
          props.className
        )
      }
    >
      {
        !textarea
          ? <input
            {...props}
            className={classes}
          />
          : <textarea
            {...props}
            className={classes}
          />
      }
      {
        error && showTextOnError && <span className="input-box-group__control__error-text">{error}</span>
      }
    </div>
  );
};

export default InputField;
