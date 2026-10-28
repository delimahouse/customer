/* DeLima House refined floating option menus — progressive enhancement of native selects. */
(()=>{'use strict';
 let active=null,layer=null;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function dismiss(focus=false){if(!active)return;const old=active;active=null;layer?.remove();layer=null;old.button.setAttribute('aria-expanded','false');if(focus&&old.button.isConnected)old.button.focus()}
 function enhance(select){if(select.closest('.dl-select')||select.multiple||select.size>1)return;
  const box=document.createElement('span');box.className='dl-select';select.parentNode.insertBefore(box,select);box.append(select);
  const trigger=document.createElement('button');trigger.type='button';trigger.className='dl-select-trigger';trigger.setAttribute('aria-haspopup','listbox');trigger.setAttribute('aria-expanded','false');
  const title=select.getAttribute('aria-label')||select.closest('label')?.querySelector('span')?.textContent?.trim()||'Pilih opsi';
  trigger.setAttribute('aria-label',title);
  trigger.innerHTML='<span class="dl-select-title"></span><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="m7 10 5 5 5-5"/></svg>';
  select.tabIndex=-1; select.setAttribute('aria-hidden','true');box.append(trigger);const refresh=()=>{trigger.querySelector('.dl-select-title').textContent=select.selectedOptions[0]?.textContent||'';trigger.disabled=select.disabled};refresh();
  trigger.addEventListener('click',()=>active?.select===select?dismiss():open(select,trigger));
  trigger.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp','Enter',' '].includes(e.key)){e.preventDefault();open(select,trigger,e.key==='ArrowUp'?-1:0)}});
  select.addEventListener('change',refresh);
 }
 function open(select,button,startIndex){dismiss();if(select.disabled)return;layer=document.createElement('div');layer.className='dl-popover';layer.setAttribute('role','listbox');layer.setAttribute('aria-label',button.getAttribute('aria-label')||'Options');layer.tabIndex=-1;
  const opts=[...select.options];layer.innerHTML=opts.map((o,i)=>`<button type="button" class="dl-option${o.selected?' selected':''}" role="option" aria-selected="${o.selected}" data-idx="${i}" ${o.disabled?'disabled':''}><span class="dl-option-text">${esc(o.textContent)}</span><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></button>`).join('');
  document.body.append(layer);active={select,button};button.setAttribute('aria-expanded','true');
  const r=button.getBoundingClientRect();const width=Math.max(200,Math.min(330,r.width+40));layer.style.width=width+'px';let left=Math.min(r.left,innerWidth-width-12);layer.style.left=Math.max(12,left)+'px';
  const h=Math.min(layer.scrollHeight,Math.max(190,innerHeight-28));let top=r.bottom+8;if(top+h>innerHeight-12&&r.top>h+8)top=r.top-h-8;layer.style.top=Math.max(12,Math.min(top,innerHeight-h-12))+'px';
  const choose=(i)=>{if(!active||opts[i]?.disabled)return;select.selectedIndex=i;select.dispatchEvent(new Event('change',{bubbles:true}));dismiss(true)};
  layer.addEventListener('click',e=>{const it=e.target.closest('[data-idx]');if(it)choose(Number(it.dataset.idx))});
  layer.addEventListener('keydown',e=>{const a=[...layer.querySelectorAll('.dl-option:not(:disabled)')],cur=document.activeElement;let i=a.indexOf(cur);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();a[(i+(e.key==='ArrowDown'?1:-1)+a.length)%a.length]?.focus()}else if(e.key==='Home'){e.preventDefault();a[0]?.focus()}else if(e.key==='End'){e.preventDefault();a.at(-1)?.focus()}else if(e.key==='Escape'){e.preventDefault();dismiss(true)}else if(e.key==='Tab'){dismiss()}});
  const pick=startIndex===-1?opts.map((o,i)=>o.disabled?-1:i).filter(i=>i>=0).at(-1):opts.findIndex(o=>o.selected&&!o.disabled);
  layer.querySelector(`[data-idx="${pick>=0?pick:0}"]`)?.focus({preventScroll:true});
 }
 document.addEventListener('pointerdown',e=>{if(active&&!e.target.closest('.dl-popover')&&!e.target.closest('.dl-select'))dismiss()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&active){e.stopPropagation();dismiss(true)}} ,true);
 window.addEventListener('resize',()=>dismiss());window.addEventListener('scroll',e=>{if(active&&layer&&!layer.contains(e.target))dismiss()},true);
 function scan(root=document){for(const el of root.querySelectorAll('select:not([multiple])'))enhance(el)}
 const observer=new MutationObserver(records=>{for(const record of records){for(const node of record.addedNodes){if(node.nodeType!==1)continue;if(node.matches?.('select'))enhance(node);else if(node.querySelector?.('select'))scan(node)}}});
 function init(){scan();observer.observe(document.body,{subtree:true,childList:true})}
 document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init,{once:true}):init();
})();
