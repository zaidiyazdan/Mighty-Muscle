import { Stack,Typography } from "@mui/material"

const BodyPart = ({item,bodyPart,setBodyPart}) => {
    return <Stack 
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx = {
                {
                        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                        backgroundColor: '#FFF',
                        borderBottomLeftRadius: '20px',
                        width: '270px',
                        height: '280px',
                        cursor: "pointer",
                        gap: '47px',
                }
            }
            onClick={
                ()=>{
                    setBodyPart(item);
                    window.scrollTo({top: 1800,left: 100,behavior:'smooth'})
                }
            }
            >
        <img src={`/icons/bodyPart-icon-${item}.png`} alt="dumbell" style={{width: '50px' , height: '50px'}}/>
        <Typography fontSize={24} fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
}

export default BodyPart;