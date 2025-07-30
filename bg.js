chrome.runtime.onMessage.addListener(url => {
  let { origin } = new URL(url);
  chrome.history.search({
    text: origin,
    maxResults: 100000,
    startTime: 0
  }, results => {
    let len = origin.length;
    let i = 0;
    while (i < results.length) {
      let { url } = results[i];
      url.slice(0, len) == origin &&
      chrome.history.deleteUrl({ url })
      ++i;
    }
  })
});