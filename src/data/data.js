module.exports = {
  SiteTitle: 'Linkletter',
  Sitelogo: '#',
  SiteLogoText: 'Linkletter',
  SiteAuthor: 'Zachary Linkletter',
  SiteDescription: "Z. Linkletter's Personal Blog",
  defaultDescription: '',
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      followers {
        totalCount
      }
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
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
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
  SiteSocialLinks: {
    twitter: '',
    github: '',
    linkedin: '',
  },
  SiteAddress: {
    city: '',
    region: '',
    country: '',
    zipCode: '',
  },
  SiteContact: {
    email: 'zack@linkletter.dev',
    phone: '',
  },
  SiteCopyright: '2021',
}
