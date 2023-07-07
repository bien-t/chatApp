import type { MessageProps } from '@/types/types';
import { StyledMessage } from './GenericMessage.styles';

const GenericMessage = ({ text, type }: MessageProps) => {
  return (
    <StyledMessage type={type}>{text}</StyledMessage>
  );
};

export default GenericMessage;
