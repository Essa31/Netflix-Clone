import { useState,useEffect} from "react";
import MovieList from "../MovieList/movielist";
    

export default function Home() {
    const [trending, setTrending] = useState([]);
    async function getMovies(){
    let url =process.env.REACT_APP_SERVER
    console.log("1,url", url);
    let response = await fetch(`${url}/trending`);
    console.log("2,response", response);
    let movieData=await response.json()
       console.log("3,response", movieData);
    setTrending(movieData)
    }
    useEffect(() => {
        getMovies();
      }, []);
      return (
        <>
          <h1>Home Page</h1>
          {
            (trending.length>0)&&<MovieList trending={trending} />
          }
        </>
      );
}
// const [trending, setTrending] = useState([]);
//     useEffect(() => {
//         getData();
       
//     }, []);
  
//     async function getData() {
        
//         let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);

//         // let data = await response.json();
//         let resp = JSON.stringify(response);
//         let  res = JSON.parse(resp);
//         console.log(res)
//         console.log(response)
//         setTrending(res);
      
//     }
    
    
//     return (
//         <>
//             <h1>From home page</h1>
//             <Navbar />
//             <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
//                 {trending && <MovieList trendingMovie={trending} />}                
//             </div>


//         </>
//     )