import React, { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types"

type Props = {
  icon: IconDefinition,
  className: string,
}

const IconBtn: FC<Props> = ({ icon, className }) => {
  return (
    <FontAwesomeIcon className={className} icon={icon} />
  )
}

export default IconBtn
