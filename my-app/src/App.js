import './App.css';
import {Button} from "@mui/material"


function App() {
  const [markdown, setMarkdown] = useState('');
  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };
  const getMarkdownText = () => {
    return { __html: marked(markdown) };
  };

}

export default App;
