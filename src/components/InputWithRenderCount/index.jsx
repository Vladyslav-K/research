import React, { memo } from 'react';

// components
import RenderCount from 'components/RenderCount';

// material-ui components
import { Grid, TextField } from '@material-ui/core';

const InputWithRenderCount = ({ input, meta, placeholder }) => (
  <Grid container direction='column'>
    <TextField {...input} placeholder={placeholder} />
    <RenderCount />
    <span style={{ color: 'red', height: '20px' }}>{meta.touched && meta.error}</span>
  </Grid>
);
export default memo(InputWithRenderCount);
