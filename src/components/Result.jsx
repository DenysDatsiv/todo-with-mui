import React, { useContext } from "react";
import { Context } from "./context";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

function Result() {
  const { deleteForm, todo, handleClickForm } = useContext(Context);

  return (
    <section>
      {todo.map((resultForm) => (
        <Card key={resultForm.id} sx={{mt:2, maxWidth:"40em",m:"10px auto",borderColor: 'primary.main'}}>
          <CardHeader
            action={
              <IconButton
                onClick={() => deleteForm(resultForm.id)}
                aria-label="settings"
              >
                <DisabledByDefaultIcon  />
              </IconButton>
            }
            title={resultForm.todoITEM}
          />
        </Card>
      ))}
    </section>
  );
}
export default Result;
