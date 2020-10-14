import React, { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types"

type Props = {
  icon: IconDefinition,
}

const IconBtn: FC<Props> = ({ icon }) => {
  return (
    <FontAwesomeIcon icon={icon} />
  )
}

export default IconBtn
