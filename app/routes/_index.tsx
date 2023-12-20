import { ChevronRightIcon } from '@heroicons/react/24/outline'
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
        <ChevronRightIcon className='inline-block size-8 cursor-pointer rounded-full border border-success p-1 text-green-400 hover:border-accent hover:text-accent' />{' '}
        !
      </p>
      <div>
        <ul className='flex space-x-4 *:rounded-full *:border-sky-100 *:bg-sky-50 *:px-4 *:py-2 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10'>
          <li>Sales</li>
          <li>Marketing</li>
          <li>SEO</li>
        </ul>
      </div>
      <section className='flex gap-6 *:rounded-md *:border-2 *:border-neutral-300'>
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
