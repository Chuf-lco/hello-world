import { cookies } from 'next/headers'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')

    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': 'token=${token.value}'},
    })
}