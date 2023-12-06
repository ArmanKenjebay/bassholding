import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany()
    // res.status(200).json({ users })
    return new Response(JSON.stringify(users))
  } catch (error) {
    console.error('Error fetching users:', error)
    // res.status(500).json({ error: 'Internal Server Error' })
  }
}
