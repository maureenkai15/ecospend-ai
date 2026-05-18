export default function DashboardPage() {
  return (
    <div style={{padding:'24px',color:'#e8eaf0'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px',marginBottom:'24px'}}>
        <div style={{background:'#13151a',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}><div style={{fontSize:'10px',color:'#555a67',marginBottom:'10px'}}>TOTAL SPENT</div><div style={{fontFamily:'monospace',fontSize:'22px'}}>$3,420</div><div style={{fontSize:'11px',color:'#555a67',marginTop:'6px'}}>↑ 8.2% vs April</div></div>
        <div style={{background:'#13151a',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}><div style={{fontSize:'10px',color:'#555a67',marginBottom:'10px'}}>REMAINING</div><div style={{fontFamily:'monospace',fontSize:'22px',color:'#00d46a'}}>$580</div><div style={{fontSize:'11px',color:'#555a67',marginTop:'6px'}}>14.5% of month left</div></div>
        <div style={{background:'#13151a',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}><div style={{fontSize:'10px',color:'#555a67',marginBottom:'10px'}}>CARBON</div><div style={{fontFamily:'monospace',fontSize:'22px',color:'#f5a623'}}>42.1 kg</div><div style={{fontSize:'11px',color:'#555a67',marginTop:'6px'}}>↓ 12% vs last month</div></div>
        <div style={{background:'#13151a',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}><div style={{fontSize:'10px',color:'#555a67',marginBottom:'10px'}}>SAVINGS RATE</div><div style={{fontFamily:'monospace',fontSize:'22px',color:'#4d9fff'}}>18.3%</div><div style={{fontSize:'11px',color:'#555a67',marginTop:'6px'}}>↑ 3.1% improving</div></div>
      </div>
      <div style={{background:'#13151a',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'}}>
        <div style={{fontSize:'13px',fontWeight:600,marginBottom:'12px'}}>AI Insights</div>
        <div style={{borderRadius:'8px',padding:'10px 12px',borderLeft:'2px solid #4d9fff',background:'#4d9fff18',marginBottom:'8px'}}><div style={{fontSize:'9px',textTransform:'uppercase',color:'#4d9fff',marginBottom:'4px',fontWeight:600}}>Spending Agent</div><div style={{fontSize:'12px',color:'#8b909e'}}>Dining is 29% of spend — 8% above usual.</div></div>
        <div style={{borderRadius:'8px',padding:'10px 12px',borderLeft:'2px solid #00d46a',background:'#00d46a18',marginBottom:'8px'}}><div style={{fontSize:'9px',textTransform:'uppercase',color:'#00d46a',marginBottom:'4px',fontWeight:600}}>Eco Coach</div><div style={{fontSize:'12px',color:'#8b909e'}}>MRT instead of Grab saves ~4.2 kg CO₂/month.</div></div>
        <div style={{borderRadius:'8px',padding:'10px 12px',borderLeft:'2px solid #f5a623',background:'#f5a62318'}}><div style={{fontSize:'9px',textTransform:'uppercase',color:'#f5a623',marginBottom:'4px',fontWeight:600}}>Budget Planner</div><div style={{fontSize:'12px',color:'#8b909e'}}>On track to exceed transport budget by $42.</div></div>
      </div>
    </div>
  )
}
