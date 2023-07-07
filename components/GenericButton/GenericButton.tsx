import { StyledButton } from '@/components/GenericButton/GenericButton.styles';
import type { ButtonProps } from '@/types/types';

const GenericButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default GenericButton;
