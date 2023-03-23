import { DependencyList, useEffect } from 'react'

export const useEventListener = <K extends keyof HTMLElementEventMap>(
  key: K,
  listener: (e: HTMLElementEventMap[K]) => void,
  deps: DependencyList = [],
) => {
  useEffect(() => {
    document.documentElement.addEventListener(key, listener)
    return () => document.documentElement.removeEventListener(key, listener)
  }, deps)
}
