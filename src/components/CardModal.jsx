import React from 'react'
import { Card, CardActions,CardHeader,
    CardContent, CardMedia, Typography,Button,Modal,IconButton,Collapse, TextField} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';



// const theme = createMuiTheme({
//     overrides: {
//       MuiInputBase: {
//         input: {
//           background: "#fff",
//         },
//       },
//     },
//   });


 const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'whitesmoke',
    border: '2px solid green',
    boxShadow: 24,
    
    p: 4,
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const CardModal = ({open,handleClose,foodData,setFoodData,showModal,setShowModal}) => {


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
        >
       <Card sx={{ maxWidth: 400 ,...style}}>
        <CardHeader
        title={<Typography sx={{color:"green",fontSize:"25px",textTransform:"capitalize"}}>{showModal.title}</Typography>}
        
        
        subheader={<Typography variant="subtitle" sx={{color:"grey",fontSize:"1em"}}>{showModal.desc}</Typography>}
       
        />
        <CardMedia
        component="img"
        image={showModal.img}
        height="300"
        width="400"
        alt="dish"
        sx={{color:"primary"}}
        />
        <CardContent>
        <Typography variant="body2" color="green" sx={{letterSpacing:0.5}}>
            {showModal.info}
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <RemoveIcon style={{fill:"green"}}/>
        </IconButton>
        <TextField 
          sx={{
            width: { sm: 50,xs:50},
            "& .MuiInputBase-root": {
                height:45
            },
            "& .Mui-active":{
                color:"red"

            }
        }}
        InputProps={{
            sx: {
              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "2px solid green",
              },
              "&:hover": {
                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "2px solid grey",
                },
              },
            },
          }}
        id="standard-basic"
        variant="outlined"
        />
        <IconButton aria-label="add to favorites">
            <AddIcon style={{fill:"green"}}/>
        </IconButton>
        <Button variant='outlined'>
              BUY 
            </Button>

        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            
        </CardContent>
        </Collapse>
    </Card>
        </Modal>
        </div>
    )
}

export default CardModal