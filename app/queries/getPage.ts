import { gql } from '@apollo/client'

export const GET_PAGE = gql`
  query getPage($channel: String!, $publisher: Publisher!) {
    page(channel: $channel, publisher: $publisher) {
      id
      type
      title
      slug
      titleSeo
      datePublished
      dateUpdated
      description
      socialCardImage
      body {
        ... on CollectionBlock {
          id
          title
          type
          link {
            ... on TopicReferenceBlock {
              topic
            }
            ... on HyperlinkBlock {
              url
              text
            }
          }
          children {
            ... on ArticleSlice {
              name
              type
              children {
                ... on ArticleBlock {
                  type
                  article {
                    publisher
                    id
                    url
                    slug
                    categories {
                      slug
                    }
                    topics {
                      name
                      slug
                    }
                    kicker
                    headline
                    publishedDateTime
                    updatedDateTime
                    summary {
                      children {
                        ... on ArticleText {
                          text
                        }
                        ... on ArticleHyperlink {
                          url
                          text
                        }
                      }
                    }
                    media {
                      ... on Image {
                        __typename
                        crop {
                          url
                          alt
                          aspectRatio
                        }
                      }
                      ... on Video {
                        __typename
                        videoId
                        accountId
                        posterImage {
                          crop {
                            url
                            alt
                            aspectRatio
                          }
                        }
                      }
                    }
                  }
                }
                ... on ExternalReferenceBlock {
                  type
                }
                ... on VideoBrightcoveBlock {
                  type
                }
              }
            }
          }
        }
      }
    }
  }
`
