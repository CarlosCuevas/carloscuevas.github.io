import React from 'react'
import { FaLinkedin, FaGithub, FaAngellist, FaStackOverflow } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Carlos Cuevas" keywords={[`software`, `engineer`, `fullstack`, `web`, `new york city`]} />
    <main>
        <h1>Carlos Cuevas</h1>
        <IconContext.Provider value={{ size: "3rem" }}>
            <ul>
                <li><a href="https://www.linkedin.com/in/carloscuevasnyc" rel="noopener noreferrer" target="_blank"><FaLinkedin/></a></li>
                <li><a href="https://www.github.com/carloscuevas" rel="noopener noreferrer" target="_blank"><FaGithub/></a></li>
                <li><a href="https://angel.co/carlos-cuevas" rel="noopener noreferrer" target="_blank"><FaAngellist/></a></li>
                <li><a href="https://stackoverflow.com/cv/carloscuevas" rel="noopener noreferrer" target="_blank"><FaStackOverflow/></a></li>
            </ul>
        </IconContext.Provider>
    </main>
  </Layout>
)

export default IndexPage
