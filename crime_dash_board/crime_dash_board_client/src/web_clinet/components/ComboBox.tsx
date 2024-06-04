
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { ICrimeBranchSelect } from "../Interfaces/IChartModel";
import { IArrayProps, IArrayPropsType } from "../Interfaces/IPropsModel";




export const ComboBox = <T extends IArrayPropsType>({ args }: IArrayProps<T>) => {
  const [value, setValue] = useState<any | null>(args[0]);
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div style={{marginTop :"5px"}}>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={args}
        sx={{ width: 300 , fontSize :"16px"}}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
}