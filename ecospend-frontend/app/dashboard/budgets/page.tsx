export default function BudgetsPage() {
  const budgets = [
    {cat:'Dining',icon:'🍜',spent:990,limit:800,color:'#FF9800'},
    {cat:'Transport',icon:'🚇',spent:310,limit:400,color:'#2196F3'},
    {cat:'Groceries',icon:'🛒',spent:245,limit:350,color:'#4CAF50'},
    {cat:'Entertainment',icon:'🎮',spent:80,limit:200,color:'#E91E63'},
    {cat:'Shopping',icon:'🛍️',spent:140,limit:300,color:'#FF5722'},
    {cat:'Health',icon:'💊',spent:60,limit:150,color:'#F44336'},
  ]
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'24px'}}>
        <div>
          <div style={{fontSize:'20px',fontWeight:700,letterSpacing:'-0.02em'}}>Budgets</div>
          <div style={{fontSize:'12px',color:'#555a67',marginTop:'3px'}}>May 2026 · Monthly limits</div>
        </div>
        <button style={{background:'#00d46a',color:'#000',border:'none',borderRadius:'10px',padding:'10px 18px',fontSize:'13px',fontWeight:700,cursor:'pointer',fontFamily:'Syne,sans-serif'}}>+ New Budget</button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}}>
        {budgets.map(b=>{
          const pct=Math.min(b.spent/b.limit,1)*100
          const over=b.spent>b.limit
          return (
            <div key={b.cat} style={{background:'#0e1014',border:`1px solid ${over?'rgba(255,91,91,0.2)':'rgba(255,255,255,0.06)'}`,borderRadius:'14px',padding:'18px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'14px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <span style={{fontSize:'18px'}}>{b.icon}</span>
                  <span style={{fontSize:'13px',fontWeight:600}}>{b.cat}</span>
                </div>
                {over&&<span style={{fontSize:'10px',padding:'3px 8px',borderRadius:'6px',background:'rgba(255,91,91,0.15)',color:'#ff5b5b',fontWeight:600}}>Over</span>}
              </div>
              <div style={{marginBottom:'10px'}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'12px',marginBottom:'6px'}}>
                  <span style={{color:'#6b7180'}}>Spent</span>
                  <span style={{fontFamily:'DM Mono,monospace',color:over?'#ff5b5b':'#e8eaf0'}}>${b.spent} / ${b.limit}</span>
                </div>
                <div style={{height:'6px',background:'rgba(255,255,255,0.05)',borderRadius:'3px'}}>
                  <div style={{width:`${pct}%`,height:'100%',background:over?'#ff5b5b':b.color,borderRadius:'3px',transition:'width .6s ease'}}/>
                </div>
              </div>
              <div style={{fontSize:'11px',color:'#555a67'}}>{over?`$${b.spent-b.limit} over limit`:`$${b.limit-b.spent} remaining`}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
