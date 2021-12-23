import React from 'react';
import { CollectionBlock as Collection, ArticleSlice as Slice } from '../global-types';
import ArticleSlice from './ArticleSlice';

const collectionSliceOptions = (type: string, isIndexPage?: boolean) => {
  const sliceTypes = {
    slice: (slice: Slice, collection: Collection, i: number) => (
      <ArticleSlice slice={slice} collection={collection} key={i} isIndexPage={isIndexPage} />
    ),
    'topic-author-slice': () => null,
    default: () => null,
  };

  return sliceTypes[type] || sliceTypes.default;
};

const CollectionBlock = (collection: Collection, isIndexPage?: boolean) =>
  collection.children.map((slice, i) => collectionSliceOptions(slice.type, isIndexPage)(slice, collection, i));

export default CollectionBlock;
