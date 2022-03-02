import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface ContainerProps{
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<ContainerProps>`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 50%;
`;
 
function Circle({ bgColor, borderColor, text='Lorem Ipsum' }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} >
      {text}
    </Container>
  );
}

export default Circle;