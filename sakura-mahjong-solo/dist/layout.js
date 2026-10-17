'use strict';
// Fit the complete board inside the space left after the hand and controls.
function boardFit(width,height){return Math.max(.01,Math.min(1.25,width/640,height/480))}
function fitBoard(){const frame=document.querySelector('.table-viewport'),table=document.querySelector('#table');if(!frame||!table||document.querySelector('#game').hidden)return;const scale=boardFit(frame.clientWidth,frame.clientHeight);table.style.transform=`translate(-50%,-50%) scale(${scale})`}
function fitLobby(){const frame=document.querySelector('.lobby-viewport'),lobby=document.querySelector('#lobby');if(!frame||!lobby||lobby.hidden)return;const w=Math.min(1120,Math.max(640,frame.clientWidth));lobby.style.width=w+'px';const scale=Math.min(1,frame.clientWidth/w,frame.clientHeight/lobby.scrollHeight);lobby.style.transform=`translateX(-50%) scale(${scale})`}
function fitViews(){fitBoard();fitLobby()}
window.addEventListener('resize',fitViews);
if(window.visualViewport)window.visualViewport.addEventListener('resize',fitViews);
if(typeof ResizeObserver!=='undefined'){const observer=new ResizeObserver(fitViews);for(const selector of ['.table-viewport','.lobby-viewport','.hand-area']){const el=document.querySelector(selector);if(el)observer.observe(el)}}
if(typeof MutationObserver!=='undefined'){const observer=new MutationObserver(fitViews);observer.observe(document.querySelector('#game'),{attributes:true,attributeFilter:['hidden']});observer.observe(document.querySelector('#lobby'),{attributes:true,attributeFilter:['hidden']})}
if(document.fonts?.ready)document.fonts.ready.then(fitViews);
fitViews();
