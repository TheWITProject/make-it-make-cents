import * as React from "react";
import Button from "@mui/material/Button";

const QuestionButton =({color,size, sx, variant}) => {
    const buttonStyles={
        fontSize: 20,
        fontWeight:700
      }
        
    
    return (
        <Button
            color={color}
            size ={size}
            sx={buttonStyles}
            variant={variant}

            
        >
            Hello
        </Button>
    )
}

export default QuestionButton
   