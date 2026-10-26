// 接続先の設定ファイル。公開場所ごとに中身が違うため、画面ファイルを上げるときも、このファイルは上書きしない。
// （service-worker.js の事前保存リストにも入れない）
window.APP_CONFIG = {
  ENV_LABEL: 'テスト環境',
  SUPABASE_URL: 'https://tguqfgdodevwowydkrkq.supabase.co',
  SUPABASE_KEY: 'sb_publishable_OH2iHpq9DIukdzNMUR0lyw_sfVyATp6',
  VAPID_PUBLIC_KEY: 'BL5Deakb6kwWJOznVx9Svu9__duEnUnp8gZAk2RJdMA1X-bX1k61PH4RAtQrz77JJSNnkw4vhMJ_kDs6wgDrM3Q'
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
