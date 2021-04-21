import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Repository from '../components/works/github'
import { graphql } from 'gatsby'
import {
  RepoGrid,
  RepoInfo,
  Avatar,
  UserInfo,
} from '../components/styled/repository'
import { SectionIntro, ContainerLayout } from '../components/common'

const RepositoryPage = ({ data }) => {
  const {
    name,
    avatarUrl,
    repositories,
    resourcePath,
    followers: { totalCount },
  } = data.githubData.data.viewer

  return (
    <Layout>
      <SEO title="Github Repositories" />
      <ContainerLayout>
        <SectionIntro>
          <RepoInfo>
            <Avatar style={{ backgroundImage: `url(${avatarUrl})` }} />
            <UserInfo>
              <h2>{name}</h2>
              <a
                href={`https://github.com${resourcePath}`}
                className="lined-link"
                activeClassName="active"
              >
                <span>{resourcePath.split('/')[1]}</span>
              </a>
              <span>{totalCount} followers </span>
            </UserInfo>
          </RepoInfo>
          <RepoGrid>
            {repositories.nodes
              .map((repo, index) => <Repository key={index} repo={repo} />)
              .reverse()}
          </RepoGrid>
        </SectionIntro>
      </ContainerLayout>
    </Layout>
  )
}
export default RepositoryPage

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          avatarUrl
          resourcePath
          isHireable
          followers {
            totalCount
          }
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
