import React from 'react'
import {
  CollectionBlock as Collection,
  ArticleSlice as Slice,
} from '../global-types'
import ArticleSlice from './ArticleSlice'

const collectionSliceOptions = (type: string) => {
  const sliceTypes = {
    slice: (slice: Slice, collection: Collection, i: number) => (
      <ArticleSlice slice={slice} collection={collection} key={i} />
    ),
    'topic-author-slice': () => null,
    default: () => null,
  }

  return sliceTypes[type] || sliceTypes.default
}

const CollectionBlock = (collection: Collection) =>
  collection.children.map((slice, i) =>
    collectionSliceOptions(slice.type)(slice, collection, i)
  )

export default CollectionBlock
