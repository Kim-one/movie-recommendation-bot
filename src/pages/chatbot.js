import '../styles/chatbot.css';

const Chatbot=()=>{
    return (
        <div className={'chat-container'}>
            {/*<h1>Chatbot Works</h1>*/}
            <div className={'inner-container'}>
                <div className={'heading'}>
                    <h1>Netflix Recommendation Bot</h1>
                </div>
                <div className={'text'}>
                    <p>Tell me what you'ld like to watch, and I'll give you some recommendations</p>
                </div>
                <div className={'container'}>
                    <div className={'drop-down-menu'}>
                        <p className={'text'}>Select a genre</p>
                        <select>
                            <option>Select a genre</option>
                            <option>Adventure</option>
                            <option>Action</option>
                            <option>Comedy</option>
                            <option>Drama</option>
                            <option>Horror</option>
                            <option>Romance</option>
                            <option>Thriller</option>
                        </select>
                    </div>
                    <div className={'filter'}>
                        <label className={'text'}>Enter title:</label>
                        <br/>
                        <input className={'filer-field'}/>
                    </div>
                </div>
                <div className={'buttons'}>
                    <button className={'btn'}>Get Recommendations</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;