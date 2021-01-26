import React from 'react'
import Layout from '../components/Layout';
import GlobalStyle from '../styles/globals'



const Home = ({ tests }) => {

  console.log(tests);

  return (
    <>
      <GlobalStyle />
      <Layout>
        HOMEPAGE
      </Layout>
    </>
  )
}
export default Home;