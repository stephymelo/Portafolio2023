import * as React from 'react';
import { useNavigate } from 'react-router';

import { DesignElemObj } from '../../Types/DesignElemObj';


export type DesignElemProps = DesignElemObj & {


}

const DesignElem: React.FC<DesignElemProps> = ({ id, title, description, image, path }) => {
    const navigate = useNavigate();
    const handleViewDesign: React.MouseEventHandler<HTMLHeadingElement> = () => {
        navigate(`/design/${id}`);
    }
    return (
        <section className='elem' onClick={handleViewDesign}>

            <h2 className='elem__title'>{title}</h2>
            <a className='elem__a'>
                <img className='image' src={image}></img>

            </a>
            <p className='elem__description'>{description}</p>

        </section>
    );
}

export default DesignElem;