// ONE ワイヤーフレーム コメントシステム
// 各ページで var WF_PAGE_ID = 'one-wf-xxx'; を先に定義してから読み込む
(function(){
  try{firebase.initializeApp({apiKey:"AIzaSyArq3B1YkeiBv-PgpBkMrRGWsOkuXx4fxo",authDomain:"view-crater.firebaseapp.com",projectId:"view-crater",storageBucket:"view-crater.firebasestorage.app",messagingSenderId:"523845906687",appId:"1:523845906687:web:b5b6612eabe1af9544dcca"});}catch(e){}
  var db=firebase.firestore();
  var PAGE_ID=window.WF_PAGE_ID||'one-wf-unknown';
  var commentMode=false,showResolved=true,comments=[],activePopupId=null,inputPopup=null,viewPopup=null;
  var overlay=document.getElementById('wf-overlay');

  document.getElementById('wf-comment-btn').addEventListener('click',function(){
    commentMode=!commentMode;
    overlay.style.pointerEvents=commentMode?'auto':'none';
    overlay.style.cursor=commentMode?'crosshair':'default';
    this.classList.toggle('wf-active',commentMode);
    this.textContent=commentMode?'✕ 完了':'💬 コメント追加';
    if(!commentMode)closeInput();
  });

  document.getElementById('wf-toggle-resolved').addEventListener('click',function(){
    showResolved=!showResolved;
    this.textContent=showResolved?'解決済みを隠す':'解決済みを表示';
    renderPins();
  });

  overlay.addEventListener('click',function(e){
    if(e.target.closest('.c-pin')||e.target.closest('.c-input-popup'))return;
    closeInput();closeView();
    var rect=overlay.getBoundingClientRect();
    var x=((e.clientX-rect.left)/rect.width*100).toFixed(2);
    var pageEl=document.querySelector('.page');
    var pageRect=pageEl.getBoundingClientRect();
    var y=((e.clientY-pageRect.top+window.pageYOffset)/pageEl.offsetHeight*100).toFixed(2);
    inputPopup=document.createElement('div');
    inputPopup.className='c-input-popup';
    inputPopup.style.cssText='position:fixed;left:'+Math.min(e.clientX+12,window.innerWidth-290)+'px;top:'+Math.min(e.clientY+12,window.innerHeight-160)+'px;z-index:10000;';
    inputPopup.innerHTML='<textarea id="c-text" rows="3" placeholder="コメントを入力…"></textarea><div class="c-input-row"><input class="c-input-name" id="c-name" type="text" placeholder="名前（任意）"><button class="c-cancel-btn" id="c-cancel">キャンセル</button><button class="c-send-btn" id="c-send">送信</button></div>';
    document.body.appendChild(inputPopup);
    document.getElementById('c-text').focus();
    document.getElementById('c-cancel').addEventListener('click',closeInput);
    document.getElementById('c-send').addEventListener('click',function(){
      var text=document.getElementById('c-text').value.trim();
      var name=document.getElementById('c-name').value.trim()||'匿名';
      if(!text)return;
      db.collection('comments').doc(PAGE_ID).collection('items').add({x:parseFloat(x),y:parseFloat(y),text:text,name:name,resolved:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
      closeInput();
    });
    document.getElementById('c-text').addEventListener('keydown',function(ev){if(ev.key==='Enter'&&!ev.shiftKey){ev.preventDefault();document.getElementById('c-send').click();}});
  });

  function renderPins(){
    overlay.querySelectorAll('.c-pin').forEach(function(p){p.remove();});
    var visible=comments.filter(function(c){return showResolved||!c.resolved;}).sort(function(a,b){return(a.createdAt?a.createdAt.seconds:0)-(b.createdAt?b.createdAt.seconds:0);});
    visible.forEach(function(c,i){
      var pin=document.createElement('div');
      pin.className='c-pin'+(c.resolved?' resolved':'');
      pin.style.left=c.x+'%';pin.style.top=c.y+'%';
      pin.innerHTML='<span class="c-pin-num">'+(i+1)+'</span>';
      pin.dataset.id=c.id;
      pin.addEventListener('click',function(e){e.stopPropagation();if(activePopupId===c.id){closeView();return;}closeView();closeInput();showView(c,pin,i+1);});
      overlay.appendChild(pin);
    });
    renderPanel(visible);
    document.getElementById('wf-count').textContent=comments.length+'件';
  }

  function showView(c,pin,num){
    activePopupId=c.id;
    var pr=pin.getBoundingClientRect();
    viewPopup=document.createElement('div');
    viewPopup.className='c-view-popup';
    viewPopup.style.cssText='position:fixed;left:'+Math.min(pr.right+8,window.innerWidth-320)+'px;top:'+Math.max(pr.top-40,60)+'px;z-index:10001;';
    var date=c.createdAt?new Date(c.createdAt.seconds*1000).toLocaleDateString('ja-JP'):'';
    viewPopup.innerHTML='<div class="c-view-popup-header"><span class="c-view-num">#'+num+' '+esc(c.name||'匿名')+'</span><div class="c-view-actions"><button class="c-view-btn edit">編集</button><button class="c-view-btn resolve">'+(c.resolved?'再開':'解決')+'</button><button class="c-view-btn delete">削除</button></div></div><div class="c-view-text" id="pvt-'+c.id+'">'+esc(c.text)+'</div>'+(c.resolved?'<span class="c-view-resolved-badge">✓ 解決済み</span>':'')+(date?'<div class="c-view-meta">'+date+'</div>':'');
    document.body.appendChild(viewPopup);
    viewPopup.querySelector('.edit').addEventListener('click',function(){startEditPopup(c,viewPopup);});
    viewPopup.querySelector('.resolve').addEventListener('click',function(){db.collection('comments').doc(PAGE_ID).collection('items').doc(c.id).update({resolved:!c.resolved});closeView();});
    viewPopup.querySelector('.delete').addEventListener('click',function(){if(!confirm('削除しますか？'))return;db.collection('comments').doc(PAGE_ID).collection('items').doc(c.id).delete();closeView();});
  }

  function startEditPopup(c,popup){
    var el=popup.querySelector('#pvt-'+c.id);
    el.outerHTML='<textarea class="c-edit-textarea" id="pve-'+c.id+'">'+esc(c.text)+'</textarea><div class="c-input-row" style="margin-top:8px"><button class="c-cancel-btn" id="ec-'+c.id+'">キャンセル</button><button class="c-send-btn" id="es-'+c.id+'">保存</button></div>';
    popup.querySelector('#ec-'+c.id).addEventListener('click',closeView);
    popup.querySelector('#es-'+c.id).addEventListener('click',function(){var t=popup.querySelector('#pve-'+c.id).value.trim();if(!t)return;db.collection('comments').doc(PAGE_ID).collection('items').doc(c.id).update({text:t});closeView();});
  }

  function renderPanel(visible){
    var list=document.getElementById('wf-panel-list');
    list.querySelectorAll('.panel-item').forEach(function(el){el.remove();});
    var empty=document.getElementById('wf-panel-empty');
    if(!visible.length){empty.style.display='block';return;}
    empty.style.display='none';
    visible.forEach(function(c,i){
      var item=document.createElement('div');
      item.className='panel-item'+(c.resolved?' resolved':'');
      item.innerHTML='<div class="panel-item-header"><div class="panel-num'+(c.resolved?' resolved':'')+'">'+( i+1)+'</div><span class="panel-name">'+esc(c.name||'匿名')+'</span></div><div class="panel-text" id="pt-'+c.id+'">'+esc(c.text)+'</div><div class="panel-actions"><button class="panel-edit-btn">編集</button><button class="panel-resolve-btn">'+(c.resolved?'再開':'解決')+'</button><button class="panel-delete-btn">削除</button></div>';
      item.querySelector('.panel-edit-btn').addEventListener('click',function(e){e.stopPropagation();startEditPanel(c,item);});
      item.querySelector('.panel-resolve-btn').addEventListener('click',function(e){e.stopPropagation();db.collection('comments').doc(PAGE_ID).collection('items').doc(c.id).update({resolved:!c.resolved});});
      item.querySelector('.panel-delete-btn').addEventListener('click',function(e){e.stopPropagation();if(!confirm('削除？'))return;db.collection('comments').doc(PAGE_ID).collection('items').doc(c.id).delete();});
      item.addEventListener('click',function(e){if(e.target.closest('button'))return;var pin=overlay.querySelector('.c-pin[data-id="'+c.id+'"]');if(pin){pin.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(function(){pin.click();},400);}});
      list.appendChild(item);
    });
  }

  function startEditPanel(c,item){
    var el=item.querySelector('#pt-'+c.id);
    el.outerHTML='<textarea class="c-edit-textarea" id="pe-'+c.id+'">'+esc(c.text)+'</textarea><div class="c-input-row" style="margin-top:6px"><button class="c-cancel-btn" id="pec-'+c.id+'">キャンセル</button><button class="c-send-btn" id="pes-'+c.id+'">保存</button></div>';
    item.querySelector('#pec-'+c.id).addEventListener('click',function(e){e.stopPropagation();renderPins();});
    item.querySelector('#pes-'+c.id).addEventListener('click',function(e){e.stopPropagation();var t=item.querySelector('#pe-'+c.id).value.trim();if(!t)return;db.collection('comments').doc(PAGE_ID).collection('items').doc(c.id).update({text:t});});
  }

  db.collection('comments').doc(PAGE_ID).collection('items').onSnapshot(function(snap){
    comments=snap.docs.map(function(doc){var d=doc.data();d.id=doc.id;return d;});
    renderPins();
  },function(err){console.error(err);});

  document.addEventListener('click',function(e){
    if(viewPopup&&!e.target.closest('.c-view-popup')&&!e.target.closest('.c-pin'))closeView();
  });

  function closeInput(){if(inputPopup){inputPopup.remove();inputPopup=null;}}
  function closeView(){if(viewPopup){viewPopup.remove();viewPopup=null;}activePopupId=null;}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
})();
