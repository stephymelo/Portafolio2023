import * as React from 'react';
import DesignElem from '../DesignElem/DesignElem';
import { DesignElemObj } from '../../Types/DesignElemObj';


interface Design {
}

export const Design: React.FC<Design> = () => {
    const [designElems] = React.useState<DesignElemObj[]>([
        {
            id: 0,
            title: 'Melo',
            description: 'Director',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            path: '/design/1',
            
        },
        {
            id: 1,
            title: 'Melo',
            description: 'Director',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            path: '/design/2',
            
        }

    ]);
    return (
<section className='Design'>

{designElems.map((elem) => {
                    return <DesignElem key={elem.id} {...elem} />;
                })}
</section>
);
}