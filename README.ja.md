# kanji2kana

[ひらがな化API ｜ソフト・アプリ開発のAPIなら【gooラボ】](https://labs.goo.ne.jp/api/jp/hiragana-translation/)を使った漢字からかな変換ライブラリです。

## 使い方

```js
import { kanji2kana } from "https://code4fukui.github.io/kanji2kana/kanji2kana.js";

const appid = "xxx"; // https://labs.goo.ne.jp/apiusage/
console.log(await kanji2kana("鯖江", appid));
```

## 関連リポジトリ

- [kana2kanji](https://github.com/code4fukui/kana2kanji/)

## ライセンス

MIT License