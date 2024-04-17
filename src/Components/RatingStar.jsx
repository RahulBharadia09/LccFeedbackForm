import React from "react";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


const RatingStar = () => {
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      };
      function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }
      
      const [value, setValue] = React.useState(0);
      const [hover, setHover] = React.useState(-1);  
      
      
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Retrieve the rating data from localStorage
        const storedRating = JSON.parse(localStorage.getItem('rating'));
        
        // You can now send the storedRating data to a server for further processing
        console.log('Stored Rating:', storedRating);
      };


  return (
           
      
    <Box
    sx={{
      width: 200,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Rating
      sx={{
        paddingLeft:10
      }}
      id="value2"
      name="val12"
      value={value}
      precision={0.5}
      getLabelText={getLabelText}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      onClick={handleSubmit}

      onChange={(event, newValue) => handleRatingChange(newValue)}
      onChangeActive={(event, newHover) => {
        setHover(newHover);
      }}
      emptyIcon={<StarIcon size="Large" style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    {value !== null && (
      <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value ]}</Box>
    )}
  </Box>
  );
};

export default RatingStar;
