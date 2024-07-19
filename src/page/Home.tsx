import { Button } from '../components/ui/button'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen'>
      <Button className='text-5xl h-auto'>Home</Button>
      <div className='text-2xl'>React</div>
      <div className='text-2xl'>Vite</div>
      <div className='text-2xl'>Typescript</div>
      <div className='text-2xl'>shadcn/ui</div>
      <div className='text-2xl'>tailwind</div>
    </div>
  )
}

export default Home