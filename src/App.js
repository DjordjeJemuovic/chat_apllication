import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="192d2808-3d77-486b-b88e-5f5e0e77c02a"
        userName="Djordje Master"
        userSecret="123456"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
        />
    );
}
export default App ;