import React, { memo } from 'react';

// material-ui components
import { Radio as MuiRadio, FormControlLabel } from '@material-ui/core';

const Radio = ({ input, label }) => <FormControlLabel control={<MuiRadio {...input} />} label={label} />;

export default memo(Radio);
