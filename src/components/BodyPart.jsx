import { Stack,Typography } from "@mui/material"
import Icon from "../assets/icons/gym.png"

const BodyPart = ({item,bodyPart,setBodyPart}) => {
    <Stack 
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx = {
                bodyPart === item ? {
                    borderTop: '4px solid #FF2625',
                    backgroundColor: '#FFF',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: "pointer",
                    gap: '47px',
                } : {
                    backgroundColor: '#FFF',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: "pointer",
                    gap: '47px',
                }
            }
            >
        <img src={Icon} alt="bumbell" style={{width: '40px' , height: '40px'}}/>
        <h1>check check</h1>
    </Stack>
}

export default BodyPart;