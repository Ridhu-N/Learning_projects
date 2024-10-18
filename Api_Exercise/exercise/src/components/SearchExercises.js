import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { InputGroup, Form } from "react-bootstrap";
import { fetchData } from "../utils/fetchData";
import { exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar  from "./HorizontalScrollbar";
import {Box} from '@mui/material'
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState("");
  
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      // console.log(exercisesData);
      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch(" ");
      setExercises(searchExercises);
    }
  };

  return (
    <div className="container">
      <div className="row ">
        <Box style={{display:'flex',justifyContent:'center'}}>
          <h3>
            Awesome Exercises You <br /> <center>should know</center>
          </h3>
       </Box>
      </div>
      <Box>        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            style={{ height: "46px", width: "auto" }}
          />
        </InputGroup>
        <Button
          style={{
            backgroundColor: "#FF2625",
            width: "100px",
            textTransform: "none",
            height: "40px",
            position: "relative",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
     </Box>
      <div className="d-flex">
      <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </div>
    </div>
  );
};

export default SearchExercises;
