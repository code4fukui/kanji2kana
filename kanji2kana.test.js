import * as t from "https://deno.land/std/testing/asserts.ts";
import { kanji2kana } from "./kanji2kana.js";

Deno.test("test", async () => {
  t.assertEquals(await kanji2kana("鯖江"), "さばえ");
});
