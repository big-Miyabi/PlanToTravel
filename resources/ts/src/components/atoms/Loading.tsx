import React, { FC } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { css } from '@emotion/core'
import { colors } from '../../utilities/colors'

type Props = {
  isLoading: boolean
}

const Loading: FC<Props> = ({ isLoading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
  `

  return (
    <>
      {isLoading ? (
        <div className="loading-wrap">
          <ClipLoader
            css={override}
            size={30}
            loading={isLoading}
            color={colors.polarWhite}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Loading
