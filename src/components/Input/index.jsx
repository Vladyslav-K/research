import React, { memo } from 'react';

// material-ui components
import { Grid, TextField } from '@material-ui/core';

const Input = ({ input, meta, placeholder }) => (
  <Grid container direction='column'>
    <TextField {...input} placeholder={placeholder} />
    <span></span>
    <span style={{ color: 'red', height: '20px' }}>{meta.touched && meta.error}</span>
  </Grid>
);

export default memo(Input);
