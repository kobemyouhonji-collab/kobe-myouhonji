/* v35.3: 公開前プレビューと共有先URLの混同を防ぐ、共通共有処理。 */
(() => {
  'use strict';
  const button = document.querySelector('#share-site, .v345-share-button');
  if (!button) return;
  const status = document.querySelector('#share-site-status, .v345-share-status');
  const say = message => { if (status) status.textContent = message; };
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  let publicUrl = '';
  try {
    const u = new URL(canonicalLink?.getAttribute('href') || '', document.baseURI);
    if (u.protocol === 'https:' && canonicalLink?.getAttribute('href')) {
      u.search = '';
      u.hash = '';
      publicUrl = u.href;
    }
  } catch (_) { /* 不正なcanonicalは共有しない */ }

  const showSelectableUrl = () => {
    let field = document.querySelector('.v353-share-url');
    if (!field) {
      field = document.createElement('input');
      field.className = 'v353-share-url';
      field.type = 'text';
      field.readOnly = true;
      field.setAttribute('aria-label', '共有用の公開ページURL');
      (status || button).insertAdjacentElement('afterend', field);
    }
    field.value = publicUrl;
    field.focus();
    field.select();
    say('共有用URLを選択しました。コピーしてご利用ください。');
  };

  button.addEventListener('click', async () => {
    if (!publicUrl) {
      say('共有先のURLを確認できません。公開前にcanonical設定をご確認ください。');
      return;
    }
    // ローカル下書きから、公開済みの旧内容を誤って共有しない。
    if (location.protocol === 'file:') {
      say('この下書きの変更は公開ページに未反映です。公開後に共有してください。');
      return;
    }
    const shareText = button.dataset.shareText ||
      document.querySelector('meta[property="og:description"]')?.content ||
      document.querySelector('meta[name="description"]')?.content ||
      '日蓮正宗 妙本寺';
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: document.title, text: shareText, url: publicUrl });
        say('共有画面の操作を終了しました。');
        return;
      } catch (error) {
        if (error?.name === 'AbortError') {
          say('共有をキャンセルしました。');
          return;
        }
      }
    }
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(publicUrl);
        say('公開ページのURLをコピーしました。');
        return;
      }
    } catch (_) { /* コピー不可の場合は選択可能なURLを表示 */ }
    showSelectableUrl();
  });
})();
