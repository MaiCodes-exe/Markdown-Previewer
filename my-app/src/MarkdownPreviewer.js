import './App.css'; 
import React,  {useState} from  'react';
import Container from '@mui/material/Container';
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
      <Container
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div>
        <textarea
          rows="10"
          cols="50"
          value={markdown}
          onChange={handleInputChange}
        ></textarea>
      </div>
 
      <div>
        <h3>Preview</h3>

        <div id='preview'>
        <div dangerouslySetInnerHTML={getMarkdownText()} />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default MarkdownPreviewer;
