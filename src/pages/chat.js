import '../styles/chatpage.css';
import '../styles/chatbot.css';
import {useState} from "react";
import axios from "axios";
// import ChatBot from "./chatbot";

const Chat =()=>{
    const [messages, setMessages] = useState('');
    const [input, setInput] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newMessage = {user: messages, bot: ''};

        //user input
        setInput((prev)=>[...prev, newMessage]);

        try{
            const response = await axios.post('http://localhost:5000/chatbot', {messages});
            const botMessage = response.data.message;
            const recommendations = response.data.recommendations || [];

            newMessage.bot = {message:botMessage, recommendations}
            console.log(newMessage.bot)
            // newMessage.bot = botMessage;
            // setInput((prev)=>[...prev,{user:messages, bot:botMessage}]);
        } catch (error){
            console.error("Error communicating with the backend", error);
        }

        setMessages('');
    };

    return (
        <div className={'chat-page'}>
            <h1 className={'title1'}>ChatBot</h1>
            <div>
                {input.map((msg, index)=>(
                    <div className={'msg'} key={index}>
                        <p className={'userChatBubble'}><strong>You:</strong> {msg.user}</p>
                        <p className={'botChatBubble'}><strong>Bot:</strong> {msg.bot.message}</p>
                        {msg.bot.recommendations && msg.bot.recommendations.length >0 &&(
                            <ul>
                                {msg.bot.recommendations.map((rec,i)=>(
                                    <li key={i}>
                                        <h4>{rec.title}</h4>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            {/*<ChatBot></ChatBot>*/}
            <div className={'chat-container1'}>
                <div className={`chat-bot`}>
                    <div className={'chat-img'}></div>
                    <div className={'chat-input'}>
                        <form onSubmit={handleSubmit}>
                            <input
                                type={"text"}
                                value={messages}
                                onChange={(e) => setMessages(e.target.value)}
                                placeholder={"Type your message ..."}
                                className={'input'}
                            />
                            <button type={"submit"}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;