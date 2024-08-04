import React from 'react';
import '../WhyUs/component_2.css';
import WhyUsRect_1 from './WhyUsRect_1';
import WhyUsRect_2 from './WhyUsRect_2';
import WhyUsRect_3 from './WhyUsRect_3';
import WhyUsRect_4 from './WhyUsRect_4';
import WhyUsRect_5 from './WhyUsRect_5';
import WhyUsRect_6 from './WhyUsRect_6';
import WhyUsRect_7 from './WhyUsRect_7';
import WhyUsBack from './WhyUsBack';
// import ScrollImg from "../../Resources/ScrollImg.js";
const Component_2 = () => {
  return (
    <div id='why-us-main'>
      {/* <WhyUsBack className='component1'/>  */}
      <div >
        <div id ='whyus-container'>
          <WhyUsRect_3 className='component4' />
          <WhyUsRect_2 className='component3' />
          <WhyUsRect_1 className='component2' />
        </div>
        <div className='center'>
          {/* <ScrollImg /> */}
          <WhyUsRect_4 className='component5' />
          <WhyUsRect_5 className='component6' />
          <WhyUsRect_6 className='component7' />
        </div>

        <WhyUsRect_7 className='component8' />
      </div>
    </div>

  )
}

export default Component_2;