import { Box ,Container} from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data,bodyPart,setBodyPart }) => {
  return (
    <Container sx={{ display: 'flex',overflow: 'hidden'}} >
      {data.map((item) => (
        <Box 
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
        >
          {console.log(item,bodyPart)}
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      ))}
    </Container>
  );
};

export default HorizontalScrollbar;
