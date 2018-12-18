import React from 'react';
import '../about.css';
import eternaImg from './../../../public/assets/team/eterna.jpg';
import nianImg from './../../../public/assets/team/nian.png';
import neyserImg from './../../../public/assets/team/neyser.jpg';
import yongImg from './../../../public/assets/team/yong.jpg';

const About = () => {
  return (
    <div>
      <h2>Meet Our Developers</h2>
      <div id='team'>
        <div className ='person'>
          <img className='pro-img' src={eternaImg} />
          <h3 className='name'>Eterna</h3>
          <p className='single-p'><a href = 'https://twitter.com/eterna_t'>@eterna_t</a></p>
        </div>
        <div className ='person'>
          <img className='pro-img' src={neyserImg} />
          <h3 className='name'>Neyser</h3>
          <p className='single-p'><a href = 'https://twitter.com/eterna_t'>@eterna_t</a></p>
        </div>
        <div className ='person'>
          <img className='pro-img' src={nianImg} />
          <h3 className='name'>Nian</h3>
          <p className='single-p'><a href = 'https://twitter.com/niantendo'>@niantendo</a></p>
        </div>
        <div className ='person'>
          <img className='pro-img' src={yongImg} />
          <h3 className='name'>Yong-Nicholas</h3>
          <p className='single-p'><a href = 'https://twitter.com/yongnicholaskim'>@yongnicholaskim</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
