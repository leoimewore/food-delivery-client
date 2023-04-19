import React from 'react'
import { Card, CardActionArea, CardActions,CardHeader,Avatar,
    CardContent, CardMedia, Typography,Button,Modal,IconButton,Collapse} from '@mui/material';
import { useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { StayPrimaryLandscape } from '@mui/icons-material';


 const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'whitesmoke',
    border: '2px solid green',
    boxShadow: 24,
    color:"green",
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
       <Card sx={{ maxWidth: 550 ,...style}}>
        <CardHeader
        
        title={showModal.title}
        subheader={showModal.desc}
       
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
        {/* <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
        </Typography> */}
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <AddIcon/>
        </IconButton>
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