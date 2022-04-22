import React from 'react';
import { useFecthGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Loading } from './Loading';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFecthGifs(category);

    return (
        <>
            <div className="category-loader">
                <h3>{category}</h3>
                {loading && <Loading />}
            </div>

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    );
};