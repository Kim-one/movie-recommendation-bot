import '../styles/display_shows.css';
import '../styles/home.css';
import {useEffect, useState} from "react";
// import Home from "./home";

const DisplayShows =()=>{
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000')
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setData(data)
            })
            .catch((error)=>{
                console.log('Error fetching data: ', error)
            })
    }, []);

    return (
        <div className={'display-shows-container'}>
            {/*Show Shows*/}
            <div className={'outer-container'}>
                <div className={'main-container'}>
                    <div className={'container1'}>
                        <p className={'title'}>Action & Adventure</p>
                        {data.filter(movie=>movie["listed_in"].includes('Action & Adventure') && movie["type"]==="TV Show")
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    {/*{movie.title}*/}
                                    {/*{movie.type}*/}
                                    <img
                                        src={movie.poster_url || null}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className={'container1'}>
                        <p className={'title'}>Dramas</p>
                        {data.filter(movie=>movie["listed_in"].includes('Dramas') && movie["type"]==="TV Show")
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    {/*{movie.title}*/}
                                    {/*{movie.type}*/}
                                    <img
                                        src={movie.poster_url || null}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className={'container1'}>
                        <p className={'title'}>Crime</p>
                        {data.filter(movie=>movie["listed_in"].includes('Crime') && movie["type"]==="TV Show")
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    {/*{movie.title}*/}
                                    {/*{movie.type}*/}
                                    <img
                                        src={movie.poster_url || null}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className={'container1'}>
                        <p className={'title'}>Comedy</p>
                        {data.filter(movie=>movie["listed_in"].includes('Comedies') && movie["type"]==="TV Show")
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    {/*{movie.title}*/}
                                    {/*{movie.type}*/}
                                    <img
                                        src={movie.poster_url || null}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className={'container1'}>
                        <p className={'title'}>Romantic</p>
                        {data.filter(movie=>movie["listed_in"].includes('Romantic') && movie["type"]==="TV Show")
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    {/*{movie.title}*/}
                                    {/*{movie.type}*/}
                                    <img
                                        src={movie.poster_url || null}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className={'container1'}>
                        <p className={'title'}>Sci-Fi & Fantasy</p>
                        {data.filter(movie=>movie["listed_in"].includes('Sci-Fi & Fantasy') && movie["type"]==="TV Show")
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    {/*{movie.title}*/}
                                    {/*{movie.type}*/}
                                    <img
                                        src={movie.poster_url || null}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                </div>
                            ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DisplayShows;