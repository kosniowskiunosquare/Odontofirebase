import * as React from "react";

import { Fab, Grid } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import ModalContainer from "../UI/ModalContainer";

const MenuButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <ModalContainer
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        >
          {props.formLoad}
        </ModalContainer>
        <Grid style={{ position: "relative", float: "right", bottom: "2%" }}>
          <Fab color="primary" aria-label="Add" onClick={handleOpen}>
            <AddIcon />
          </Fab>

          <Fab color="secondary" aria-label="Edit" onClick={handleOpen}>
            <EditIcon />
          </Fab>
          <Fab color="secondary" aria-label="Delete">
            <DeleteIcon />
          </Fab>
        </Grid>
      </div>
    </>
  );
};

export default MenuButton;
