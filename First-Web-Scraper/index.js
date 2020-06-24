const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

async function main() {
  try {
    const html = await request.get("http://127.0.0.1:5500/index.html");
    fs.writeFileSync("./text.html", html);
    const $ = await cheerio.load(html);
    const theText = $("h1").text();
    const theLinkText = $("a").text();

    console.log(theText);
    console.log(theLinkText);
    const redId = $("#red").text();
    console.log(redId);
    const redClass = $(".red").text();
    console.log(redClass);
    const attribute = $('[data-customer="22025"]').text();
    console.log(attribute);
    $("h2").each((index, element) => {
      console.log($(element).text());
    });
  } catch (err) {
    console.log(err);
  }
}

main();
