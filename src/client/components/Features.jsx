import React from 'react';
import graphqlDemo from './../../../public/assets/demo-photo-graphql.png';
import reactDemo from './../../../public/assets/demo-photo-react.png';
import '../features.css';

const Features = () => {
  return (
    <div id='features'>
      <h2>How Lucid Works</h2>
      <h3>React Tab</h3>
      <div className='lucid-features'>
        <div>
          <li>
            Utilizing React Devtool's Global Hook, Lucid is able to recursively
            traverse the DOM, retrieving information about rendered nodes that is
            used to display a React component tree graph.
          </li>

          <li>
            Hovering over any React component displayed in the tree graph
            will display its state and props.
          </li>

          <li>
            Lucid's component display also allows users to filter out boilerplate
            components from user created components, reducing clutter and complexity.
          </li>

          <li>
            Lucid provides a state diff log which tracks changes in stateful
            components whenever setState( ) is triggered.
          </li>
        </div>
        <img class='demo' src={graphqlDemo} />
      </div>
      <h3>GraphQL Tab</h3>
      <div className='lucid-features'>
        <div>
          <li>
            Leveraging Chrome's devtool.network API, Lucid is able to provide
            information about an application's external GraphQL queries.
          </li>
          <li>
            Lucid is also able to display GraphQL schema information from the server 
            using Apollo's schema introspection.
          </li>
          <li>
            Lucid logs all GraphQL request/response cycles initiated by the app,
            providing an historical view of all external data, and the ability to
            review all previous resource fetches.
          </li>
          <li>
            Lucid is currently optimized for Apollo server. In future releases, we
            plan to provide support for other GraphQL server implementations.
          </li>
        </div>
        <img class='demo' src={reactDemo} />
      </div>
    </div>
  );
};

export default Features;
