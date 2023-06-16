import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const CheckboxRoot = styled(Checkbox.Root)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border: 2px solid ${(props) => props.theme.colors['blue-500']};
  background-color: transparent;

  &:focus {
    box-shadow: none;
  }

  &[data-state='checked'] {
    border: 2px solid transparent;
    background-color: ${(props) => props.theme.colors['purple-700']};
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme.colors['gray-100']};
  display: flex;
  align-items: center;
  justify-content: center;
`
