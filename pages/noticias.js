import Prismic from 'prismic-javascript'
import React from 'react'
import Layout from '../components/Layout';
import GlobalStyle from '../styles/globals'
import { Client } from '../prismic-configuration';
import { RichText } from 'prismic-reactjs';
import { Description, Title, Img, Subtitlte, Container } from '../styles/noticias';
import Link from 'next/link'



const Home = ({ tests }) => {

  console.log(tests);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <div>
          {
            tests.results.map((test, index) => {
              return (
                <Container key={test.id}>
                  <Link href={`/noticia/${test.uid}`}>
                    <div>
                      <Title>{RichText.render(test.data.title)}</Title>
                      <Subtitlte>{RichText.render(test.data.subtitle)}</Subtitlte>
                      <Img alt="img1" src={test.data.image.url} />
                      <Description>{RichText.render(test.data.description)}</Description>
                    </div>
                  </Link>
                </Container>
              )
            })
          }
        </div>
      </Layout>
    </>
  )
}
export default Home;

export async function getServerSideProps() {

  const tests = await Client().query(Prismic.Predicates.at("document.type", "news")

  );

  return {
    props: {
      tests: tests,
    }
  }
}