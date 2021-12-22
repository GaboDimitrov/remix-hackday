import React from 'react'
import { NextLink } from '@newskit-render/shared-components'

const NavLink = ({
  href,
  ariaLabel,
  buttonText,
}: {
  buttonText: string
  href: string
  ariaLabel?: string
}) => (
  <NextLink
    type="standalone"
    overrides={{
      typographyPreset: 'utilityMeta020',
      stylePreset: 'linkStandaloneInverse',
    }}
    href={href}
    aria-label={ariaLabel}
  >
    {buttonText}
  </NextLink>
)

export default NavLink
