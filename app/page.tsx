import { cva } from 'class-variance-authority'

export default function Home() {
  return <h1 className={headingCn()}>Home</h1>
}

const headingCn = cva('font-bold')
