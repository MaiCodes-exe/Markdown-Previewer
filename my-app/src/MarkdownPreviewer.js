import './App.css'; 
import React,  {useState} from  'react';
import Container from '@mui/material/Button';


import {marked} from 'marked';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div>
      <h2>Markdown Previewer</h2>
      <div>
        <textarea
          rows="10"
          cols="50"
          value={markdown}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <Container color='primary'>
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={getMarkdownText()} />
      </Container>
    </div>
  );
};

export default MarkdownPreviewer;
