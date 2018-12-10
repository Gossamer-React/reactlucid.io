import React from 'react';
import '../features.css';

const Features = () => {
  return (
    <div id='features'>
      <h2>How Lucid Works</h2>
      <h3>React Tab</h3>
      <div className='lucid-features'>
        <div>
          <li>
            Utilizing React Devtool's Global Hook Lucid is able to recursively
            traverse through the DOM retrieving information that is used to
            display in a tree diagram.
          </li>

          <li>
            Hovering over any React component on that is displayed on the tree
            will display the state and props in a log on the top left.
          </li>

          <li>
            Lucid also gives a user the freedom to toggle out boilerplate
            components that may just take up unnecessary space.
          </li>

          <li>
            Lucid provides a state diff log as well. Which tracks the changes in
            your state whenever setState( ) is triggered.
          </li>
        </div>
        <h3>This is where the example will go!</h3>
      </div>
      <h3>GraphQL Tab</h3>
      <div className='lucid-features'>
        <div>
          <li>
            Leveraging the devtool.network API Lucid is able to provide
            information about a application's GraphQL queries.
          </li>
          <li>
            Lucid is also able to display schema informationrom the server using
            the GraphQL schema introspection.
          </li>
          <li>
            Lucid logs out all previous request the application has made,
            allowing the user's to view all associated data with that previous
            request.
          </li>
          <li>
            Users are able to toggle the information close if a user would like
            to hide any information.
          </li>
        </div>
        <h3>This is where the example will go!</h3>
      </div>
    </div>
  );
};

export default Features;
