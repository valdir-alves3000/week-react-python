import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import { ListApp } from "components/ListApp";
import { useIndex } from "hooks/pages/useIndex";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const {
    teachers,
    email,
    name,
    setEmail,
    setName,
    selectedTeacher,
    setSelectedTeacher,
    scheduleLesson,
    message,
    setMessage,
  } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <ListApp
          teachers={teachers}
          onSelect={(teacher) => setSelectedTeacher(teacher)}
        />
      </Box>

      <Dialog
        open={selectedTeacher !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setSelectedTeacher(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite o Nome"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite o Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button
            sx={{ width: "30%", borderRadius: "0.25rem" }}
            onClick={() => {
              setSelectedTeacher(null);
            }}
          >
            Cancelar
          </Button>
          <Button
            sx={{ width: "30%", borderRadius: "0.25rem" }}
            onClick={scheduleLesson}
          >
            Marcar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        message={message}
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => {
          setMessage("");
        }}
      />
    </div>
  );
};

export default Home;
