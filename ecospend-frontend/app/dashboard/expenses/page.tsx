'use client'
export default function ExpensesPage() {
  const expenses = [
    {merchant:'Koufu Food Court',cat:'Dining',amount:12.80,date:'Today',color:'#FF9800',icon:'🍜',anomaly:false},
    {merchant:'Grab',cat:'Transport',amount:18.40,date:'Today',color:'#2196F3',icon:'🚗',anomaly:false},
    {merchant:'FairPrice Finest',cat:'Groceries',amount:67.20,date:'Yesterday',color:'#4CAF50',icon:'🛒',anomaly:false},
    {merchant:'Netflix',cat:'Subscriptions',amount:15.98,date:'May 14',color:'#673AB7',icon:'📱',anomaly:false},
    {merchant:'Watsons',cat:'Personal Care',amount:45.00,date:'May 14',color:'#FFC107',icon:'✨',anomaly:true},
    {merchant:'MRT Monthly Pass',cat:'Transport',amount:128.00,date:'May 13',color:'#2196F3',icon:'🚇',anomaly:false},
    {merchant:'Uniqlo',cat:'Shopping',amount:89.90,date:'May 12',color:'#FF5722',icon:'🛍️',anomaly:false},
    {merchant:'Starbucks',cat:'Dining',amount:8.50,date:'May 12',color:'#FF9800',icon:'☕',anomaly:false},
  ]
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'24px'}}>
        <div>
          <div style={{fontSize:'20px',fontWeight:700,letterSpacing:'-0.02em'}}>Expenses</div>
          <div style={{fontSize:'12px',color:'#555a67',marginTop:'3px'}}>8 transactions · May 2026</div>
        </div>
        <button style={{background:'#00d46a',color:'#000',border:'none',borderRadius:'10px',padding:'10px 18px',fontSize:'13px',fontWeight:700,cursor:'pointer',fontFamily:'Syne,sans-serif'}}>+ Add Expense</button>
      </div>
      <div style={{background:'#0e1014',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'14px',overflow:'hidden'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 120px 90px 80px',padding:'10px 20px',borderBottom:'1px solid rgba(255,255,255,0.05)',fontSize:'10px',color:'#3d4251',textTransform:'uppercase',letterSpacing:'.06em'}}>
          <span>Merchant</span><span>Category</span><span>Date</span><span style={{textAlign:'right'}}>Amount</span>
        </div>
        {expenses.map((e,i)=>(
          <div key={i} style={{display:'grid',gridTemplateColumns:'1fr 120px 90px 80px',padding:'14px 20px',borderBottom:i<expenses.length-1?'1px solid rgba(255,255,255,0.04)':'none',alignItems:'center',transition:'background .15s',cursor:'default'}}
            onMouseEnter={ev=>(ev.currentTarget.style.background='rgba(255,255,255,0.02)')}
            onMouseLeave={ev=>(ev.currentTarget.style.background='transparent')}>
            <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
              <div style={{width:'34px',height:'34px',borderRadius:'10px',background:`${e.color}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'15px',flexShrink:0}}>{e.icon}</div>
              <div>
                <div style={{fontSize:'13px',fontWeight:500,display:'flex',alignItems:'center',gap:'8px'}}>
                  {e.merchant}
                  {e.anomaly&&<span style={{fontSize:'10px',padding:'2px 7px',borderRadius:'6px',background:'rgba(245,166,35,0.15)',color:'#f5a623',fontWeight:600}}>⚠ anomaly</span>}
                </div>
              </div>
            </div>
            <span style={{fontSize:'12px',color:'#6b7180'}}>{e.cat}</span>
            <span style={{fontSize:'12px',color:'#3d4251',fontFamily:'DM Mono,monospace'}}>{e.date}</span>
            <span style={{fontSize:'13px',fontFamily:'DM Mono,monospace',textAlign:'right',fontWeight:500}}>${e.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
