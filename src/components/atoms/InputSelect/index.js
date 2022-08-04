import { useEffect } from "react";
import {
  InputSelectContainer,
  InputSelectContainerPlaceholder,
  InputSelectOption,
} from "./style";
import { options } from "./options";

const InputSelect = ({ id, onChange, value }) => {
    
  const filteredOptions = options.filter(opt => {
    if( id === 0 ){
        return opt.id !== 1
    }
    return opt
  })

  return (
    <InputSelectContainer onChange={onChange} value={value}>
      <InputSelectContainerPlaceholder disabled selected>
        <p>Status</p>
      </InputSelectContainerPlaceholder>
      {filteredOptions.map((opt) => (
        <InputSelectOption value={opt.value} key={opt.id} >
          {opt.value}
        </InputSelectOption>
      ))}
    </InputSelectContainer>
  );
};

export default InputSelect;
