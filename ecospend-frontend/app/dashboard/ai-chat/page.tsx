'use client'
import { useState } from 'react'
type Agent = 'spending'|'budget'|'eco'|'habit'
const AGENTS = {
  spending:{name:'Spending Analyzer',color:'#4d9fff',greeting:"Hi! I've analysed your last 30 days. You spent **$3,420** — dining is your biggest variable at 29%. What would you like to explore?"},
  budget:{name:'Budget Planner',color:'#f5a623',greeting:"At your current pace you'll spend ~$3,850 this month — $650 over budget. Want me to suggest a rebalancing plan?"},
  eco:{name:'Eco Coach',color:'#00d46a',greeting:"Your carbon footprint is **42.1 kg CO₂** this month — 12% below average! Let's find more ways to improve."},
  habit:{name:'Habit Coach',color:'#E91E63',greeting:"You've maintained a **12-day** no-impulse streak! 🔥 Your savings rate improved from 15% → 18% over 3 months."},
}
const REPLIES = {
  spending:["Dining ($990) is 29% of total — 8% above your usual 21%. You ate out 18× vs your usual 12×.","I spotted an anomaly at Watsons ($45) — 2× your usual personal care spend.","Weekends cost you 40% more on average. Saturday dining alone averages $68."],
  budget:["At current pace: $3,850/month. Key lever: cut dining by $200 to stay on track.","ML forecast for June: $3,200 if you maintain discipline. Your best month yet!","I'd suggest reallocating $100 from Entertainment to a buffer for transport."],
  eco:["Switching to MRT for your daily commute saves ~4.2 kg CO₂ per month — 50 kg/year.","Your plant-based meal frequency is already above average. 3× more per week saves 3 kg CO₂.","Top eco opportunity: reduce car usage by 20% to drop footprint by 8 kg/month."],
  habit:["You're 3 days from the 'Mindful Spender' badge (15-day streak). Keep logging!","Savings rate trend: 15% → 16% → 18% over 3 months. On track for 22% by August.","Users who log same-day have 40% better budget accuracy. You're averaging 2 hours — excellent!"],
}
export default function AIChatPage() {
  const [agent,setAgent]=useState<Agent>('spending')
  const [msgs,setMsgs]=useState([{role:'agent',text:AGENTS.spending.greeting}])
  const [input,setInput]=useState('')
  const [idx,setIdx]=useState({spending:0,budget:0,eco:0,habit:0})
  const a=AGENTS[agent]
  function switchAgent(a:Agent){setAgent(a);setMsgs([{role:'agent',text:AGENTS[a].greeting}])}
  function send(txt=input){
    if(!txt.trim())return
    setInput('')
    setMsgs(m=>[...m,{role:'user',text:txt}])
    setTimeout(()=>{
      const r=REPLIES[agent]
      setMsgs(m=>[...m,{role:'agent',text:r[idx[agent]%r.length]}])
      setIdx(i=>({...i,[agent]:i[agent]+1}))
    },700)
  }
  return (
    <div style={{maxWidth:'680px'}}>
      <div style={{marginBottom:'20px'}}>
        <div style={{fontSize:'20px',fontWeight:700,letterSpacing:'-0.02em',marginBottom:'14px'}}>AI Agents</div>
        <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
          {(Object.keys(AGENTS) as Agent[]).map(k=>(
            <button key={k} onClick={()=>switchAgent(k)} style={{padding:'8px 16px',borderRadius:'10px',fontSize:'12px',fontWeight:600,cursor:'pointer',fontFamily:'Syne,sans-serif',background:agent===k?`${AGENTS[k].color}20`:'rgba(255,255,255,0.04)',border:`1px solid ${agent===k?AGENTS[k].color+'44':'rgba(255,255,255,0.07)'}`,color:agent===k?AGENTS[k].color:'#6b7180',transition:'all .15s'}}>
              {AGENTS[k].name}
            </button>
          ))}
        </div>
      </div>
      <div style={{background:'#0e1014',border:'1px solid rgba(255,255,255,0.06)',borderRadius:'16px',overflow:'hidden'}}>
        <div style={{padding:'14px 18px',borderBottom:'1px solid rgba(255,255,255,0.05)',display:'flex',alignItems:'center',gap:'8px'}}>
          <div style={{width:'8px',height:'8px',borderRadius:'50%',background:a.color}}/>
          <span style={{fontSize:'13px',fontWeight:600}}>{a.name}</span>
          <span style={{marginLeft:'auto',fontSize:'10px',padding:'3px 10px',borderRadius:'6px',background:`${a.color}20`,color:a.color,fontWeight:600}}>Active</span>
        </div>
        <div style={{padding:'16px',minHeight:'280px',maxHeight:'380px',overflowY:'auto',display:'flex',flexDirection:'column',gap:'10px'}}>
          {msgs.map((m,i)=>(
            <div key={i} style={{textAlign:m.role==='user'?'right':'left'}}>
              {m.role==='agent'
                ?<div style={{display:'inline-block',maxWidth:'85%',background:'rgba(255,255,255,0.04)',borderRadius:'12px',borderLeft:`2px solid ${a.color}`,padding:'10px 14px',fontSize:'12px',lineHeight:1.6,color:'#8b909e',textAlign:'left'}} dangerouslySetInnerHTML={{__html:m.text.replace(/\*\*(.*?)\*\*/g,'<strong style="color:#e8eaf0">$1</strong>')}}/>
                :<span style={{display:'inline-block',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'8px 14px',fontSize:'12px',color:'#e8eaf0'}}>{m.text}</span>
              }
            </div>
          ))}
        </div>
        <div style={{padding:'14px 16px',borderTop:'1px solid rgba(255,255,255,0.05)',display:'flex',gap:'10px'}}>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder={`Ask ${a.name.toLowerCase()}...`}
            style={{flex:1,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'10px 14px',color:'#e8eaf0',fontFamily:'Syne,sans-serif',fontSize:'13px',outline:'none'}}/>
          <button onClick={()=>send()} style={{background:'#00d46a',color:'#000',border:'none',borderRadius:'10px',padding:'10px 18px',fontSize:'13px',fontWeight:700,cursor:'pointer',fontFamily:'Syne,sans-serif'}}>Send</button>
        </div>
      </div>
    </div>
  )
}
