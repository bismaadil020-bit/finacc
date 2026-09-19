'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Eye, EyeOff, Loader2, ShieldCheck } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      // Only mask genuine credential failures; surface everything else
      // (network/config errors) so misconfiguration is obvious.
      const isCredentialError =
        error.status === 400 || /invalid login credentials/i.test(error.message)
      setError(
        isCredentialError
          ? 'Invalid email or password. Please try again.'
          : `Sign-in failed: ${error.message}`
      )
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-16 h-16 bg-no-repeat flex-shrink-0"
              style={{ backgroundImage: 'url(/Logo.png)', backgroundSize: '427%', backgroundPosition: '13.4% 50.6%' }}
            />
            <span className="font-sora font-bold text-2xl text-white">
              FinAcc<span className="text-brand-sky">Solutions</span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Admin Panel</span>
          </div>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <h1 className="font-sora font-bold text-white text-xl mb-1">Sign in</h1>
          <p className="text-slate-400 text-sm font-dm-sans mb-6">Enter your credentials to access the dashboard.</p>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-dm-sans">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@finaccsolutions.com"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(27,79,216,0.8)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-11 rounded-xl text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(27,79,216,0.8)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-sky text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Signing in…</>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-slate-500 text-xs mt-6 font-dm-sans">
          Access restricted to authorised users only.
        </p>
      </div>
    </div>
  )
}
