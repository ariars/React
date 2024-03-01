import type { FC, PropsWithChildren } from 'react'

export type PProps = {
  children?: PropsWithChildren
}

const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}

export default P
