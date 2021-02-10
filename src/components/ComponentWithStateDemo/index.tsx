import React, { InputHTMLAttributes, useState, useEffect } from 'react';
import styles from './index.module.css'

export type InputProps = {
  initialValue: string
  onPureComponentDemoValueChange?: (val: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;


const InputDemo: React.FC<InputProps> = ({
  initialValue = "N/A",
  onPureComponentDemoValueChange
}) => {

  const [value, setValue] = useState(initialValue)

  // This is very important: Make sure prop changes result into state change too
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget || {};
    setValue(value)
    onPureComponentDemoValueChange?.(value)

    //dispatch(xxxxx) if we need to operate redx
  };

  return (
    <input className={styles.base} type="text" value={value} onChange={handleChange} />
  );
};
export { InputDemo };
