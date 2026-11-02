import { issueFormToken } from '@/lib/spam-guard'

// Forms fetch this on load; the signed timestamp proves how long the visitor spent on the page.
export async function GET() {
  return Response.json(
    { token: issueFormToken() },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  )
}
