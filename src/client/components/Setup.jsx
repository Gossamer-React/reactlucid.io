import React from 'react';
import '../setup.css';

const Setup = () => {
  return (
    <div id='lucid-setup'>
      <h2>Setup</h2>

      <table id='table-setup'>
        <thead>
          <tr className='table-headings'>
            <th> <i className="fab fa-chrome"></i> Install from Chrome Extension Store</th>
            <th> <i className="fas fa-download"></i> Build your own extension</th>
          </tr>
          <tr className='table-headings'>
            <td>1. Install <a href='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en'>React Developer Tools</a>.</td>
            <td>1. Clone the repo and npm install</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2. Install <a href='https://chrome.google.com/webstore/detail/lucid/pnaoeldlekbfpnalhabggkcddleelamc'>Lucid</a> or <b className='strong'>Build your own extension</b>.</td>
            <td>2. npm run build</td>
          </tr>
          <tr>
            <td>
              3. Run your React-GraphQL application or open a site that uses React
              v16+ or GraphQL.
          </td>
            <td>
              3. Navigate to chrome://extensions.
          </td>
          </tr>
          <tr>
            <td>
              4. Open Chrome Developer Tools (Inspect) and click on the Lucid panel.
          </td>
            <td>
              4. Click <b className='strong'>Load Unpacked</b> and select the './react-lucid/build' folder
              from your local directory.
          </td>
          </tr>
          <tr>
            <td>5. Have fun!</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Setup;
