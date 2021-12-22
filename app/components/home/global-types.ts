export enum ContentType {
  article,
  post,
}

export interface UserData {
  firstName?: string
  lastName?: string
  cpn?: string
  email?: string
  hash?: string
  customData?: string
  displayName?: string
  vxInstances?: VxInstance[]
}

export interface VxInstance {
  spec?: {
    description: string
    id: string
    isActive: string
    name: string
  }
  interactions: [SubscriptionPaymentInstance]
}

export interface PastDue {
  isPastDue: boolean
  since: Date
}
export interface SubscriptionPaymentInstance {
  pastDue: PastDue
}

export type RadioPost = {
  id: number
  type: ContentType
  headline: string
  body: Array<Object>
  dateCreated: string
  datePublished: string
  dateUpdated?: string
}

export type RadioPosts = Array<RadioPost>

export type Layout = 'vertical' | 'horizontal' | 'horizontal-reverse'

export type TeaserSummary = {
  children?: {
    text: string
  }[]
}

export type TeaserCategory = {
  slug: string
}

export type ArticleTeaser = {
  id?: string
  slug?: string
  categories?: TeaserCategory[]
  topics?: {
    name: string
    slug: string
  }[]
  kicker?: string
  headline?: string
  media?: Media
  summary?: TeaserSummary
}

export type ArticleBlock = {
  type: string
  article: ArticleTeaser
}

export type VideoBrightcoveBlock = {
  accountId: string
  id: string
  playerId: string
  type: string
}

export type ExternalReferenceBlock = {
  author: {
    id: string
    type: string
  }
  headline: string
  image: {
    alt: string
    caption: string
    credit: string
    type: string
    url: string
  }
  label: string
  type: string
  url: string
}

export type SliceBlock =
  | ArticleBlock
  | VideoBrightcoveBlock
  | ExternalReferenceBlock

export type ArticleSlice = {
  name: string
  type: string
  children: SliceBlock[]
}

export type TopicAuthorSlice = {
  type: string
}

export type CollectionSlice = ArticleSlice | TopicAuthorSlice

export type CollectionBlock = {
  id: string
  type: string
  title?: string
  link?: {
    url: string
    text?: string
  }
  children: CollectionSlice[]
}

export type ImageBlock = {
  type: string
}

export type TweetBlock = {
  type: string
}

export type PageBlock =
  | CollectionBlock
  | ImageBlock
  | TweetBlock
  | ParagraphBlock

export type Page = {
  id: string
  title: string
  slug: string
  body: PageBlock[]
}

export type Media = Image | Video

export type Image = {
  crops?: ImageCrop[]
  crop: ImageCrop
}

export type Video = {
  videoId: string
  accountId?: string
  posterImage?: Image
}

export type ImageCrop = {
  url?: string
  alt?: string
  aspectRatio?: string
}

export type Byline = AuthorByline | TextByline

export type AuthorByline = {
  type: string
  slug: string
  name: string
}

export type TextByline = {
  type: string
  value: string
}

export type Slug = string & { _: 'Slug' }
export type URL = string & { _: 'Url' }

export type Topic = {
  name: string
  slug?: string
  link?: URL
}

export type ParagraphBlock = {
  type?: string
  children: ArticleParagraphChildren[]
}

export type ArticleParagraphChildren = ArticleText | ArticleHyperlink

export type ArticleText = {
  text: string
}

export type ArticleHyperlink = {
  url: string
  text?: string
}
