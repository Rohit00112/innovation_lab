import { useState, useEffect } from 'react'
import { Program } from '@/types'
import { ProgramService } from '@/services/api'

export function usePrograms() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const data = await ProgramService.getAll()
        setPrograms(data)
      } catch (err) {
        setError('Failed to fetch programs')
      } finally {
        setLoading(false)
      }
    }

    fetchPrograms()
  }, [])

  return { programs, loading, error }
}