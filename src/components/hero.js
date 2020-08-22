import React from 'react'
import PropTypes from 'prop-types'
import headerImage from '../images/header.png'
import Logo from '../images/logo.svg'
import AppStore from '../images/app-store.svg'
import PlayStore from '../images/play-store.svg'

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
        <p style={ { textAlign: 'center', maxWidth: 540 } }>
            Exkluziv ajanlatok kedvenc markaidtol, nap mint nap
            <br />
            <h2 className="heading heading--large text-center mt-4">
                <span className="heading__elem m-auto">
                    <strong className='lg:text-lg'>CSAK NEKED.</strong>
                </span>
            </h2>
        </p>

        <img className='mt-8 h-12' src={ AppStore } alt={'Letoltheto az App Store-bol'} />
        <img style={ { height: '3.3rem' } } src={ PlayStore } alt={'Letoltheto a Play Store-bol'} />
    </div>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
