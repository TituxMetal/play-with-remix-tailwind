import { Bars3Icon } from '@heroicons/react/24/outline'
import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className='container m-auto flex min-h-screen flex-col space-y-8 border-2 p-4'>
      <h1 className='text-6xl font-bold text-accent underline'>Hello world!</h1>
      <p className='text-2xl'>Welcome to your new Remix app.</p>
      <p className='text-2xl'>
        Lets go for a{' '}
        <Bars3Icon className='inline-block h-8 w-8 cursor-pointer rounded-full border border-success p-1 text-green-400 hover:border-accent hover:text-accent' />{' '}
        !
      </p>
      <section className='flex gap-6'>
        <button className='btn'>Button</button>
        <button className='btn btn-neutral'>Neutral</button>
        <button className='btn btn-primary'>Primary</button>
        <button className='btn btn-secondary'>Secondary</button>
        <button className='btn btn-accent'>Accent</button>
        <button className='btn btn-ghost'>Ghost</button>
        <button className='btn btn-link'>Link</button>
      </section>
    </div>
  )
}
