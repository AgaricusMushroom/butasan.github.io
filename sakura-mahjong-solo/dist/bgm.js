'use strict';
// Original, locally rendered Celtic-style air. Playback is independent of SFX.
const bgmAudio=document.createElement('audio');bgmAudio.src='assets/celtic-garden.wav';bgmAudio.loop=true;bgmAudio.preload='auto';
let bgmEnabled=true,bgmVolume=.35,bgmPending=false,bgmGeneration=0;
try{const p=JSON.parse(localStorage.getItem('sakura-bgm')||'null');bgmEnabled=p?.enabled??true;bgmVolume=Number.isFinite(p?.volume)?Math.max(0,Math.min(1,p.volume)):.35}catch{}
function bgmWanted(){return !!G&&!G.finished&&!$('#game').hidden&&!document.hidden&&bgmEnabled&&bgmVolume>0}
function syncBgm(){bgmAudio.volume=bgmVolume;if(!bgmWanted()){bgmGeneration++;bgmAudio.pause();bgmPending=false;return}if(!bgmAudio.paused||bgmPending)return;bgmPending=true;const token=++bgmGeneration;const result=bgmAudio.play();if(result?.then)result.then(()=>{if(token===bgmGeneration){bgmPending=false;if(!bgmWanted())bgmAudio.pause()}}).catch(()=>{if(token===bgmGeneration)bgmPending=false});else bgmPending=false}
function updateBgmControls(){$('#bgm').textContent='BGM '+(bgmEnabled?'ON':'OFF');$('#bgm').setAttribute('aria-pressed',String(bgmEnabled));$('#bgm-volume').value=Math.round(bgmVolume*100);try{localStorage.setItem('sakura-bgm',JSON.stringify({enabled:bgmEnabled,volume:bgmVolume}))}catch{}}
$('#bgm').onclick=()=>{bgmEnabled=!bgmEnabled;updateBgmControls();syncBgm()};$('#bgm-volume').oninput=e=>{bgmVolume=Math.max(0,Math.min(1,Number(e.target.value)/100));updateBgmControls();syncBgm()};
const bgmEnter=enterGame,bgmHome=home,bgmFinish=finishMatch;
enterGame=function(){bgmEnter();syncBgm()};home=function(){bgmHome();syncBgm()};finishMatch=function(){bgmFinish();syncBgm()};
// Existing home button captured the earlier function, so bind the wrapper too.
$('#home').onclick=home;
document.addEventListener('pointerdown',syncBgm);document.addEventListener('keydown',syncBgm);document.addEventListener('visibilitychange',syncBgm);window.addEventListener('pagehide',()=>{bgmGeneration++;bgmAudio.pause();bgmPending=false});
updateBgmControls();
