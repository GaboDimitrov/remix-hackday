import React from 'react'
import {Link} from 'remix'
import { LinkStandalone, Link as LinkInline } from 'newskit'
import { LinkProps } from './types'

export const RemixLink: React.FC<LinkProps> = ({
  href,
  children,
  type,
  ...rest
}) => (
  <>
    {type === 'standalone' && (
      <Link to={href}>
        <LinkStandalone href={href} {...rest}>
          {children}
        </LinkStandalone>
      </Link>
    )}

    {type === 'inline' && (
      <Link to={href}>
        <LinkInline href={href} {...rest}>
          {children}
        </LinkInline>
      </Link>
    )}
  </>
)
