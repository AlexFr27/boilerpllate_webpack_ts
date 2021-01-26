import React, { FC, useEffect, useState } from 'react'
import style from './style.module.scss'
import { useActions } from '../../../../utils/redux-utils'
import { appActions } from '../../index'
import { useSubscribe } from '../../../../utils/js-utils'

const App: FC = () => {
  const { setAppStatus } = useActions(appActions)
  useEffect(() => {
    setAppStatus({ status: 'loading' })
  }, [])

  const [green, setGreen] = useState<boolean>(false)

  return <div className={style.wrap}>23123213</div>
}

export default App
