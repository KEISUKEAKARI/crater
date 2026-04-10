layout-instruction-tool の sections/ フォルダをスキャンして、app.js のセクション一覧を同期する。

## 手順

1. `layout-instruction-tool/sections/` フォルダ内の画像ファイル（.svg, .png, .jpg, .jpeg, .gif）を一覧取得する
2. `layout-instruction-tool/app.js` の `loadSections()` 内にあるフォールバック配列（`sections = [...]`）の中身を確認する
3. フォルダにあるが配列にないファイルを特定する
4. 新しいファイルがあれば、配列に `{ file: 'ファイル名', name: 'ファイル名（拡張子なし）' }` の形式で追加する
5. 配列にあるがフォルダにないファイルがあれば、配列から削除する
6. 変更があった場合、結果を報告する。変更がなければ「同期済み」と報告する

## 注意
- name はファイル名から拡張子を除いたものをそのまま使う
- 配列の並び順はファイル名のアルファベット順にする
