import React from 'react';
import '../content.css';

const Content = () => {
  return (
    <div>
      <h2>Enjoy our developer tool? Follow us and give a star.</h2>
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

      <p id='lucid-bio'>
        Lucid is a React / GraphQL Chrome Developer Tool designed to help
        developers debug their React applications that depend on GraphQL
        resources. Lucid allows you to visualize the component hierarchy of your
        React application, and your GraphQL schema, queries, and mutations side
        by side, making debugging fast and focused.
        <br/>
        <br/>
        <span>
          IMPORTANT: Lucid is in BETA mode and works best for React v16+ local
          projects in development environments.
        </span>
      </p>
    </div>
  );
};
export default Content;
