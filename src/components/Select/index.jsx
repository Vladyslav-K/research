import React, { memo } from 'react';

// material-ui components
import { Grid, Select as MuiSelect, MenuItem, FormControl, InputLabel } from '@material-ui/core';

const Select = ({ input, meta, label, options }) => (
  <Grid container direction='column'>
    <FormControl style={{ width: '100%' }}>
      <InputLabel id={input.name}>{label}</InputLabel>

      <MuiSelect id={input.name} {...input}>
        {options.map(({ label, value }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>

    <span style={{ color: 'red', height: '20px' }}>{meta.touched && meta.error}</span>
  </Grid>
);

export default memo(Select);
