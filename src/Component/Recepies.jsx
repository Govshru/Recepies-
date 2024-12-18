import React, { useState } from "react";
import { Card, CardContent, Typography, CardMedia, CardActions,Modal,Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Recepies = ({ id, name, image }) => {
  const navigate = useNavigate();

const[open,setOpen]=useState(false);

const handleOpen=()=>setOpen(true);
const handleClose=()=>setOpen(false);

  const handleRedirect = () => {
    
    navigate(`/DetailRecepies/${id}`);
    setOpen(false);
  };

  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "Grid",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2" color="textSecondary">
          ID: {id}
        </Typography>
      </CardContent>
      <CardActions>
        <button onClick={handleOpen} className="Button" > Detail</button>
        <Modal open={open} onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" className="modal">
<Box  sx={{
  position:'absolute',
  height:'20%',
  width:'30%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
  alignContent:'center',
  
}}>
<Typography id="modal-modal-title" variant="h6" component="h2"  >
      Modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Recepies Detail
    </Typography>
    <button className="yesbutton" onClick={handleRedirect}>yes</button>
    <button className="yesbutton" onClick={handleClose}>No</button>
</Box>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default Recepies;
