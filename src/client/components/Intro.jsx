import React from 'react';
import demo from './../../../public/assets/demo.mp4';
import logos from './../../../public/assets/graphql-react-logos.png';
import '../intro.css';

const Intro = () => {
  return (
    <div>
      <div>
      <img src={logos} height='100px' />
      <h1>Lucid</h1>
      <p id='lucid-bio'>
      A Chrome Developer Tool designed to help engineers debug React-GraphQL applications.
      </p>
      <p>Visualize the component hierarchy, state/props data and state changes of your React application</p>
      <p>See your GraphQL schema, queries, and mutations in real-time</p>
      <video loop autoPlay controls width='100%' muted >
        <source src={demo} type='video/mp4' />
      </video>
      </div>
      <h3>Like our developer tool? Give us a star!</h3>

      <div id='github-btns'>
        {/* allows a user to follow our repo by watching the repo */}
        <a
          id='github-watch'
          className='github-button'
          href='https://github.com/Gossamer-React/Lucid/subscription'
          data-icon='octicon-eye'
          data-size='large'
          data-show-count='true'
          aria-label='Watch Gossamer-React/Lucid on GitHub'
        >
          Watch
        </a>
        <div className='space' />
        {/* A button created for a vistor to star our repo */}
        <a
          className='github-button'
          href='https://github.com/Gossamer-React/Lucid'
          data-icon='octicon-star'
          data-size='large'
          data-show-count='true'
          aria-label='Star Gossamer-React/Lucid on GitHub'
        >
          Star
        </a>
      </div>


    </div>
  );
};
export default Intro;
