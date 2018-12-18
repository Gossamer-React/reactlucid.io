import React from 'react';
import graphqlDemo from './../../../public/assets/demo-photo-graphql.png';
import reactDemo from './../../../public/assets/demo-photo-react.png';
import apollo from './../../../public/assets/apollo-logo.png';
import '../features.css';

const Features = () => {
  return (
    <div id='features'>
      <h2>How Lucid Works</h2>
      <h3>GraphQL Tab</h3>
      <h4>Lucid leverages Apollo's schema introspection and Chrome Devtool APIs to display GraphQL schema and query information from the server, allowing full-stack developers to debug their applications from the front-end to the back-end.
      </h4>
      <div className='lucid-features'>
        <div>
          <div className='bullets'>
            <i class="fas fa-history fa-2x"></i>
            <li>
              Lucid logs all GraphQL request/response cycles initiated by the app,
              providing an historical view of all external data, and the ability to
              review all previous resource fetches.
            </li>
          </div>
          <div className='bullets'>
            <i class="fas fa-search-plus fa-2x"></i>
            <li>
              Lucid displays GraphQL schema information from the server 
              using Apollo's schema introspection.
            </li>
          </div>
          <div className='bullets'>
            <img src={apollo} width='32' height='32'/>
            <li>
              Lucid is currently optimized for Apollo server. In future releases, we
              plan to provide support for other GraphQL server implementations.
            </li>
          </div>
        </div>
        <img className='demo' src={graphqlDemo} />
      </div>

      <h3>React Tab</h3>
      <h4>
      Lucid parses through React applications to generate a real-time interactive tree graph representing the app's React component hierarchy, with node-specific state and props data.
      </h4>
      <div className='lucid-features'>
        <div>
          <div className='bullets'>
            <i class="fas fa-sitemap fa-2x" style={{width: '32px'}}></i>
            <li>
              Hovering over any React component displayed in the tree graph
              will display its state and props.
            </li>
          </div>
          <div className='bullets'>
            <i class="fas fa-clipboard-list fa-2x" style={{width: '32px'}}></i>
            <li>
              Lucid provides a state diff log which tracks changes in stateful
              components whenever setState is triggered.
            </li>
          </div>
          <div className='bullets'>
            <i class="fas fa-filter fa-2x"></i>
            <li>
              Lucid's component display also allows users to filter out boilerplate
              components from user created components, reducing clutter and complexity.
            </li>
          </div>
        </div>
        <img className='demo' src={reactDemo} />
      </div>
    </div>
  );
};

export default Features;
