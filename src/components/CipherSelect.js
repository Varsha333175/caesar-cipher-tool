import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import styled from '@emotion/styled';

const SelectContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const CipherSelect = ({ cipherType, setCipherType }) => {
  return (
    <SelectContainer>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="cipher-select-label">Select Cipher Type</InputLabel>
        <Select
          labelId="cipher-select-label"
          value={cipherType}
          onChange={(e) => setCipherType(e.target.value)}
          label="Select Cipher Type"
        >
          <MenuItem value="caesar">Classic Caesar Cipher</MenuItem>
          <MenuItem value="rot13">ROT13 Cipher</MenuItem>
          <MenuItem value="atbash">Atbash Cipher</MenuItem>
          <MenuItem value="affine">Affine Cipher</MenuItem>
        </Select>
      </FormControl>
    </SelectContainer>
  );
};

export default CipherSelect;
