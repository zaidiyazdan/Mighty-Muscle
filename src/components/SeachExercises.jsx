import React, {useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from "@mui/material"
import { fetchData,exerciseOptions} from '../utils/fetchData';
import HorizontalScrollbar from "./HorizontalScrollbar"


export const SeachExercises = ({setExercises,bodyPart,setBodyPart}) => {

    const [text,SetText] = useState("");
    const [bodyParts,setBodyParts] = useState([]);

    useEffect(()=>{
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            setBodyParts(['all',...bodyPartsData]);
            console.log(bodyParts);
        }
        fetchExercisesData();
    },[])

    
    const handleSearch = async () => {
        if(text)
        {   
            const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions);
            console.log(exercisesData)

            const searchedExercised = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase.include(text) ||  exercise.target.toLowerCase.include(text)||  exercise.equipment.toLowerCase.include(text)||  exercise.bodyPart.toLowerCase.include(text)
            )

            SetText("");
            setExercises(searchedExercised);
        }
    }

    
  return (
    <Stack alignItems="center" mt="100px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{
            fontSize: {lg : '44px', xs: '30px'} 
        }} mb="50px" textAlign="center">
            Awsome Exercises You <br/> Should know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{input: {
                fontWeight: '700' ,border: 'none' ,borderRadius: "4px"},
                width: {lg: '750px', xs: '350px'},
                background: "fff",
                borderRadius: "40px"
            }}            height="76px" value={text} onChange={ (e) => {SetText(e.target.value.toLowerCase())}}placeholder="Seach Exercises" type='text'/>
            <Button className='search-btn' sx={{
                background: '#FF2625',
                color: '#fff',
                textTransform: 'none',
                width: {lg: '175px', xs: '80px'},
                fontSize: { lg: '20px', xs: '14px'},
                height: "56px",
                position: "absolute",
                right: '0'
            }}
            onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}
