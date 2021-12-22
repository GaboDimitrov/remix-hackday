import React from 'react'
import { Button, IconFilledChevronRight } from 'newskit'

const ViewMoreButton: React.FC<{ href: string }> = ({ href }) => (
  <Button
    overrides={{
      stylePreset: 'inkBrand010',
    }}
    href={href}
  >
    View all
    <IconFilledChevronRight overrides={{ size: 'iconSize020' }} />
  </Button>
)

export default ViewMoreButton
