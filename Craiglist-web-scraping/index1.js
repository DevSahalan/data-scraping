const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

const scrapeResults = [];
async function scrapeCraiglist() {
  try {
    const HTMLelement = await request.get(
      "https://sfbay.craigslist.org/d/software-qa-dba-etc/search/sof"
    );
    const $ = await cheerio.load(HTMLelement);
    $(".result-info").each((index, element) => {
      const title = $(element).children(".result-title").text();
      const url = $(element).children(".result-title").attr("href");
      const postDate = $(element).children("time").attr("datetime");
      const hood = $(element).find(".result-hood").text();

      const scrapeResult = {
        title,
        url,
        postDate,
        hood,
      };
      scrapeResults.push(scrapeResult);

      console.log(scrapeResults);
    });
  } catch (err) {
    console.log(err);
  }
}
scrapeCraiglist();
