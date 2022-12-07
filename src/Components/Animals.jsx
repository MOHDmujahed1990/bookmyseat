import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";

export const Animals = () => {
  const [animal, setAnimal] = useState("Camel");
  return (
    <React.Fragment>
      <Grid container spacing={3} align="center">
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <img
                src={`Wilanimal/${animal}.jpg`}
                style={{ width: 300, height: 150 }}
                alt=""
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() =>
              setAnimal("Camel")
            }
          >
            Camel
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() =>
              setAnimal("Chipmunk")
            }
          >
            Squirrel
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() =>
              setAnimal("Fox")
            }
          >
            Fox
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() =>
              setAnimal("jiraaf")
            }
          >
            Jiraff
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() =>
              setAnimal("Lion")
            }
          >
            Lion
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </React.Fragment>
  );
};
