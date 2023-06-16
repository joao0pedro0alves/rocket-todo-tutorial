import { Check } from 'lucide-react'
import * as UI from '@radix-ui/react-checkbox'

export function Checkbox(props: UI.CheckboxProps) {
  return (
    <UI.Root
      className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-500 data-[state='checked']:border-transparent data-[state='checked']:bg-purple-700"
      {...props}
    >
      <UI.Indicator className="text-gray-100">
        <Check size={12} />
      </UI.Indicator>
    </UI.Root>
  )
}
