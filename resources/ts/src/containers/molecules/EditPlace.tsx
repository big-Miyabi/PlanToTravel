import React, { FC } from 'react'
import EditPlace from '../../components/molecules/EditPlace'

type Props = {
  className: string
}

const EditPlaceContainer: FC<Props> = ({ className }) => {
  return <EditPlace className={className} />
}

export default EditPlaceContainer
