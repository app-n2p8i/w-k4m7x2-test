// 接続先の設定ファイル。公開場所ごとに中身が違うため、画面ファイルを上げるときも、このファイルは上書きしない。
// （service-worker.js の事前保存リストにも入れない）
window.APP_CONFIG = {
  ENV_LABEL: '',
  SUPABASE_URL: 'https://kzeqpqwvolrpusmmqwmt.supabase.co',
  SUPABASE_KEY: 'sb_publishable_NwxSSSpZOMZGF4P61YDJ3A_axlbmJxM',
  VAPID_PUBLIC_KEY: 'BBeF6QGL-hKFJTa4TBtqG3VRGz-IqDBzdvSkE7DS2vwaSOdFkDRzDcfxgD22gWajQF19pCotNpDsdQYTDSet66g
'
};

(function(){
  if(!window.APP_CONFIG.ENV_LABEL) return;
  function show(){
    var d=document.createElement('div');
    d.textContent=window.APP_CONFIG.ENV_LABEL;
    d.style.cssText='position:fixed;top:0;left:50%;transform:translateX(-50%);z-index:99999;background:#d9534f;color:#fff;font-size:11px;font-weight:700;padding:2px 14px;border-radius:0 0 8px 8px;pointer-events:none;opacity:.92;font-family:sans-serif;';
    document.body.appendChild(d);
  }
  if(document.body) show(); else document.addEventListener('DOMContentLoaded',show);
})();
