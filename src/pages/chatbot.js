import '../styles/chatbot.css';
import {useState} from "react";
import axios from 'axios';

const ChatBot=()=>{
    const [msg, setMsg] = useState("")
    const [response, setResponse] = useState("")

    const getMessage = async (event)=>{
        event.preventDefault()
        // Send entered text to backend
        try{
            const res = await axios.post('http://localhost:5000/check-sentence', {msg})
            setResponse(res.data);
        } catch (error){
            console.error("Error sending data", error)
        }

        // console.log(`Hello from chatbot: You entered ${msg}`)
    }
    return (
        <div className={'chat-container'}>
            <div className={'chat-bot'}>
                <div className={'chat-img'}></div>
                <div className={'chat-input'}>
                    <form onSubmit={getMessage}>
                        <input type={"text"} onChange={(e)=>setMsg(e.target.value)} value={msg} className={'input'}/>
                        <button type={"submit"}>Submit</button>
                    </form>
                </div>
            </div>
            {response && <p>{response}</p>}
        </div>

        // <div className={'chat-container'}>
        //     <div className={'chat-bot'}>
        //         <div className={'chat-img'}></div>
        //         <div className={'chat-input'}>
        //             <form onSubmit={getMessage}>
        //                 <input type={"text"} onChange={(e) => setMsg(e.target.value) }
        //                        value={msg}
        //                        className={'input'}
        //                        placeholder={'Type something to get a few recommendations (e.g. Recommend a comedy)'}/>
        //                 <button type={'submit'}><button/>
        //             </form>
        //
        //         </div>
        //     </div>
        // </div>
    );
}

export default ChatBot;