import React from 'react'
import PropTypes from 'prop-types'

import Button from '../components/button'
import headerImage from '../images/header.png'
import Logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
    <div
        style={ {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '4rem 1rem',
        } }
    >
        <div
            style={ {
                backgroundImage: `url(${ headerImage })`,
                position: 'absolute',
                top: 0,
                zIndex: -5,
                height: '100vh',
                width: '100vw',
                opacity: 0.5,
            } }
        />
        <img src={ Logo } alt={ 'logo' } />
        <p style={ { textAlign: 'center', maxWidth: 440 } }>
            Exkluziv ajanlatok kedvenc markaidtol, nap mint nap.
        </p>
        <Button>Értesítést kérek!</Button>
    </div>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
