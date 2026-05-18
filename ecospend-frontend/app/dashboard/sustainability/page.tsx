export default function EcoPage() {
  return (
    <div>
      <div style={{marginBottom:'24px'}}>
        <div style={{fontSize:'20px',fontWeight:700,letterSpacing:'-0.02em'}}>Eco Tracker</div>
        <div style={{fontSize:'12px',color:'#555a67',marginTop:'3px'}}>Your carbon footprint · May 2026</div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px',marginBottom:'20px'}}>
        {[['Total CO₂','42.1 kg','↓ 12% vs last month','#00d46a'],['vs Average','68.0 kg','You\'re 38% below avg','#4d9fff'],['Saved','25.9 kg','Great progress! 🌱','#00d46a']].map(([label,value,sub,color])=>(
          <div key={label as string} style={{background:'#0e1014',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'14px',padding:'18px'}}>
            <div style={{fontSize:'10px',color:'#555a67',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:'10px'}}>{label}</div>
            <div style={{fontFamily:'DM Mono,monospace',fontSize:'24px',fontWeight:500,color:color as string}}>{value}</div>
            <div style={{fontSize:'11px',color:'#555a67',marginTop:'6px'}}>{sub}</div>
          </div>
        ))}
      </div>
      <div style={{background:'#0e1014',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'14px',padding:'18px'}}>
        <div style={{fontSize:'13px',fontWeight:600,marginBottom:'14px'}}>Carbon by Category</div>
        {[['🚗','Transport',18.2,'#2196F3'],['🍜','Food & Dining',12.4,'#FF9800'],['🏠','Housing',8.1,'#9C27B0'],['✈️','Travel',3.4,'#00BCD4']].map(([icon,name,kg,color])=>(
          <div key={name as string} style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
            <span style={{fontSize:'16px'}}>{icon}</span>
            <div style={{flex:1}}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'12px',marginBottom:'4px'}}>
                <span style={{color:'#8b909e'}}>{name}</span>
                <span style={{fontFamily:'DM Mono,monospace',color:'#555a67'}}>{kg} kg CO₂</span>
              </div>
              <div style={{height:'4px',background:'rgba(255,255,255,0.05)',borderRadius:'2px'}}>
                <div style={{width:`${(kg as number)/18.2*100}%`,height:'100%',background:color as string,borderRadius:'2px'}}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
