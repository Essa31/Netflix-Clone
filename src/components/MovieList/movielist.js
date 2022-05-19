import React from "react";
import Card from "../Movie/movie";
import movieModal from "../ModalMovie/modalMovie";
import { useState } from "react";
import Movie from "../Movie/movie";


import {Container } from "react-bootstrap";
export default function MovieList(props) {
  return (
    <>
           {
            props.trending.map((trend)=>{
                return (
                  <Container fluid className="main-container">
                    <div className="d-flex flex-wrap justify-content-between w-75 ms-auto me-auto">
                      {props.trending.map((trend) => {
                        return (
                          <Movie
                            key={trend.id}
                            trend={trend}
                            updateTrend={props.updateTrend}
                          />
                        );
                      })}
                    </div>
                  </Container>
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