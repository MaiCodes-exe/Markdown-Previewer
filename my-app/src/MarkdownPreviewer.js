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
        width: 400,
        height: 300,
        backgroundColor: 'primary.dark'
      
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
      </Container>

      <div>
      <Container sx={{
        width: 400,
        height: 300,
        backgroundColor: 'primary.dark'
      
      }}>
        <h3>Preview</h3>

        <div id='preview'>
        <div dangerouslySetInnerHTML={getMarkdownText()} />
        </div>
      </Container>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
