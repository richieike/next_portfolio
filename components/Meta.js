import React from 'react'
import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <>
        <Head>
            <meta name = 'viewport'
            content = 'width=device-width, inital-scale=1'/>
            <meta name = 'keywords' content = {keywords}/>
            <meta name = 'description' content = {description}/>
            <meta charSet = 'utf-8'/>
            <link rel = 'icon' href = '/favicon.ico'/>
            <title>{title}</title>
        </Head>
      
        </>
    
    )
}

Meta.defaultProps = {
    title: 'Richard Ike',
    keyword: 'HTML, CSS, Javascript',
    description: 'Developer with over 10 years experience'
}

export default Meta
