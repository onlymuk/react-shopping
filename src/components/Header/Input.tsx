import React, { useState, useEffect } from 'react';
import Space from './Space';
import { themeChange } from 'theme-change';
import Search from './Search';

type InputProps = {
  isDarkMode: boolean;
  onModeToggle: () => void;
};

const Input: React.FC<InputProps> = (props) => {
  const { isDarkMode, onModeToggle } = props;

  const [isChecked, setIsChecked] = useState<boolean>(isDarkMode);

  useEffect(() => {
    themeChange(isChecked);
    document.documentElement.classList.toggle('dark-mode', isChecked);
    document.documentElement.classList.toggle('light-mode', !isChecked);
  }, [isChecked]);

  const handleModeToggle = (): void => {
    setIsChecked(!isChecked);
    onModeToggle();
  };

  return (
    <div className="input-ct">
      <label className="swap swap-rotate">
        <input className="input-box" type="checkbox" />

        {/* sun icon */}
        <svg
          className={`swap-on fill-current w-10 h-10 sun ${isDarkMode ? 'active' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={handleModeToggle}
        >
          {/* sun icon의 path 코드 */}
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className={`swap-off fill-current w-10 h-10 moon ${!isDarkMode ? 'active' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={handleModeToggle}
        >
          {/* moon icon의 path 코드 */}
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
      <Space width="20px" height="10"></Space>
      <Search />
      <Space width="20px" height="10"></Space>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        className="bi bi-handbag"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
      </svg>
      <Space width="20px" height="10"></Space>
    </div>
  );
};

export default Input;
