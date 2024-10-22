/*
Write a function that takes in an RSS feed URL, and returns the title of and link to the the original feed source.
You can get other things too, if you'd like!
 */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const { XMLParser } = require("fast-xml-parser");

const parser = new XMLParser();

function getRSS(url) {
  fetch(url)
    .then((res) => res.text())
    .then((xml) => {
      const json = parser.parse(xml);
      const title = json?.rss?.channel?.title;
      const link = json?.rss?.channel?.link;
      console.log(`${title}, ${link}`);
    });
}

getRSS("https://cassidoo.co/rss.xml");
getRSS("https://feed.syntax.fm/");
