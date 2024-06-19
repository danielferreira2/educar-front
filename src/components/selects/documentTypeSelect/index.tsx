import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DocumentType } from '../../../services/documents/schemas/documentType';

interface DocumentTypeSelectProps {
  value?: string;
  name: string;
  onChange: () => void;
  error: boolean;
  noneOption?: boolean;
}

export default function DocumentTypeSelect(props: DocumentTypeSelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id="documentType">Tipo de Documento</InputLabel>
      <Select
        labelId="documentType"
        id="documentType"
        value={props.value}
        label="Tipo de Documento"
        onChange={props.onChange}
        name={props.name}
        error={props.error}
      >
        {props.noneOption && <MenuItem value={'none'}>None</MenuItem>}

        {Object.keys(DocumentType).map((key, idx) => (
          <MenuItem value={key} key={idx}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
