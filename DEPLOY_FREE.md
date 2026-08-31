# 0円で公開する手順

このホームページは、サーバー契約や有料CMSを使わずに公開できます。

## 推奨：GitHub Pages

### 1. GitHubアカウントを作成
GitHubの無料アカウントを作ります。

### 2. 新しいリポジトリを作成
例：`myohonji-kobe`

公開サイトとして使う場合は、操作が分かりやすい「Public」リポジトリがおすすめです。

### 3. このフォルダの中身をアップロード
ZIPを解凍し、以下をリポジトリ直下へ置きます。

- index.html
- privacy.html
- 404.html
- favicon.svg
- robots.txt
- images フォルダ
- .nojekyll

### 4. GitHub Pagesを有効化
Repository → Settings → Pages

- Source: Deploy from a branch
- Branch: main
- Folder: /(root)

を選んで保存します。

### 5. 無料URLで公開
数分後にGitHub PagesのURLが発行されます。

例：
`https://ユーザー名.github.io/myohonji-kobe/`

このURLを使う限り、
- サーバー代 0円
- SSL(https) 0円
- 月額費用 0円
です。

## 公開URLが決まった後に行うこと
公開URLが確定したら以下を追加すると検索対策がさらに良くなります。

- sitemap.xml
- canonical URL
- OGP画像の絶対URL
- Google Search Consoleへの登録

これらはURL確定後に設定します。

## 独自ドメインについて
`myohonji.jp` のような独自ドメインは通常有料です。
「すべて無料」を優先する場合はGitHub PagesのURLをそのまま使います。

## 費用を発生させないために
- 有料WordPressテーマを使わない
- 有料サーバーを契約しない
- 有料フォントを使わない
- 有料問い合わせフォームを使わない
- 有料アクセス解析を使わない
- 独自ドメインを買わない

現状のサイトはこの条件を満たしています。
