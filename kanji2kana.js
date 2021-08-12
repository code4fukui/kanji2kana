const appid = await (async () => {
  try {
    return (await Deno.readTextFile("kanji2kana_appid.txt")).trim();
  } catch (e) {
  }
  return null;
})();
const endpoint = "https://labs.goo.ne.jp/api/hiragana";

const kanji2kana = async (s, app_id) => {
  const id = appid || app_id;
  if (!id) {
    throw new Error("Please set appid or set appid.txt file");
  }
  const headers = {
    "Content-type": "application/json",
  };
  const body = JSON.stringify({
    app_id: id,
    sentence: s,
    output_type: "hiragana",
  });
  const res = await (await fetch(endpoint, { method: "POST", headers, body })).json();
  return res.converted;
};

export { kanji2kana };
