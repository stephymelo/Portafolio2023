import * as React from 'react';
import { Route } from 'react-router';
import { DesignDetailsObj } from '../../Types/DesignDetailsObj';
import { DesignElemObj } from '../../Types/DesignElemObj';
import { useGetElemByIdParam } from '../../Utils/useGetElemByIdParams'
import { useIdParam } from '../../Utils/useIdParams';


interface DesignDetailsProps {
  list: DesignDetailsObj[];

}

const DesignDetails: React.FC<DesignDetailsProps> = ({ list }) => {
  const id = useIdParam();
  const elem = useGetElemByIdParam(list);


  //Spread operator

  if (!elem) return null;
  const { role, subtitle1,paragraph1 } = elem;




  return (<div>
    
    <h2 className='elem__title'>{role}</h2>
      <a className='elem__a' href='/design/:id'>
        {/* <img className='image' src={image1}></img> */}
        
      </a>
      <p className='elem__description'>{subtitle1}</p>



      
  




  </div>);
}

export default DesignDetails;