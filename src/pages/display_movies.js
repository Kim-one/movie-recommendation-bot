import '../styles/display_movie.css';
import '../styles/home.css';
import {useEffect, useState} from "react";
import ChatBot from "./chatbot";

const DisplayMovies =()=>{
    const [data,setData]= useState([])

    useEffect(() => {
        fetch('http://localhost:5000')
            .then((res=>{
                return res.json();
            }))
            .then((data)=>{
                setData(data)
            })
            .catch((error)=>{
                console.log("An error occurred fetching data: ", error)
            })
    }, []);

    return (
        <div>
            <div className={'display-movie-container'}>
                {/*Show Movie*/}
                <div className={'outer-container'}>
                    <div className={'main-container'}>
                        <div className={'top-recommended'}></div>
                        <div className={'container1'}>
                            <p className={'title'}>Action & Adventure</p>
                            {data.filter(movie=>movie["listed_in"].includes("Action & Adventure") && movie["type"] === "Movie" && movie["release_year"]>=2020)
                                .map((movie,index)=>(
                                    <div key={index} className={'show-container'}>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*/>*/}
                                        {/*{movie.title}*/}
                                        {/*{movie.type}*/}
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                    </div>
                                ))}
                        </div>
                        <div className={'container1'}>
                            <p className={'title'}>Comedies</p>
                            {data.filter(movie=>movie["listed_in"].includes("Comedies") && movie["type"] === "Movie" && movie["release_year"]>=2020)
                                .map((movie,index)=>(
                                    <div key={index} className={'show-container'}>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*/>*/}
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*{movie.title}*/}
                                        {/*{movie.type}*/}
                                    </div>
                                ))}
                        </div>
                        <div className={'container1'}>
                            <p className={'title'}>Drama</p>
                            {data.filter(movie=>movie["listed_in"].includes("Drama") && movie["type"] === "Movie" && movie["release_year"]>=2020)
                                .map((movie,index)=>(
                                    <div key={index} className={'show-container'}>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*/>*/}
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*{movie.title}*/}
                                        {/*{movie.type}*/}
                                    </div>
                                ))}
                        </div>
                        <div className={'container1'}>
                            <p className={'title'}>Romance</p>
                            {data.filter(movie=>movie["listed_in"].includes("Romantic") && movie["type"] === "Movie" && movie["release_year"]>=2020)
                                .map((movie,index)=>(
                                    <div key={index} className={'show-container'}>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*/>*/}
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*{movie.title}*/}
                                        {/*{movie.type}*/}
                                    </div>
                                ))}
                        </div>
                        <div className={'container1'}>
                            <p className={'title'}>Sci-Fi & Fantasy</p>
                            {data.filter(movie=>movie["listed_in"].includes("Sci-Fi") && movie["type"] === "Movie" )
                                .map((movie,index)=>(
                                    <div key={index} className={'show-container'}>
                                        {/*<img*/}
                                        {/*    src={movie.poster_url || null}*/}
                                        {/*    alt={movie.title}*/}
                                        {/*    height={'166vh'}*/}
                                        {/*    width={'192vw'}*/}
                                        {/*/>*/}
                                        <p>{movie.title}</p>
                                        <p>{movie.type}</p>
                                        <p>{movie.release_year}</p>
                                        {/*{movie.title}*/}
                                        {/*{movie.type}*/}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ChatBot/>
            </div>
        </div>
    );
};

export default DisplayMovies;