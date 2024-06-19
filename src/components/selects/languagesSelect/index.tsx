import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import * as React from 'react';
import { Language } from '../../../services/documents/schemas/language';

export type LanguagesSelectProps = {
  noneOption?: boolean;
} & SelectProps;

export function LanguagesSelect(props: LanguagesSelectProps) {
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <FormControl fullWidth>
      <InputLabel id="languagesSelect">Idioma</InputLabel>
      <Select
        labelId="languagesSelect"
        id="languagesSelect"
        value={props.value}
        label="Idioma"
        onChange={props.onChange}
        name={props.name}
        error={props.error}
      >
        {props.noneOption && <MenuItem value={'none'}>None</MenuItem>}

        {Object.keys(Language).map((key, idx) => (
          <MenuItem value={key.toLowerCase() || idx} key={idx}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
