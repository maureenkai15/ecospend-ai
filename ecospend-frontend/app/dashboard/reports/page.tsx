'use client'
export default function ReportsPage() {
  return (
    <div>
      <div style={{fontSize:'20px',fontWeight:700,letterSpacing:'-0.02em',marginBottom:'6px'}}>Reports</div>
      <div style={{fontSize:'12px',color:'#555a67',marginBottom:'24px'}}>Download your financial reports</div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}}>
        {[['📊','Monthly Summary','May 2026 complete report','PDF'],['💳','Expense Export','All transactions as CSV','CSV'],['🌱','Carbon Report','Eco footprint analysis','PDF'],['🎯','Budget Review','Budget vs actual','PDF'],['📈','Trend Analysis','6-month spending trends','PDF'],['🤖','AI Insights','All agent recommendations','PDF']].map(([icon,title,desc,type])=>(
          <div key={title as string} style={{background:'#0e1014',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'14px',padding:'18px',cursor:'pointer',transition:'border-color .15s'}}
            onMouseEnter={ev=>(ev.currentTarget.style.borderColor='rgba(0,212,106,0.3)')}
            onMouseLeave={ev=>(ev.currentTarget.style.borderColor='rgba(255,255,255,0.06)')}>
            <div style={{fontSize:'24px',marginBottom:'10px'}}>{icon}</div>
            <div style={{fontSize:'13px',fontWeight:600,marginBottom:'4px'}}>{title}</div>
            <div style={{fontSize:'11px',color:'#555a67',marginBottom:'14px'}}>{desc}</div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{fontSize:'10px',padding:'3px 8px',borderRadius:'6px',background:'rgba(0,212,106,0.1)',color:'#00d46a',fontWeight:600}}>{type}</span>
              <span style={{fontSize:'12px',color:'#00d46a'}}>↓ Download</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
