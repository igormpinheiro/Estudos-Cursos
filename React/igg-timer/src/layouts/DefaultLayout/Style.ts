import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 0.5rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
`
