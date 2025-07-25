import { cva } from 'class-variance-authority'

export const Separator = () => {
  return <div className={lineClassName()} />
}

const lineClassName = cva('h-px my-3 bg-gray-200')
