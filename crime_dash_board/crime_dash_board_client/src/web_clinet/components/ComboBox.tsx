
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { IArrayProps, IArrayPropsType } from "../Interfaces/IPropsModel";
import { comboboxState } from "../state/global/ComboBoxState";
import { useSetRecoilState } from "recoil";



export const ComboBox = <T extends IArrayPropsType>({ args }: IArrayProps<T>) => {
  const [value, setValue] = useState<any | null>(args[0]);
  const [inputValue, setInputValue] = useState<string>('');

  const comboBoxKey = "selected_key"
  const setSelectedRecoilState = useSetRecoilState(comboboxState(comboBoxKey));

  useEffect(() => {
    if(value != null){
      setSelectedRecoilState(value);
    }
  }, [value])

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