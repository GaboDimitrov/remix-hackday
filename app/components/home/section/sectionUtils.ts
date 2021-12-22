import {
  Media,
  ArticleTeaser,
  TeaserCategory,
} from '../global-types'

export const getMedia = (media?: Media) => {
  if (!media) {
    return {
      src: '',
      alt: '',
      loadingAspectRatio: '',
    }
  }
  return 'crop' in media
    ? {
        src: media?.crop?.url || '',
        alt: media?.crop?.alt || '',
        loadingAspectRatio: media?.crop?.aspectRatio || '',
      }
    : {
        src: media.posterImage?.crop?.url || '',
        alt: media.posterImage?.crop?.alt || '',
        loadingAspectRatio: media?.posterImage?.crop?.aspectRatio || '',
      }
}

export const teaserSummary = (summary: { children?: { text?: string }[] }) =>
  summary?.children?.[0]?.text || ''

export const generateArticleSlug = (title: string): string =>
  title
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s\s+/g, ' ')
    .toLowerCase()
    .replace(/ /g, '-')
    .trim()

export const getCategorySlug = (categories: { slug: string }[]): string => {
  if (!Array.isArray(categories) || categories.length === 0)
    return 'uncategorized'
  return categories[0].slug || 'uncategorized'
}

export const teaserURL = (teaser: ArticleTeaser) => {
  const { id, headline, categories } = teaser
  const catagory = getCategorySlug(categories as TeaserCategory[])
  return id && headline
    ? `${catagory}/${id}/${generateArticleSlug(headline)}`
    : catagory
}
