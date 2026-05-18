'use client'
import Link from 'next/link'
import { useState } from 'react'

const card = {background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'16px'} as React.CSSProperties
const label = {fontSize:'10px',color:'#6b6560',textTransform:'uppercase' as const,letterSpacing:'.06em',marginBottom:'8px'}
const mono = {fontFamily:'DM Mono,monospace'}

export default function DashboardPage() {
  const [days,setDays]=useState(30)
  const cats=[
    {name:'Dining',    pct:29,amt:990, color:'#e8845c',icon:'🍜'},
    {name:'Transport', pct:19,amt:650, color:'#6b9fff',icon:'🚇'},
    {name:'Groceries', pct:16,amt:547, color:'#6bcf8f',icon:'🛒'},
    {name:'Housing',   pct:12,amt:410, color:'#b87bff',icon:'🏠'},
    {name:'Other',     pct:24,amt:823, color:'#888078',icon:'📦'},
  ]
  const txns=[
    {m:'Koufu Food Court',c:'Dining',   a:12.80,d:'Today',    icon:'🍜',color:'#e8845c',anomaly:false},
    {m:'Grab',            c:'Transport',a:18.40,d:'Today',    icon:'🚗',color:'#6b9fff',anomaly:false},
    {m:'FairPrice',       c:'Groceries',a:67.20,d:'Yesterday',icon:'🛒',color:'#6bcf8f',anomaly:false},
    {m:'Netflix',         c:'Subs',     a:15.98,d:'May 14',  icon:'📱',color:'#b87bff',anomaly:false},
    {m:'Watsons',         c:'Personal', a:45.00,d:'May 14',  icon:'✨',color:'#f5c842',anomaly:true},
  ]

  return (
    <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>

      {/* Stat strip */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'10px'}}>
        {[
          {l:'Total Spent',v:'$3,420',s:'↑ 8.2% vs Apr',vc:'#e8e0d4'},
          {l:'Remaining',  v:'$580',  s:'14.5% of month',vc:'#00d46a'},
          {l:'Carbon CO₂', v:'42.1kg',s:'↓ 12% improved',vc:'#f5a623'},
          {l:'Savings Rate',v:'18.3%',s:'↑ 3.1% growing', vc:'#6b9fff'},
        ].map(({l,v,s,vc})=>(
          <div key={l} style={{...card,padding:'14px 16px'}}>
            <div style={label}>{l}</div>
            <div style={{...mono,fontSize:'22px',fontWeight:500,color:vc,lineHeight:1,letterSpacing:'-0.03em'}}>{v}</div>
            <div style={{fontSize:'11px',color:'#6b6560',marginTop:'6px'}}>{s}</div>
          </div>
        ))}
      </div>

      {/* Main row */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 200px',gap:'10px'}}>

        {/* Category bars */}
        <div style={card}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'14px'}}>
            <div style={{fontSize:'13px',fontWeight:600,color:'#e8e0d4'}}>Spending breakdown</div>
            <div style={{display:'flex',gap:'4px'}}>
              {[7,30,90].map(d=>(
                <button key={d} onClick={()=>setDays(d)} style={{padding:'3px 9px',borderRadius:'6px',fontSize:'11px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',background:days===d?'rgba(255,255,255,0.08)':'transparent',border:days===d?'1px solid rgba(255,255,255,0.12)':'1px solid transparent',color:days===d?'#e8e0d4':'#6b6560',transition:'all .12s'}}>{d}d</button>
              ))}
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            {cats.map(c=>(
              <div key={c.name} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span style={{fontSize:'14px',width:'20px',textAlign:'center',flexShrink:0}}>{c.icon}</span>
                <div style={{flex:1}}>
                  <div style={{display:'flex',justifyContent:'space-between',fontSize:'12px',marginBottom:'5px'}}>
                    <span style={{color:'#a09890'}}>{c.name}</span>
                    <span style={{...mono,fontSize:'11px',color:'#6b6560'}}>${c.amt}</span>
                  </div>
                  <div style={{height:'3px',background:'rgba(255,255,255,0.05)',borderRadius:'2px'}}>
                    <div style={{width:`${c.pct}%`,height:'100%',background:c.color,borderRadius:'2px',opacity:.85}}/>
                  </div>
                </div>
                <span style={{...mono,fontSize:'11px',color:'#6b6560',width:'26px',textAlign:'right',flexShrink:0}}>{c.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Budget health */}
        <div style={card}>
          <div style={{fontSize:'13px',fontWeight:600,color:'#e8e0d4',marginBottom:'14px'}}>Budget health</div>
          {[
            {n:'Dining',     s:990, l:800, c:'#e8845c',over:true},
            {n:'Transport',  s:310, l:400, c:'#6b9fff',over:false},
            {n:'Groceries',  s:245, l:350, c:'#6bcf8f',over:false},
            {n:'Entertain.',s:80,  l:200, c:'#e8845c',over:false},
          ].map(b=>(
            <div key={b.n} style={{marginBottom:'12px'}}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'11px',marginBottom:'4px'}}>
                <span style={{color:b.over?'#e8845c':'#a09890'}}>{b.n}{b.over?' ⚠':''}</span>
                <span style={{...mono,fontSize:'10px',color:'#6b6560'}}>{Math.round(b.s/b.l*100)}%</span>
              </div>
              <div style={{height:'3px',background:'rgba(255,255,255,0.05)',borderRadius:'2px'}}>
                <div style={{width:`${Math.min(b.s/b.l,1)*100}%`,height:'100%',background:b.over?'#e8845c':b.c,borderRadius:'2px',opacity:.85}}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>

        {/* Recent transactions */}
        <div style={card}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
            <div style={{fontSize:'13px',fontWeight:600,color:'#e8e0d4'}}>Recent transactions</div>
            <Link href="/dashboard/expenses" style={{fontSize:'11px',color:'#00d46a'}}>View all →</Link>
          </div>
          {txns.map((t,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',padding:'8px 0',borderBottom:i<txns.length-1?'1px solid rgba(255,255,255,0.04)':'none'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'9px',background:`${t.color}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px',flexShrink:0}}>{t.icon}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:'12px',fontWeight:500,color:'#e8e0d4',display:'flex',alignItems:'center',gap:'6px'}}>
                  <span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{t.m}</span>
                  {t.anomaly&&<span style={{fontSize:'9px',padding:'1px 5px',borderRadius:'4px',background:'rgba(245,200,66,0.12)',color:'#f5c842',flexShrink:0}}>anomaly</span>}
                </div>
                <div style={{fontSize:'10px',color:'#6b6560',marginTop:'1px'}}>{t.c} · {t.d}</div>
              </div>
              <div style={{...mono,fontSize:'12px',fontWeight:500,flexShrink:0}}>${t.a.toFixed(2)}</div>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div style={card}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
            <div style={{fontSize:'13px',fontWeight:600,color:'#e8e0d4'}}>AI Insights</div>
            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
              <div style={{width:'5px',height:'5px',borderRadius:'50%',background:'#00d46a'}}/>
              <span style={{fontSize:'10px',color:'#6b6560'}}>4 agents active</span>
            </div>
          </div>
          {[
            {c:'#6b9fff',t:'Spending',   tx:'Dining is 29% of spend — 8% above usual. Try cooking at home twice more this week.'},
            {c:'#00d46a',t:'Eco Coach',  tx:'Taking MRT instead of Grab 3×/week saves ~4.2 kg CO₂ monthly.'},
            {c:'#f5a623',t:'Budget',     tx:'At current pace you\'ll exceed transport budget by $42. Reduce 2 trips.'},
            {c:'#e8845c',t:'Habit',      tx:'12-day no-impulse streak 🔥 — 3 days from the Mindful Spender badge!'},
          ].map(({c,t,tx})=>(
            <div key={t} style={{borderRadius:'8px',padding:'9px 11px',borderLeft:`2px solid ${c}`,background:`${c}0d`,marginBottom:'7px'}}>
              <div style={{fontSize:'9px',color:c,textTransform:'uppercase',letterSpacing:'.07em',marginBottom:'3px',fontWeight:600}}>{t}</div>
              <div style={{fontSize:'11px',color:'#a09890',lineHeight:1.55}}>{tx}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
