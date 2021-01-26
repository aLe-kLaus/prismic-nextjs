import Layout from "../../components/Layout";
import { Client } from "../../prismic-configuration";
import {RichText} from 'prismic-reactjs'

const Noticia = (noticia) => {
    
    console.log(noticia)
    return (
        <Layout>
            <h1>{RichText.render(noticia.noticia.data.title)}</h1>
        </Layout>
    )
}

export default Noticia;

export async function getServerSideProps(context) {

    const noticia = await Client().getByUID("news", context.query.noticia);

    return {
        props: {
            noticia
        }
    }

}