import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';


// import { Button, ButtonGroup } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} />
      {/* <Button colorScheme='blue'>Button</Button> */}
    </div>
  );
}

export default App;
