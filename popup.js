chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs => {
  let { origin } = new URL(tabs[0].url);
  let nodes = document.body.childNodes;
  let checks = localStorage.getItem(origin);
  if (checks) {
    let i = 7;
    while (
      nodes[--i].firstChild.checked = +checks[i],
      i
    );
  }
  b.onclick = () => {
    let checks = [0,0,0,0,0,0,0];
    let i = 7;
    while (
      checks[--i] = nodes[i].firstChild.checked,
      i
    );
    chrome.browsingData.remove({ origins: [origin] }, {
      cache: checks[0],
      cacheStorage: checks[1],
      localStorage: checks[2],
      indexedDB: checks[3],
      serviceWorkers: checks[4],
      cookies: checks[5]
    });
    checks[6] && chrome.runtime.sendMessage(origin);
    close(localStorage.setItem(origin, checks.map(Number).join("")));
  }
});