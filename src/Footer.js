const Footer = () => {
  function changeLanguage(e) {
    console.log('change language');
  }

  return(
    <div className='footer'>
      <button onClick={changeLanguage} value='en'>English</button>
      <button onClick={changeLanguage} value='es'>Español</button>
    </div>
  )
}

export default Footer
