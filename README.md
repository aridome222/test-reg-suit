# ビジュアルリグレッションテスト

このプロジェクトは、reg-suitとPlaywrightを使用したビジュアルリグレッションテストのセットアップです。

## 使い方

### 1. 画像を準備する

- **変更前の画像**: `regTest/before/` ディレクトリに配置
- **変更後の画像**: `regTest/after/` ディレクトリに配置

**重要**: 比較したい画像は同じファイル名にしてください（例: `sample.png` と `sample.png`）

### 2. 比較を実行する

```bash
npm run reg:compare
```

このコマンドで：
- 変更前と変更後の画像を比較
- 差分画像を `regTest/diff/` に生成
- HTMLレポートを `regTest/index.html` に作成

### 3. レポートを確認する

```bash
npm run reg:open
```

ブラウザでHTMLレポートが開き、以下が確認できます：
- 変更前の画像
- 変更後の画像  
- 差分画像（変更箇所がハイライト）
- 変更の統計情報

## ディレクトリ構造

```
regTest/
├── before/     # 変更前の画像（期待値）
├── after/      # 変更後の画像（実際値）  
├── diff/       # 差分画像（自動生成）
├── expected/   # reg-suit内部用（自動生成）
├── actual/     # reg-suit内部用（自動生成）
└── index.html  # HTMLレポート（自動生成）
```

## スクリーンショット自動生成（参考）

`test.js`を実行すると、Playwrightで複数ブラウザのスクリーンショットを自動生成できます：

```bash
node test.js
```

**注意**: `test.js`は`http://localhost:5000/ari_eval_af`にアクセスするため、該当のサーバーが起動している必要があります。