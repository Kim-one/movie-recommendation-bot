import '../styles/home.css';
import {useEffect, useState} from "react";

const Home =()=>{
    // let new_data = JSON.stringify(data)
    const[data, setData] = useState([]);
    // let new_data = JSON.stringify(data)
    // console.log(data)
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
                console.log(data)
            })
            .catch((error) => {
                console.log("An error occurred: ", error)
            });
    }, []);
    const genres = {};

    // Loop through data to organize by genres
    data.forEach(movie=>{
        const movieGenres = movie.listed_in.split(', TV')// split genres by comma
        movieGenres.forEach(listed_in=>{
            if(!genres[listed_in]){
                genres[listed_in] =[]
            }
            genres[listed_in].push(movie)
        })
    })
    console.log("Genres: ")
    console.log(genres)

    return (
        <div className={'home-container'}>
            {/*Home Works*/}
            <div className={'outer-container'}>
                <div className={'top-recommended'}></div>
                <div className={'main-container'}>
                    <div className={'container1'}>
                        <p className={'title'}>Action & Adventure</p>

                        {data.filter(movie=>movie.listed_in.split(', ').includes('Action & Adventure'))
                            .map((movie, index)=>(
                            <div key={index} className={'show-container'}>
                                <img
                                    src={movie.poster_url}
                                    alt={movie.title}
                                    width={'192vw'}
                                    height={'166vh'}
                                />
                                {/*{movie.title}*/}
                                {/*{movie.title && movie.title[0] ? movie.title[0] : 'No Title'}*/}
                            </div>
                        ))};
                    </div>
                    <div className={'container1'}>
                        <p className={'title'}>Drama</p>

                        {data.filter(movie=>movie.listed_in.includes('Dramas'))
                            .map((movie, index)=>(
                            <div key={index} className={'show-container'}>
                                <img
                                    src={movie.poster_url}
                                    alt={movie.title}
                                    width={'192vw'}
                                    height={'166vh'}
                                />
                                {/*{movie.title}*/}
                                {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                            </div>
                        ))};

                    </div>
                    <div className={'container2'}>
                        <p className={'title'}>Comedy</p>
                        {data.filter(movie=>movie.listed_in.includes('Comedies'))
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    <img
                                        src={movie.poster_url}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                    {/*{movie.title}*/}
                                    {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                                </div>
                            ))};
                    </div>
                    <div className={'container3'}>
                        <p className={'title'}>Crime</p>
                        {data.filter(movie=>movie.listed_in.includes('Crime'))
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    <img
                                        src={movie.poster_url}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                    {/*{movie.title}*/}
                                    {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                                </div>
                            ))};
                    </div>
                    <div className={'container3'}>
                        <p className={'title'}>Romance</p>
                        {data.filter(movie=>movie.listed_in.includes('Romantic'))
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    <img
                                        src={movie.poster_url}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                    {/*{movie.title}*/}
                                    {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                                </div>
                            ))};
                    </div>
                    <div className={'container3'}>
                        <p className={'title'}>Sci-Fi</p>
                        {data.filter(movie=>movie.listed_in.includes('Sci-Fi & Fantasy'))
                            .map((movie, index)=>(
                                <div key={index} className={'show-container'}>
                                    <img
                                        src={movie.poster_url}
                                        alt={movie.title}
                                        width={'192vw'}
                                        height={'166vh'}
                                    />
                                    {/*{movie.title}*/}
                                    {/*{movie.Title && movie.Title[0] ? movie.Title[0] : 'No Title'}*/}
                                </div>
                            ))};
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;