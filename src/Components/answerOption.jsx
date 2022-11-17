import { InsertComment } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function AnswerOption(props) {

    return(

        <IconButton >
            <img src={props.op} height="100px" width="100px"></img>
        </IconButton>
    )
    
}