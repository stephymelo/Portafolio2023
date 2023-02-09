import * as React from 'react';


interface Artwork {
}

export const Artwork: React.FC<Artwork> = () => {
    return (
<section className='artwork-section'>
    <h1 className='title'>Artwork</h1>
</section>
);
}