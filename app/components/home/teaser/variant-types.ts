import { CardProps } from 'newskit'

export type VariantsObject = {
  layout: CardProps['layout']
  card?: {}
  media?: {}
  title: {
    stylePreset?: string | {}
    typographyPreset?:
      | {
          xl?: string
          lg?: string
          md?: string
          sm?: string
          xs?: string
        }
      | string
    spaceStack:
      | {
          xl?: string
          lg?: string
          md?: string
          sm?: string
          xs?: string
        }
      | string
  }
  teaser?: {
    stylePreset?: string | {}
    typographyPreset?:
      | {
          xl?: string
          lg?: string
          md?: string
          sm?: string
          xs?: string
        }
      | string
    spaceStack?:
      | {
          xl?: string
          lg?: string
          md?: string
          sm?: string
          xs?: string
        }
      | string
  }
}
