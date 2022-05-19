import React, { useState, useEffect } from 'react';
import { useNavigator } from '../../hooks/useNavigator';
import { Link } from 'react-scroll';
import intl from 'react-intl-universal';
import { locales } from '../../config/language';
import UsFlag from '../../../public/icons/UsFlag';
import BrazilFlag from '../../../public/icons/BrazilFlag';
import { useRouter } from 'next/router';

const DURATION = 1000;

export const LanguageComponent = props => {
  const [language, setLanguage] = useState('en-US');
  const NavigatorLanguage = useNavigator();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('language')){
      setLanguage(localStorage.getItem('language'));
    } else {
      setLanguage(NavigatorLanguage);
      localStorage.setItem('language', NavigatorLanguage);
    }
  }, []);

  useEffect(() => {
    props.setInit(true);
    const currentLocale = locales[language]
      ? language
      : 'en-US';
    intl.init({
      currentLocale,
      locales,
    }).then(() => {props.setInit(false);});
    router.push(window.location.pathname);
  }, [language]);

  return (
    <Link
      to=""
      spy={false}
      smooth="easeInOutQuart"
      duration={DURATION}
      activeClass="active"
      onClick={() => {
        localStorage.setItem('language', language === 'pt-BR' ? 'en-US' : 'pt-BR');
        setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
      }}
    >
      {language === 'pt-BR' ? <UsFlag size={20}/> : <BrazilFlag size={20}/>}
    </Link>
  );
};
