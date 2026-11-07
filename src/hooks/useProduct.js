import { useEffect, useState } from 'react'
import { getProduct } from '../api'

export default function useProduct(id) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let ignore = false
    setLoading(true)
    setError(false)

    getProduct(id)
      .then((data) => {
        if (!ignore) setProduct(data)
      })
      .catch(() => {
        if (!ignore) setError(true)
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [id])

  return { product, loading, error }
}