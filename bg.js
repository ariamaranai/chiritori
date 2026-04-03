chrome.runtime.onMessage.addListener(origin => {
  chrome.history.search({
    text: origin,
    maxResults: 100000,
    startTime: 0
  }, results => {
    let url;
    let i = results.length;
    while (
      (url = results[--i].url).startsWith(origin) &&
      chrome.history.deleteUrl({ url }),
      i
    );
  })
});