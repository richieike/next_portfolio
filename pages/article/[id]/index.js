import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Meta from '../../../components/Meta'
const article = ({article}) => {
    //Used to contain any parametres in the route
    //const router = useRouter();
    //const {id} = router.query

    console.log(article);
    return <>
          <Meta title = {article.title}/>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <Link href = '/'>Go Back</Link>
        
    </>
}


//using context to fetch the specific id 
export const getStaticProps = async (context) => {

   //Wrap api fetch 
   try{
    const res = await fetch(`https://api.jsonbin.io/b/605091487ea6546cf3dfbd9d/9/${context.params.id}`);
    const article = await  res.json();
    console.log(article);
    return {
      props: {
        article
      }
    }
  }catch(err){
    console.log(err);
  }

}

export const getStaticPaths = async () => {
    try{
        const res = await fetch(`https://api.jsonbin.io/b/605091487ea6546cf3dfbd9d/9`)
        const articles = await  res.json()
        console.log(articles);
        const ids = articles.map(article => article.id)

        const paths = ids.map(id => ({params: {id: id.toString()}}))
        return {
          paths,
          fallback: false
        }
      }catch(err){
        console.log(err);
      }
}

export default article
