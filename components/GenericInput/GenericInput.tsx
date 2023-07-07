import type { InputProps } from '@/types/types';
import { StyledInput } from './GenericIput.styles';

const GenericInput = ({ $styleSize, ...rest }: InputProps) => {
  return (
        <StyledInput $styleSize={$styleSize} {...rest} />
  );
};

export default GenericInput;
