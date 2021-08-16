import type { NextPage } from 'next';
import BaseLayout from '../layouts/base-layout'


const Home:NextPage = () => {
  return (
    <BaseLayout pageTitle='home' pageDescription='This is admin app home page'>
      Welcome to dashboard
    </BaseLayout>
  )
}



export default Home
