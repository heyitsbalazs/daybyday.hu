import React from 'react'
import PropTypes from 'prop-types'

import Button from '../components/button'
import headerImage from '../images/header.png'
import MockupContent from './image'
import mockupFrame from '../images/mockup-frame.png'

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
        <h1 style={ { textAlign: 'center' } }>Landing Page Starter</h1>
        <p style={ { textAlign: 'center', maxWidth: 440 } }>
            This landing page looks great on all devices and is minimal in design. Add
            what you want and deploy.
        </p>
        <Button>Ertesitest kerek</Button>
    </div>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
