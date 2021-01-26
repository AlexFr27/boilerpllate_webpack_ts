import { useCallback, useEffect } from 'react'
import { debounce } from 'lodash'

export const AssociativeArrayToArray = (obj: object) => {
  return Object.keys(obj).reduce((object, key) => {
    object[key] = obj[key].bend
    return object
  }, {})
}

export const useDebounce = (callback, delay: number) =>
  useCallback(
    debounce((...args) => callback(...args), delay),
    [delay]
  )

export const useEventTransfer = (EventName: string, data: object) => {
  const type = EventName
  const Event = new CustomEvent(type, { detail: { data } })
  dispatchEvent(Event)
  console.log('Event type:', type, '\nevent.detail.data: ', data)
}

export const useSubscribe = (type: string, callback: (event?: any) => void) => {
  function f(event) {
    callback(event.detail.data)
  }
  useEffect(() => {
    addEventListener(type, f)
    return () => removeEventListener(type, f)
  }, [])
}
