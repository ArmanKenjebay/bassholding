export async function POST(request: Request, context: any) {
  const token = process.env.NEXT_PUBLIC_TOKEN
  const api = process.env.NEXT_PUBLIC_BACKEND_API
  const headers = new Headers({
    Accept: '*/*',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  })

  const res = await fetch(`${api}/get-quotes`, {
    method: 'POST',
    headers,
    cache: 'no-cache',
  })

  console.log('context: ', context)

  const data = await res.json()

  return Response.json(data)
}
