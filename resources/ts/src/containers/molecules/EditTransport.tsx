import React, { FC } from 'react'
import EditTransport from '../../components/molecules/EditTransport'

type Props = {
  className: string
}

const EditTransportContainer: FC<Props> = ({
  className,
}) => {
  return <EditTransport className={className} />
}

export default EditTransportContainer
