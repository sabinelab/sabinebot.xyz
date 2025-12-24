import { NextResponse } from 'next/server'

export const GET = async () => {
  const res = await fetch(process.env.API_URL + '/updates', {
    headers: {
      authorization: process.env.AUTH
    }
  })
  const data = await res.json()

  return NextResponse.json(data)
}
