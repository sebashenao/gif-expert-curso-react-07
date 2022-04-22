import React from 'react'
import Card from 'react-bootstrap/Card';

export const GifGridItem = ({ id, title, url }) => {
    return (
        <Card>
            <Card.Img src={url} alt={title} />
        </Card>
    )
}
