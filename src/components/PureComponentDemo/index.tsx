import React, { ButtonHTMLAttributes } from 'react';
import styles from './index.module.css'
import classNames from 'classnames/bind';

export type ButtonType
 = 'secondary' | 'primary';

export type ButtonProps = {
  buttonType?: ButtonType
  ;
} & ButtonHTMLAttributes<HTMLButtonElement>;

var cx = classNames.bind(styles); // Very convenient way to reduce boilerplate code

const ButtonDemo: React.FC<ButtonProps> = ({
  children, buttonType = 'secondary', ...rest
}) => {


  const styleClasses = buttonType === 'secondary' ?
    cx('base', 'primary') :
    cx('base', 'secondary')

  return (
    <button
      type="submit"
      className={styleClasses}
      {...rest}
    >
      {children}
    </button>
  );
};
export { ButtonDemo };
