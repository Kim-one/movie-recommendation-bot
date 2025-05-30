import '../styles/home.css';
import {useEffect, useState} from "react";
import ChatBot from "./chatbot";

const Home =()=>{
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000")
            .then((res) => {
                if(!res.ok){
                    throw new Error("Error")
                }
                return res.json();
            })
            .then((data) => {
                setData(data)
                // console.log(data)
            })
            .catch((error) => {
                console.log("An error occurred: ", error)
            });
    }, []);

    // function OpenChatBot(){
    //     return <div>Hello</div>
    // }

    return (
        <div>
            <div className={'home-container'}>
                {/*Home Works*/}
                <div className={'outer-container'}>
                    <div className={'top-recommended'}></div>
                    <div className={'main-container'}>
                        <div className={'container1'}>
                            <p className={'title'}>Action & Adventure</p>
                            {data.filter(movie=>movie["listed_in"].includes('Action & Adventure') && movie["release_year"]>= 2020)
                                .map((movie, index)=>(
                                    <div key={index} className={'show-container'}>
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*/>*/}
                                        {/*{movie.title}*/}
                                        {/*{movie.title && movie.title[0] ? movie.title[0] : 'No Title'}*/}
                                    </div>
                                ))};
                        </div>
                        <div className={'container1'}>
                            <p className={'title'}>Drama</p>
                            {data.filter(movie=>movie["listed_in"].includes('Dramas') && movie["release_year"]>= 2020)
                                .map((movie, index)=>(
                                    <div key={index} className={'show-container'}>
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*/>*/}
                                        {/*{movie.title}*/}
                                        {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                                    </div>
                                ))};

                        </div>
                        <div className={'container1'}>
                            <p className={'title'}>Comedy</p>
                            {data.filter(movie=>movie["listed_in"].includes('Comedies') && movie["release_year"]>= 2020)
                                .map((movie, index)=>(
                                    <div key={index} className={'show-container'}>
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*/>*/}
                                        {/*{movie.title}*/}
                                        {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                                    </div>
                                ))};
                        </div>
                        <div className={'container1'}>
                            <p className={'title'}>Crime</p>
                            {data.filter(movie=>movie["listed_in"].includes('Crime') && movie["release_year"]>= 2020)
                                .map((movie, index)=>(
                                    <div key={index} className={'show-container'}>
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*/>*/}
                                        {/*{movie.title}*/}
                                        {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                                    </div>
                                ))};
                        </div>
                        <div className={'container1'}>
                            <p className={'title'}>Romance</p>
                            {data.filter(movie=>movie["listed_in"].includes('Romantic') && movie["release_year"]>= 2020)
                                .map((movie, index)=>(
                                    <div key={index} className={'show-container'}>
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*/>*/}
                                        {/*{movie.title}*/}
                                        {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                                    </div>
                                ))};
                        </div>
                        <div className={'container1'}>
                            <p className={'title'}>Sci-Fi</p>
                            {data.filter(movie=>movie["listed_in"].includes('Sci-Fi & Fantasy') && movie["release_year"]>= 2020)
                                .map((movie, index)=>(
                                    <div key={index} className={'show-container'}>
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*/>*/}
                                        {/*{movie.title}*/}
                                        {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                                    </div>
                                ))};
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ChatBot></ChatBot>
            </div>
        </div>

    )
};

export default Home;