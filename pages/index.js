
import ArticleList from '../components/ArticleList'
import React from 'react';
import Meta from '../components/Meta'

export default function Home({ articles }) {

  return (
    <>
      <Meta />
      <div  >
        <title>Richard Ike</title>
        <ArticleList articles={articles} />
        <style jsx global>{`
       html,
       body {
      padding: 0;
        margin: 0;
       font-family:LazenbyComp;
      }

      * {
         box-sizing: border-box;
         }
        `}</style>
      </div>
    </>

  )
}



export const getStaticProps = async () => {

  //Wrap api fetch 
  try {
    const res = await fetch(`https://api.jsonbin.io/b/605091487ea6546cf3dfbd9d/13`)
    const articles = await res.json()
    console.log(articles);
    return {
      props: {
        articles
      }
    }
  } catch (err) {
    console.log(err);
  }

}