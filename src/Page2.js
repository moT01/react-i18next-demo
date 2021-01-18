import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

const Page2 = () => {
  const { t } = useTranslation();

  return (
    <div className='body'>
      <p>
        <Trans t={t}>this-is-page2</Trans>
      </p>
      
      <p>
        <Trans i18nKey='go-to-home' t={t}>
          <Link to='/'></Link>
        </Trans>
      </p>
    </div>
  );
}

export default Page2;
