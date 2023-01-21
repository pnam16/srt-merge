// const subtitle = require("subtitle");

import fs from "fs";

import { parseSync, stringifySync } from "subtitle";

const en = fs.readFileSync("files/1EN.srt", "utf8");
// const vi = fs.readFileSync("files/2VI.srt", "utf8");

// const en = fs.readFileSync("files/EN_Puss_In_Boots_The_Last_Wish.srt", "utf8");
const vi = fs.readFileSync("files/VI_Puss_In_Boots_The_Last_Wish.srt", "utf8");

const enParsed = parseSync(en);
const viParsed = parseSync(vi);

console.log("enParsed", enParsed);

const result = [...enParsed, ...viParsed]
  .filter((e) => e.data.text.trim() !== "")
  .sort((a, b) => a.data.start - b.data.start);

fs.writeFileSync(
  "files/result.srt",
  stringifySync(result, { format: "WebVTT" })
);
