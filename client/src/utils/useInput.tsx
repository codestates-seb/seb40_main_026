import { ChangeEvent, useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState<any>('');

  const bind = {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
  };

  return [value, bind];
};

export default useInput;
