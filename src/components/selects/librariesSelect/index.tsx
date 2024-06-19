import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import * as React from 'react';
import { useLibrariesSelect } from './useLibrariesSelect';

export type LibrariesSelectProps = {
  noneOption?: boolean;
} & SelectProps;

export function LibrariesSelect(props: LibrariesSelectProps) {
  const { libraries, loading } = useLibrariesSelect();
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <FormControl fullWidth>
      <InputLabel id="bibliotecaSelect">Biblioteca</InputLabel>
      <Select
        labelId="bibliotecaSelect"
        id="bibliotecaSelect"
        value={props.value}
        label="Biblioteca"
        onChange={props.onChange}
        name={props.name}
        error={props.error}
      >
        {props.noneOption && <MenuItem value={'none'}>None</MenuItem>}
        {libraries && !loading ? (
          libraries?.map((library, idx) => (
            <MenuItem value={library._id || idx} key={idx}>
              {library.name}
            </MenuItem>
          ))
        ) : (
          <CircularProgress />
        )}
      </Select>
    </FormControl>
  );
}
