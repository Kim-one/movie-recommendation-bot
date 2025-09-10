import '../styles/chatbot.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const ChatBot=()=>{
    const [messages, setMessages] = useState("")
    const navigate = useNavigate();

    const submitMsg =  (e) => {
        e.preventDefault();
        if (!messages.trim()) return;

        navigate("/chatbot", {state:{initialMessage: messages}});

        setMessages("")
        console.log(messages)
    };

    return (
        <div className={'chat-container'}>
            <div className={'chat-bot'}>
                <div className={'chat-img'}></div>
                <div className={'chat-input'}>
                    <form onSubmit={submitMsg}>
                        <input type={"text"} onChange={(e)=>setMessages(e.target.value)} value={messages} className={'input'}/>
                        <button type={"submit"}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChatBot;