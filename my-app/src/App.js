import React from 'react';
import './App.css'; 
import  {MarkdownPreviewer} from './MarkdownPreviewer';



// import { createTheme } from '@mui/material/styles';
// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//   },
// });
const App = () => {
  return (
    <div className='App'>
      <MarkdownPreviewer />
    </div>
  );
};

export default App;
