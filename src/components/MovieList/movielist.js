import React from "react";
import Card from "../Movie/movie";
import MytrendModal from "../ModalMovie/modalMovie";
import { useState } from "react";
import Movie from "../Movie/movie";
export default function MovieList(props) {
  return (
    <>
        {
        props.trending.map((trend)=>{
            return (
              <>
                <Movie trend={trend} />
              </>
            );
        })
        }
    </>
    
)
}
 // const [show, setShow] = useState(false);
  // const [chosenRecipe, setChosenRecipe] = useState();
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // function handelChosenMovie(data) {
  //   setChosenRecipe(data);
  //   handleShow();
  // }
  // return (
  //   <>
  //     { props.trendingMovie.map(trend => {
  //       return (
  //         <>
  //           <Card movie={trend} handelChosenMovie={handelChosenMovie} />

  //         </>
  //       );
  //     })}
  //     {chosenRecipe && (
  //       <MytrendModal
  //       movies={chosenRecipe}
  //         show={show}
  //         handleClose={handleClose}
  //       />
  //     )}
  //   </>
  // );