import CollectionBlock from './CollectionBlock';
import { CollectionBlock as Collection } from '../../helpers/global-types';
/* 
  We are using collections from the page schema but there are other block types that could be implemented (image, paragraph, tweet and more).
  See the schema for the full list
*/

const pageBlock = (type: string, isIndexPage?: boolean) => {
  const blockTypes = {
    collection: (collection: Collection) => CollectionBlock(collection, isIndexPage),
    image: () => null,
    paragraph: () => null,
    tweet: () => null,
    default: () => null,
  };

  return blockTypes[type] || blockTypes.default;
};

export default pageBlock;
