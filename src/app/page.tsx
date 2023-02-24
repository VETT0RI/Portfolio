import services from '../../data'
import { GetServerSidePropsContext } from 'next'

const Home = ({services}) => {
  console.log('CLIENT', services)
  return (
    <div>
      <h1 className="p-4">Ola</h1>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()
  console.log('SERVER', services)
  return {
    props: {
      services: data.services,
    },
  }
}
