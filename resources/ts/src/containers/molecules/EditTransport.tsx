import React, { FC, useState } from 'react'
import EditTransport from '../../components/molecules/EditTransport'
import {
  Transport,
  initialTransports,
} from '../../utilities/types'

type Props = {
  className: string
}

const EditTransportContainer: FC<Props> = ({
  className,
}) => {
  const [transports, setTransports] = useState<Transport[]>(
    initialTransports
  )
  const [selectedIndex, setSelectedIndex] = useState<
    number
  >(0)

  return (
    <EditTransport
      className={className}
      transports={transports}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
    />
  )
}

export default EditTransportContainer
