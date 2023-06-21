import './App.css';
import {useState} from  'react';

import marked from 'marked';


function App() {
  const [markdown, setMarkdown] = useState('');
  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };
  const getMarkdownText = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="App">
      <div className="input-container">
        <textarea
          id="markdown-input"
          value={markdown}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div
        id="markdown-preview"
        className="preview-container"
        dangerouslySetInnerHTML={getMarkdownText()}
      ></div>
    </div>
  );
}

export default App;