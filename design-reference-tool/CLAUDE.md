# design-reference-tool

デザイナー向けの参考管理＆プロンプト生成ツール

## 概要

Pinterestの参考とレイアウト参考URLを管理し、Claude用のデザイン指示プロンプトを自動生成するWebアプリ。

## 機能

### セクション1: デザインティスト
- Pinterestフォルダを読み込み（API認証）
- 画像ファイルをアップロード（ドラッグ&ドロップ対応）
- アップロードした画像を選択可能

### セクション2: レイアウトイメージ
- URL入力欄（デフォルト1つ）
- 「+追加」ボタンで動的に増やせる
- URLプレビュー表示（オプション）

### セクション3: プロンプト吐き出し
- 選択内容からClaude用プロンプトを自動生成
- プロンプトをコピー可能

## 技術スタック
- Frontend: HTML5 / CSS3 / JavaScript
- API: Pinterest API（OAuth認証）
- Backend: Node.js（プロンプト生成など）

## 進捗
- [x] プロジェクト基本構成
- [x] フロント実装（UI/UX）
- [x] 画像アップロード機能
- [x] URL動的追加機能
- [x] プロンプト生成ロジック
- [x] バックエンド実装（Node.js + Express）
- [ ] Pinterest API キー取得（審査待ち）
- [ ] Pinterest API 統合テスト
- [ ] デプロイ準備

## 次のステップ
1. Pinterest Developer 審査が通るのを待機
2. API キー取得後、.env に設定
3. npm install で依存パッケージ導入
4. サーバー起動テスト
5. Pinterest 認証フロー全体テスト
