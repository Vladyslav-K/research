import React, { memo } from 'react';

// material-ui components
import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core';

const Checkbox = ({ input, label }) => <FormControlLabel control={<MuiCheckbox {...input} />} label={label} />;

export default memo(Checkbox);
