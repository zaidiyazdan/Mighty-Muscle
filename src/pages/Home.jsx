import {useState} from 'react'
import {Box} from '@mui/material'
import { HeroBanner } from '../components/HeroBanner'
import { SeachExercises } from '../components/SeachExercises'
import { Exercises } from '../components/Exercises'

export const Home = () => {
  const [bodyPart,setBodyPart] = useState('all');
  const [exercises,setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SeachExercises setExercises={setExercises} 
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises} 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  )
}
