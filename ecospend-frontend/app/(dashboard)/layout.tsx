'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NAV = [
  { href: '/dashboard', label: 'Overview', icon: '◈' },
  { href: '/dashboard/expenses', label: 'Expenses', icon: '◉' },
  { href: '/dashboard/ai-chat', label: 'AI Agents', icon: '◌' },
]
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <div style={{display:'flex',minHeight:'100vh'}}>
      <aside style={{width:'200px',background:'#111318',borderRight:'1px solid rgba(255,255,255,0.07)',position:'fixed',height:'100vh',display:'flex',flexDirection:'column'}}>
        <div style={{padding:'16px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',alignItems:'center',gap:'8px'}}>
          <div style={{width:'26px',height:'26px',borderRadius:'8px',background:'#00d46a',color:'#000',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'12px'}}>E</div>
          <span style={{fontWeight:700,fontSize:'13px'}}>EcoSpend AI</span>
        </div>
        <nav style={{flex:1,padding:'8px'}}>
          {NAV.map(({href,label,icon})=>{
            const active=path===href||(href!=='/dashboard'&&path.startsWith(href))
            return <Link key={href} href={href} style={{display:'flex',alignItems:'center',gap:'8px',padding:'8px 10px',borderRadius:'8px',fontSize:'13px',textDecoration:'none',color:active?'#fff':'#8b909e',background:active?'#181b22':'transparent',borderLeft:active?'2px solid #00d46a':'2px solid transparent',marginBottom:'2px'}}><span style={{color:active?'#00d46a':'#555a67'}}>{icon}</span>{label}</Link>
          })}
        </nav>
      </aside>
      <main style={{marginLeft:'200px',flex:1,background:'#0a0b0d',minHeight:'100vh'}}>
        <header style={{padding:'12px 24px',borderBottom:'1px solid rgba(255,255,255,0.07)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontWeight:600,fontSize:'14px',color:'#e8eaf0'}}>Good morning, Alex ☀️</div>
          <div style={{width:'30px',height:'30px',borderRadius:'50%',background:'#181b22',border:'1px solid rgba(255,255,255,0.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',color:'#00d46a',fontWeight:600}}>A</div>
        </header>
        {children}
      </main>
    </div>
  )
}
