import { useEffect, useRef, useState } from 'react'
export function useLocalStorage(key, initialValue) {
  const isFirst = useRef(true)
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : initialValue
    } catch {
      return initialValue
    }
  })
  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return }
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* evitar q crashee en modo privado */
    }
  }, [key, value])
  return [value, setValue]
}