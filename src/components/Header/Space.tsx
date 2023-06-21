import styled from 'styled-components';

interface SpaceProps {
  width: string;
  height: string;
}

const Space = styled.div<SpaceProps>`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default Space;