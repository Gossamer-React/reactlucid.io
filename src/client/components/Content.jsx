import React from 'react';

const Content = () => {

  return (      
    <div className='content'>
      <h2>Please give us stars!!!</h2>
      <p>Lucid is a React / GraphQL Chrome Developer Tool designed to help developers debug their React applications that depend on GraphQL resources. Lucid allows you to visualize the component hierarchy of your React application, and your GraphQL schema, queries, and mutations side by side, making debugging fast and focused.</p><p>IMPORTANT: Lucid is in BETA mode and works best for React v16+ local projects in development environments.</p>

      <h2>How It Works</h2>
      <h3>React Tab</h3>
      <p>Lucid parses through your React app to generate an interactive tree graph representing your React component hierarchy, with node-specific state and props data. The tree updates upon each change to the React app's state, and displays a log of state diffs on the left. This is done by creating a persistent data bridge to the user's React application via the Javascript API for WebExtensions' background and content scripts. Lucid injects scripts utilizing React DevTool's Global Hook to recursively traverse through the React DOM each time setState is called, resulting in a tree and a log that each display real-time feedback. Our app itself uses React internally so as the state of your live app changes, the Lucid tree graph will also provide visual feedback of data flow and state changes through the React components immediately.</p>
      <h3>GraphQL Tab</h3>
      <p>Lucid intercepts HTTP requests using Chrome Devtool APIs to display a log of real-time Apollo client queries and mutations, along with associated response objects. Lucid also uses GraphQL schema introspection to display schema information from the server. This allows full-stack developers to debug their app from the front-end all the way through to the back-end, as requests are generated, responses come back from the server, data flows through React components, and render in the DOM.</p>

    </div>
  )

} 
export default Content;