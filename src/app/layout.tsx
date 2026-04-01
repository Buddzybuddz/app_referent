import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentoring Dashboard | Référent",
  description: "Suivez et gérez vos référés en toute simplicité.",
};

import { getSession } from "@/app/actions";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="fr" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full bg-slate-50/50 text-slate-900">
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shadow-indigo-100 shadow-lg group-hover:scale-110 transition-transform">
                  M
                </div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                  Mentoring <span className="text-indigo-600">Dashboard</span>
                </h1>
              </Link>

              {session?.isAdmin && (
                <Link 
                  href="/admin/referents" 
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors ml-4"
                >
                  <Settings className="h-4 w-4" /> Gestion des collaborateurs
                </Link>
              )}
            </div>

            {session ? (
              <nav className="flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-full bg-slate-100 px-4 py-1.5 border border-slate-200">
                  <User className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-semibold text-slate-700">
                    {session.prenom} {session.nom}
                  </span>
                  {session.isAdmin && (
                    <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest ml-1">
                      Admin
                    </span>
                  )}
                </div>
                <LogoutButton />
              </nav>
            ) : null}
          </div>
        </header>
        <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
