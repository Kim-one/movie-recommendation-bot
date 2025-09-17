import '../styles/chatpage.css';
// import '../styles/chatbot.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

const Chat =()=>{
    const location = useLocation();
    const initialMessage = location.state?.initialMessage || "";
    const [messages, setMessages] = useState(initialMessage);
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        if(initialMessage){
            handleBotResponse(initialMessage)
            setMessages("");
        }
    }, [initialMessage]);

    const handleBotResponse = async (userMessage)=>{
        const newMessage = {user:userMessage, bot:{message:'',recommendations:[]}};
        setChatHistory((prev) => [...prev,newMessage]);

        try{
            const response = await axios.post('http://localhost:5000/chatbot',{messages:userMessage});
            const botMessage = response.data.message;
            const recommendations = response.data.recommendations || [];

            newMessage.bot.message = botMessage;
            newMessage.bot.recommendations = recommendations;

            setChatHistory((prev)=>[...prev.slice(0,-1), newMessage])
        } catch (error){
            console.log("Error communicating with backend", error)
        }
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!messages.trim()) return;

        await handleBotResponse(messages);
        setMessages("");
    };

    return (
        <div className={'chat-page'}>
            {/*CHAT HISTORY CONTAINER*/}
            <div className={'chat-history'}>
                <h2>Chat History</h2>
                <p>New Chats</p>
                <br/>
                <hr/>
                <br/>
                <p>Chats</p>

            </div>
            {/*CHAT BOT CONVERSATION AREA*/}
            <div className={'container2'}>
                <h1 className={'title1'}>ChatBot</h1>
                {chatHistory.map((msg, index)=>(
                    <div className={'msg'} key={index}>
                        <div className={'user'}>
                            <p className={'userChatBubble'}><strong>You:</strong> {msg.user}</p>
                        </div>
                        <div className={'bot'}>
                            <div className={'botChatBubble'}><strong>Bot:</strong> {msg.bot.message} {msg.bot.recommendations && msg.bot.recommendations.length >0 &&(
                                <ul>
                                    {msg.bot.recommendations.map((rec,i)=>(
                                        <li key={i}>
                                            <h4>{rec.title}</h4>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            </div>
                        </div>
                    </div>
                ))}
                {/*CHAT BOT COMPONENT*/}
                {/*<ChatBot/>*/}
                <div className={'chat-container1'}>
                    <div className={`chat-bot1`}>
                        <div className={'chat-img1'}></div>
                        <div className={'chat-input1'}>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type={"text"}
                                    value={messages}
                                    onChange={(e) => setMessages(e.target.value)}
                                    placeholder={"Type your message here ..."}
                                    className={'input1'}
                                />
                                <button type={"submit"}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;