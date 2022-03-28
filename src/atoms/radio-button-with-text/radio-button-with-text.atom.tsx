import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';

export type RadioButtonItem = {
  label: string;
  value: string;
  description?: string;
  disable?: boolean;
};

export type radioButtonWithTextProps = {
  radioButtonItems: RadioButtonItem[];
  label?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
};
export const RadioButtonWithText: React.FC<radioButtonWithTextProps> = (props) => {
  const { label, radioButtonItems, defaultValue = '', onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      {label && (
        <FormLabel id="radio-buttons-group-label">
          <Typography variant="h2">{label}</Typography>
        </FormLabel>
      )}
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        defaultValue={defaultValue}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        {radioButtonItems.map((item) => {
          const disabled = item.disable ? true : false;
          return (
            <span key={item.value}>
              <FormControlLabel
                sx={{
                  m: 0,
                  pl: 1,
                  justifyContent: 'space-between',
                  '&:hover': { backgroundColor: 'hover.main' },
                  width: '100%',
                }}
                value={item.value}
                control={<Radio disabled={disabled} color="primary" />}
                label={<Typography variant="h3">{item.label}</Typography>}
                labelPlacement="start"
              />
              {item.description && <Typography sx={{ pl: 1, mb: 1.5 }}>{item.description}</Typography>}
            </span>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
