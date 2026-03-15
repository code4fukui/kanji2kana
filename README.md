# kanji2kana

A JavaScript library that converts Japanese Kanji characters to Hiragana using the [gooLabs API](https://labs.goo.ne.jp/api/jp/hiragana-translation/).

## Features
- Convert Kanji to Hiragana
- Supports Deno and ES module imports

## Requirements
- An API key from the [gooLabs API](https://labs.goo.ne.jp/apiusage/) 

## Usage

```js
import { kanji2kana } from "https://code4fukui.github.io/kanji2kana/kanji2kana.js";

const appid = "xxx"; // Your gooLabs API key
console.log(await kanji2kana("鯖江", appid));
```

## Related
- [kana2kanji](https://github.com/code4fukui/kana2kanji/) - A library to convert Hiragana/Katakana to Kanji

## License
MIT