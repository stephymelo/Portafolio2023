import * as React from 'react';
import sage from '../../Resources/Images/ArtGallery/sage.png'
import space from '../../Resources/Images/ArtGallery/space.png'
import kazuha from '../../Resources/Images/ArtGallery/kazuha.png'
import girl1 from '../../Resources/Images/ArtGallery/girl1.jpg'
import girl2 from '../../Resources/Images/ArtGallery/girl2.jpg'
import girl3 from '../../Resources/Images/ArtGallery/girl3.jpg'
import girl4 from '../../Resources/Images/ArtGallery/girl4.png'
import girl5 from '../../Resources/Images/ArtGallery/girl5.png'
import girl6 from '../../Resources/Images/ArtGallery/girl6.jpg'
import girl7 from '../../Resources/Images/ArtGallery/girl7.jpg'
import girl8 from '../../Resources/Images/ArtGallery/girl8.jpg'
import capy from '../../Resources/Images/ArtGallery/capy.jpg'
import bunny from '../../Resources/Images/ArtGallery/bunny.jpg'



interface Artwork {
}

export const Artwork: React.FC<Artwork> = () => {
    return (
<section className='artwork-section'>
    <h1 className='title'>Artwork</h1>
    <article>
    <img src={space}/>
    <img src={sage}/>
    <img src={girl1}/>
    <img src={girl2}/>
    <img src={girl3}/>
    <img src={girl4}/>
    <img src={girl5}/>
    <img src={girl6}/>
    <img src={girl7}/>
    <img src={girl8}/>
    <img src={capy}/>
    <img src={bunny}/>
    <img src={kazuha}/>
    </article>
    
</section>
);
}