import * as React from "react";
import Layout from "./Layout";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <>
      <Layout>
      
      <Box mr={2} ml = {2} sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs= {4}>
          <Item>Dashboard 1</Item>
        </Grid>

        <Grid item xs={4}>
          <Item>xs=6</Item>
        </Grid>

        <Grid item xs={4}>
          <Item>xs</Item>
        </Grid>

        <Grid item xs= {8}>
          <Item>Dashboard 1</Item>
        </Grid>

        <Grid item xs={4}>
          <Item>xs=6</Item>
        </Grid>

      </Grid>
    </Box>
    </Layout> 
    </>
  );
}
