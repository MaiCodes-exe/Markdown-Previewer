import './App.css'; 
import React,  {useState} from  'react';
import Stack from '@mui/material/Stack';

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
      <Stack spacing={2}>

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
      </Stack>
    </div>
  );
};

export default MarkdownPreviewer;
