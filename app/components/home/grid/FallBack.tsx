import React from 'react';
import { Link } from 'remix';
import { getBlockProps } from './Block';
import { teaserURL } from '../section/sectionUtils';
import { LayoutProps } from './types';

// Fallback for unimplemented layouts. Remove once all have been implemented.

export const FallBack: React.FC<LayoutProps> = ({ slice }) => (
  <div className={slice.name}>
    <h2>Layout: {slice.name}</h2>
    {slice.children.map((block, i) => {
      const teaserProps = getBlockProps(block);
      const { id, headline } = teaserProps;
      return (
        <p key={id || i}>
          <Link to={teaserURL(teaserProps)} type="standalone">
            {headline}
          </Link>
        </p>
      );
    })}
  </div>
);
