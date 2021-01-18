import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return(
    <div className='footer'>
      <button onClick={changeLanguage} value='en'>English</button>
      <button onClick={changeLanguage} value='es'>Español</button>
    </div>
  )
}

export default Footer