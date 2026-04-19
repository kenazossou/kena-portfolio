'use client'

import { useEffect } from 'react'

export default function ErudaLoader() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('eruda')
        .then((eruda) => {
          if (eruda?.default) {
            eruda.default.init()
          }
        })
        .catch(() => {})
    }
  }, [])

  return null
}
