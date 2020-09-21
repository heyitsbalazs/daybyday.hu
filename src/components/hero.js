import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import amplitude from 'amplitude-js';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';
import headerImage from '../images/header.png';
import Logo from '../images/logo.svg';
import AppStore from '../images/app-store.svg';
import PlayStore from '../images/play-store.svg';

amplitude.getInstance().init('629f4c710cc7cd13b84f305564970aa4');

const Header = () => {
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    amplitude.logEvent('PageView');
  }, []);

  const onDownload = (type) => {
    if (window.ml_account) {
      window.ml_account('webforms', '2591189', 'm1d6m3', 'show');
    }

    if (!hasClicked) {
      amplitude.logEvent('AppDownload', { type });
    }

    setHasClicked(true);
  };

  return (
    <>
      <Helmet>
        <script src={withPrefix('mailerlite.js')} />
      </Helmet>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '4rem 1rem',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${headerImage})`,
            position: 'absolute',
            top: 0,
            zIndex: -5,
            height: '100vh',
            width: '100vw',
            opacity: 0.5,
          }}
        />
        <img src={Logo} alt="logo" />
        <p style={{ textAlign: 'center', maxWidth: 540 }}>
          Exkluziv ajanlatok kedvenc markaidtol, nap mint nap
          <br />
          <span className="heading heading--large text-center mt-4">
            <span className="heading__elem m-auto">
              <strong className="lg:text-lg">CSAK NEKED.</strong>
            </span>
          </span>
        </p>

        <img
          onClick={() => {
            onDownload('App Store');
          }}
          className="mt-8 h-12"
          src={AppStore}
          alt="Letoltheto az App Store-bol"
        />
        <img
          onClick={() => {
            onDownload('Play Store');
          }}
          style={{ height: '3.3rem' }}
          src={PlayStore}
          alt="Letoltheto a Play Store-bol"
        />
      </div>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
