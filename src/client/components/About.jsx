import React from 'react';
import '../about.css';
import eternaImg from './../../../public/assets/team/eterna.jpg';
import nianImg from './../../../public/assets/team/nian.jpeg';
import neyserImg from './../../../public/assets/team/neyser.jpg';
import yongImg from './../../../public/assets/team/yong.jpg';

const About = () => {
  return (
    <div>
      <h2>Meet Our Developers</h2>
      <div id='team'>
        <div className ='person'>
          <img className='pro-img' src={eternaImg} />
          <h4 className='name'>Eterna</h4>
          <p className='single-p'><a href = 'https://github.com/eternalee' target='_blank'>@eternalee</a></p>
        </div>
        <div className ='person'>
          <img className='pro-img' src={neyserImg} />
          <h4 className='name'>Neyser</h4>
          <p className='single-p'><a href = 'https://github.com/neyser95' target='_blank'>@neyser95</a></p>
        </div>
        <div className ='person'>
          <img className='pro-img' src={nianImg} />
          <h4 className='name'>Nian</h4>
          <p className='single-p'><a href = 'https://github.com/nianliu18' target='_blank'>@nianliu18</a></p>
        </div>
        <div className ='person'>
          <img className='pro-img' src={yongImg} />
          <h4 className='name'>Yong-Nicholas</h4>
          <p className='single-p'><a href = 'https://github.com/yongnicholaskim' target='_blank'>@yongnicholaskim</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
