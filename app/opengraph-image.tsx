import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'FinAccSolutions — Big 4-Trained Virtual Bookkeeping & Accounting'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Site-wide default social preview. Replaces the missing /og-image.jpg.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0B1B3A 0%, #10275C 60%, #1B4FD8 140%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 40, fontWeight: 700 }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, background: '#E9B44C' }} />
          <div style={{ display: 'flex' }}>
            <span>FinAcc</span>
            <span style={{ color: '#7FB3FF' }}>Solutions</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-2px' }}>
            <span>Big 4-Trained.</span>
            <span>Offshore Economics.</span>
          </div>
          <div style={{ fontSize: 30, color: '#C7D2E5', lineHeight: 1.4, maxWidth: 960 }}>
            Virtual bookkeeping, payroll, IFRS group consolidation &amp; CFO services — 30+ countries served.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 40, fontSize: 24, color: '#E9B44C', fontWeight: 600 }}>
          <span>IFRS &amp; US GAAP Certified</span>
          <span>•</span>
          <span>www.finaccsolutions.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
