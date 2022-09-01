import WikimediaStream from "wikimedia-streams";
import MediaWikiRecentChangeEvent from "wikimedia-streams/build/streams/MediaWikiRecentChangeEvent";
let Address4 = require("ip-address").Address4;

const stream = new WikimediaStream("recentchange");

stream.on("recentchange", (data: MediaWikiRecentChangeEvent, event) => {
    if (data.wiki === "enwiki") {
      try {
        const ip = new Address4(data.user);
        console.log(`${data.user}\t| ${data.type}\t| ${data.title}`);
      }
      catch (e) {
      }
    }
});