import { Input } from '@/source/shared/ui/Input'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
import { FormField } from './'

const meta = {
  title: 'Shared/FormField',
  component: FormField,
  tags: ['autodocs'],
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <FormField>
        <FormField.Head>
          <FormField.Label>Name</FormField.Label>
          <FormField.Clear
            visible={value.length > 0}
            onClick={() => setValue('')}
          />
        </FormField.Head>
        <FormField.Body>
          <Input
            className="w-full"
            size="lg"
            value={value}
            onChange={e => setValue(e.target.value)}
            autoComplete="off"
          />
        </FormField.Body>
      </FormField>
    )
  },
}
