import { Check } from 'phosphor-react'
import { CheckboxProps } from '@radix-ui/react-checkbox'
import { CheckboxIndicator, CheckboxRoot } from './styles'

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator>
        <Check size={12} />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}
