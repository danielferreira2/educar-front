import { Typography } from '@mui/material';
import * as React from 'react';

export interface ReadonlyFieldProps {
  label: string;
  value: string;
  className?: string;
}

export function ReadonlyField(props: ReadonlyFieldProps) {
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <div className={props.className}>
      <p>{props.label}</p>
      <Typography variant="body2" color="text.secondary">
        {props.value}
      </Typography>
    </div>
  );
}
