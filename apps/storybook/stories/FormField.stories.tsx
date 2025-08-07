import type { Meta, StoryFn } from '@storybook/react-vite'

import { FormField } from '@repo/ui/components/FormField'
import { Input } from '@repo/ui/components/Input'
import { fn } from 'storybook/internal/test'

const meta = {
  title: 'Example/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  subcomponents: {
    Head: FormField.Head,
    Label: FormField.Label,
    Clear: FormField.Clear,
    Body: FormField.Body,
  },
  args: {
    visible: false,
    autoFocusAfterClick: false,
    onClick: fn(),
  },
  argTypes: {
    visible: {
      control: 'boolean',
      description: '클리어 버튼 표시 여부',
      table: {
        category: 'Clear',
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    autoFocusAfterClick: {
      control: 'boolean',
      description: '클리어 버튼 클릭 시 폼 요소에 포커스 이동 여부',
      table: {
        category: 'Clear',
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    onClick: {
      control: 'fn',
      description: '클리어 버튼 클릭 시 호출되는 함수',
      table: {
        category: 'Clear',
        type: {
          summary: '() => void',
        },
      },
    },
  },
} as Meta<typeof FormField>

export default meta

export const Default: StoryFn = args => {
  return (
    <FormField>
      <FormField.Head>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Clear {...args} />
      </FormField.Head>
      <FormField.Body>
        <Input />
      </FormField.Body>
    </FormField>
  )
}
