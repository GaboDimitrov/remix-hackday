import React from 'react'
import { Block, getColorCssFromTheme } from 'newskit'
import {
  ArticleSlice as Slice,
  CollectionBlock,
} from '../global-types'
import { FallBack } from '../grid/FallBack'
import { Lead  } from '../grid/Lead'
import { SectionRow  } from '../grid/SectionRow'

const sliceBlockBuilder = (slice: Slice, collection: CollectionBlock, isIndexPage?: boolean) => {
  const sectionURL = collection?.link?.url || '/uncategorized'
  /* add layout to case statments when ready */
  const sliceTypes = {
    LEAD_1_AND_2: <Lead slice={slice} />,
    SECONDARY_4: (
          <SectionRow
            slice={slice}
            collection={collection}
            sectionURL={sectionURL}
            showTitle={!isIndexPage}
          />
    ),
    SECONDARY_4_ODD: (
          <SectionRow
            slice={slice}
            collection={collection}
            sectionURL={sectionURL}
            isDarkBackground
            addTopSpace={!isIndexPage}
            titleBarColour={
              (true &&
                `${getColorCssFromTheme('color', 'transparent')}`) as string
            }
            titleBarStylePreset={(true && 'inkContrast') as string}
          />
    ),
    default: <FallBack slice={slice} />,
  }

  return sliceTypes[slice.name] || sliceTypes.default
}

const ArticleSlice: React.FC<{ slice: Slice; collection: CollectionBlock, isIndexPage?: boolean }> = ({
  slice,
  collection,
  isIndexPage
}) => (
  <>
    <Block spaceStack="space070" />
    {sliceBlockBuilder(slice, collection, isIndexPage)}
  </>
)

export default ArticleSlice
