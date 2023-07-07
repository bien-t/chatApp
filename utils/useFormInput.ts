import { useCallback, useId, useState } from 'react';
import type { ChangeEvent } from 'react';

export const useFormInput = () => {
  const [value, setValue] = useState('');
  const inputId = useId();
  const [isEmailValid, setIsEmailValid] = useState(false);

  const changeValue = useCallback((event: ChangeEvent) => {
    if ((event.target as HTMLInputElement).type === 'email') {
      if ((event.target as HTMLInputElement).validity.valid) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    }
    setValue((event.target as HTMLInputElement).value);
  }, []);

  return {
    value, changeValue, setValue, inputId, isEmailValid
  };
};
