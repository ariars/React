export const makeClassName = (
  setting: string,
  _className?: string,
  numberOfLines?: number
) => [setting, numberOfLines ? `like-clamp-${numberOfLines}` : '', _className].join(' ')
