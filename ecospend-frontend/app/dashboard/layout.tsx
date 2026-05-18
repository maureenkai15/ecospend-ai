'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/dashboard',                 label: 'Overview',   icon: '⬡' },
  { href: '/dashboard/expenses',        label: 'Expenses',   icon: '⬡' },
  { href: '/dashboard/budgets',         label: 'Budgets',    icon: '⬡' },
  { href: '/dashboard/sustainability',  label: 'Eco',        icon: '⬡' },
  { href: '/dashboard/ai-chat',         label: 'AI Agents',  icon: '⬡' },
  { href: '/dashboard/reports',         label: 'Reports',    icon: '⬡' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:#1a1612;color:#e8e0d4;font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased}
        a{text-decoration:none;color:inherit}
        ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.08);border-radius:2px}
        ::selection{background:rgba(0,212,106,0.2);color:#00d46a}
      `}</style>
      <div style={{display:'flex',minHeight:'100vh',background:'#1a1612'}}>

        {/* Sidebar */}
        <aside style={{width:'200px',background:'#141210',borderRight:'1px solid rgba(255,255,255,0.06)',position:'fixed',height:'100vh',display:'flex',flexDirection:'column',zIndex:20}}>
          
          {/* Logo */}
          <div style={{padding:'18px 16px 14px',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'linear-gradient(135deg,#00d46a,#00a854)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'13px',color:'#000',flexShrink:0}}>E</div>
              <div>
                <div style={{fontSize:'13px',fontWeight:600,letterSpacing:'-0.02em',color:'#e8e0d4'}}>EcoSpend</div>
                <div style={{fontSize:'9px',color:'#6b6560',letterSpacing:'.04em',marginTop:'1px'}}>AI FINANCE</div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav style={{flex:1,padding:'10px 8px',display:'flex',flexDirection:'column',gap:'1px'}}>
            {NAV.map(({href,label})=>{
              const active=path===href||(href!=='/dashboard'&&path.startsWith(href))
              return (
                <Link key={href} href={href} style={{display:'flex',alignItems:'center',gap:'8px',padding:'8px 10px',borderRadius:'8px',fontSize:'13px',fontWeight:active?500:400,color:active?'#e8e0d4':'#6b6560',background:active?'rgba(255,255,255,0.06)':'transparent',transition:'all .12s'}}>
                  <span style={{width:'5px',height:'5px',borderRadius:'50%',background:active?'#00d46a':'rgba(255,255,255,0.1)',flexShrink:0,transition:'all .12s'}}/>
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Bottom section */}
          <div style={{padding:'12px 10px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
            <div style={{borderRadius:'10px',padding:'12px',background:'rgba(0,212,106,0.07)',border:'1px solid rgba(0,212,106,0.15)'}}>
              <div style={{fontSize:'9px',color:'#6b6560',textTransform:'uppercase',letterSpacing:'.08em',marginBottom:'4px'}}>Eco Points</div>
              <div style={{fontFamily:'DM Mono,monospace',fontSize:'20px',fontWeight:500,color:'#00d46a',letterSpacing:'-0.02em'}}>1,240</div>
              <div style={{fontSize:'10px',color:'#6b6560',marginTop:'2px'}}>🌱 Green Saver</div>
            </div>
            <div style={{marginTop:'10px',display:'flex',alignItems:'center',gap:'8px',padding:'8px 10px',borderRadius:'8px',background:'rgba(255,255,255,0.03)'}}>
              <div style={{width:'26px',height:'26px',borderRadius:'50%',background:'rgba(0,212,106,0.15)',border:'1px solid rgba(0,212,106,0.25)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',fontWeight:700,color:'#00d46a',flexShrink:0}}>A</div>
              <div>
                <div style={{fontSize:'12px',fontWeight:500,color:'#e8e0d4'}}>Alex</div>
                <div style={{fontSize:'10px',color:'#6b6560'}}>SGD account</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div style={{marginLeft:'200px',flex:1,display:'flex',flexDirection:'column',minHeight:'100vh'}}>
          <header style={{padding:'12px 24px',borderBottom:'1px solid rgba(255,255,255,0.05)',display:'flex',justifyContent:'space-between',alignItems:'center',background:'rgba(26,22,18,0.9)',backdropFilter:'blur(20px)',position:'sticky',top:0,zIndex:10}}>
            <div>
              <div style={{fontSize:'14px',fontWeight:500,color:'#e8e0d4'}}>Good morning, Alex ☀️</div>
              <div style={{fontSize:'11px',color:'#6b6560',marginTop:'1px'}}>Monday, May 18 · SGD</div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{fontSize:'11px',color:'#6b6560',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'8px',padding:'5px 10px',cursor:'pointer'}}>🔔 3 new insights</div>
            </div>
          </header>
          <main style={{flex:1,padding:'20px 24px',overflowY:'auto'}}>{children}</main>
        </div>
      </div>
    </>
  )
}
