import React from 'react'
import { Image } from 'react-bootstrap';
import loader from '../assets/img/loader.svg';

export const Loading = () => {
    return (
        <Image fluid="true" src={loader} alt="Loading" width="30" />
    )
}
