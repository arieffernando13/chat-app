import './App.css';
import { ChatEngine } from 'react-chat-engine'
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const projectID = '361959fa-63ee-470c-87d3-914242034722'



const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>;

return (
  <ChatEngine 
    height="100vh"
    projectID={projectID}
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
)

}

export default App;
