import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import MovieModal from "../ModalMovie/modalMovie";
export default function Movie(props) {
  const [show, setShow] = useState(false);
  const [choosenCard, setChoosenCard] = useState();
  const handleShow = (trend) => {
    setShow(true);
    setChoosenCard(trend);
  };
  const handleClose = (trend) => {
    setShow(false);
  };
  return (
    <>
      <Card
        style={{
          width: "18rem",
          textAlign: "center",
          marginTop: "3rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Card.Img
          variant="top"
          src={`http://image.tmdb.org/t/p/w500/
${props.trend.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{props.trend.title}</Card.Title>
          <Card.Text>{props.trend.overview}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              handleShow(props.trend);
            }}
          >
            Show Details{" "}
          </Button>
        </Card.Body>
      </Card>
      {choosenCard && (
        <MovieModal
          show={show}
          handleClose={handleClose}
          choosenCard={choosenCard}
          updateTrend={props.updateTrend}
        />
      )}
    </>
  );
}
