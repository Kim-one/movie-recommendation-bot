import '../styles/chatpage.css';
import {useState} from "react";
import axios from "axios";

const Chat =()=>{
    const [messages, setMessages] = useState('')
    const [input, setInput] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newMessage = {user: messages, bot: ''};
        setInput([...input, newMessage]);

        try{
            const response = await axios.post('http://localhost:5000/chatbot', {messages});
            const botMessage = response.data.response;
            newMessage.bot = botMessage;
            setInput([...input, newMessage]);
        } catch (error){
            console.error("Error communicating with the backend", error);
        }

        setMessages('');
        // const response = await fetch('http://localhost:5000/chatbot',{
        //     method:'POST',
        //     headers:{'Content-Type': 'application/json'},
        //     body: JSON.stringify({messages:input}),
        // });
        // const data = await response.json();
        // setMessages([...messages,{text:input, from: 'user'}, {text:data.response, from: 'bot'}]);
        // setInput('');
    };

    return (
        <div className={'chat-page'}>
            <h1 className={'title'}>ChatBot</h1>
            <div>
                {input.map((msg, index)=>(
                    <div key={index}>
                        <p><strong>You:</strong> {msg.user}</p>
                        <p><strong>Bot:</strong> {msg.bot}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    value={messages}
                    onChange={(e) => setMessages(e.target.value)}
                    placeholder={"Type your message ..."}
                />
                <button type={"submit"}>Send</button>
            </form>
        </div>
    )
}

export default Chat;