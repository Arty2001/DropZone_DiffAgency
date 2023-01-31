import React from 'react';
import { createStyles, Title } from '@mantine/core';
import DropZoneLogo from '../components/DropZoneLogo';
import DropZoneNumber from '../components/DropZoneNumber';
import DropZoneCountDown from '../components/DropZoneCountDown';

const landing = require('../assets/landing.jpg')

const useStyles = createStyles((theme) => ({
    container: {
        backgroundImage: `url(${landing})`,
        backgroundPosition: 'left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
}));

export default function LandingPage() {

    const { classes, cx } = useStyles();

    return (
        <div className = {classes.container}>
            <DropZoneLogo/>
            <DropZoneCountDown/>
        </div>
    );
}

