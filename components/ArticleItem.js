import React from 'react'
import articleStyle from '../styles/Article.module.css'
import Link from 'next/link';
import Nav from '../components/Nav'
const ArticleItem = ({article}) => {
    //use excerpt instead of article.body
    return (
            
                <a className = {articleStyle.card}>
                <div className = {articleStyle.textLayout}> {article.title}</div>
                <div className = {articleStyle.textLayout}>{article.body}</div>
                
                </a>

           
    )
}

export default ArticleItem
