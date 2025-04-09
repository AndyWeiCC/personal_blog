import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import { Flag } from 'semantic-ui-react'
import './LanguageSwitcher.css'; 
import 'semantic-ui-css/components/flag.min.css';



const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(lng);
    }
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown} className="language-switcher-icon">
        <FaGlobe />
      </button>
      {isDropdownOpen && (
        <div className="language-dropdown">
          <div onClick={() => changeLanguage('en')} className="language-option">
            <Flag name='au' />
            {t('language_switcher.en')}
          </div>
          <div onClick={() => changeLanguage('tw')} className="language-option">
            <Flag name='tw' />
            {t('language_switcher.tw')}
          </div>
          <div onClick={() => changeLanguage('zh')} className="language-option">
            <Flag name='cn' />
            {t('language_switcher.zh')}
          </div>
          <div onClick={() => changeLanguage('ja')} className="language-option">
            <Flag name='jp' />
            {t('language_switcher.ja')}
          </div>

        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;