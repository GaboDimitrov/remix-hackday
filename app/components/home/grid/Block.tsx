import React from 'react'
import {
  ArticleTeaser,
  Media,
  SliceBlock,
  TeaserSummary,
} from '../global-types'
import { teaserURL, teaserSummary, getMedia } from '../section/sectionUtils'
import Teaser from '../teaser'
import { VariantsName } from '../teaser/teaserVariants'

export const getBlockProps = (sliceBlock: SliceBlock) => {
  // Temp remove later
  const blockTypes = {
    'article-block': 'article' in sliceBlock && sliceBlock.article,
    'external-reference': {
      headline: 'TODO - External Reference',
      id: 'author' in sliceBlock && sliceBlock.author.id,
    },
    'video-brightcove': {
      headline: 'TODO - Video',
      id: 'accountId' in sliceBlock && sliceBlock.id,
    },
    default: {
      headline: `Unknown slice block - ${sliceBlock.type}`,
    },
  }

  return blockTypes[sliceBlock.type] || blockTypes.default
}

export const getBlock = (
  sliceBlock: SliceBlock,
  variant: VariantsName = 'base'
) => {
  const { headline, summary, media } = ('article' in sliceBlock &&
    sliceBlock.article) as ArticleTeaser
  const blockTypes = {
    'article-block': (
      <Teaser
        variant={variant}
        url={teaserURL(
          ('article' in sliceBlock && sliceBlock.article) as ArticleTeaser
        )}
        media={getMedia(media as Media)}
        title={headline as string}
        teaser={teaserSummary(summary as TeaserSummary)}
      />
    ),
    'external-reference': (
      <Teaser
        variant={variant}
        media={{
          src: 'https://plchldr.co/i/802x451?bg=F0F0F0&fc=111111&text=img',
        }}
        title="TODO - External Reference"
      />
    ),
    'video-brightcove': (
      <Teaser
        variant={variant}
        media={{
          src: 'https://plchldr.co/i/802x451?bg=F0F0F0&fc=111111&text=img',
        }}
        title="TODO - Video"
      />
    ),
    default: (
      <Teaser
        variant={variant}
        media={{
          src: 'https://plchldr.co/i/802x451?bg=F0F0F0&fc=111111&text=img',
        }}
        title={`Unknown slice block - ${sliceBlock.type}`}
      />
    ),
  }
  return blockTypes[sliceBlock.type] || blockTypes.default
}
