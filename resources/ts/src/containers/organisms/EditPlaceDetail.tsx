import React, { FC } from 'react'
import EditPlaceDetail from '../../components/organisms/EditPlaceDetail'

type Props = {
  className: string
}

const EditPlaceDetailContainer: FC<Props> = ({
  className,
}) => {
  return <EditPlaceDetail className={className} />
}

export default EditPlaceDetailContainer
