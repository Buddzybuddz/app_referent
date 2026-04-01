import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const referentId = request.cookies.get('referentId')?.value
  const isLoginPage = request.nextUrl.pathname.startsWith('/login')

  const response = NextResponse.next()
  
  // Public assets
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('.') ||
    request.nextUrl.pathname === '/favicon.ico'
  ) {
    return response
  }

  // Auth Redirects
  // On autorise toujours l'accès à la page de login pour permettre de "réparer" une session expirée
  if (!referentId && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // NOTE: On supprime la redirection auto de /login vers / pour éviter les boucles si le cookie est invalide
  
  return response
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
