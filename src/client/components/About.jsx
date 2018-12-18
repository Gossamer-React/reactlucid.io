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
          <h4 className='name'>Eterna</h4>
          <p className='single-p'><a href = 'https://twitter.com/eterna_t'>@eterna_t</a></p>
        </div>
        <div className ='person'>
          <img className='pro-img' src={neyserImg} />
          <h4 className='name'>Neyser</h4>
          <p className='single-p'><a href = 'https://twitter.com/eterna_t'>@eterna_t</a></p>
        </div>
        <div className ='person'>
          <img className='pro-img' src={nianImg} />
          <h4 className='name'>Nian</h4>
          <p className='single-p'><a href = 'https://twitter.com/niantendo'>@niantendo</a></p>
        </div>
        <div className ='person'>
          <img className='pro-img' src={yongImg} />
          <h4 className='name'>Yong-Nicholas</h4>
          <p className='single-p'><a href = 'https://twitter.com/yongnicholaskim'>@yongnicholaskim</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
