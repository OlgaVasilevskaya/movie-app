import * as React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { IBasicSelectProps } from 'types';

export default function BasicSelect(props: IBasicSelectProps) {
  const { handleChange, city } = props;

  return (
    <Box sx={{ minWidth: 400 }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="City"
          value={city}
          onChange={handleChange}
        >
          <MenuItem value="minsk">Minsk</MenuItem>
          <MenuItem value="grodno">Grodno</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
