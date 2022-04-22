import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    return (
        <>
            <h2 className="text-center">Gifs ✌</h2>
            <AddCategory setCategories={setCategories} />
            <ol className="list-category">
                {
                    categories.map(category => (
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    ))
                }
            </ol>

        </>
    );
};
