import mqDown from '@/lib/mqDown'
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const Home = () => {
  const dowmMd = useMediaQuery(mqDown.md)
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack direction={"row"}
          sx={
            {
              padding: 2,
              backgroundColor: "lightgray"
            }
          }
          justifyContent={"space-between"}>
          <Typography variant="h5">Login</Typography>
        </Stack>
      </Grid>
      {/* Form */}
      <Grid sx={{
        background: "red",
        height: "90vh"
      }} item xs={12} md={6}>
        <p>Form</p>
      </Grid>
      {/* Image */}
      {!dowmMd && (<Grid item xs={12} md={6} sx={{

        background: "yellow",
        height: "90vh"
      }}>
        <p>Image</p>
      </Grid>)}
    </Grid>
  )
}

export default Home