chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs => {
  let { url } = tabs[0];
  chrome.storage.session.get(url, ({ [url]: v }) => {
    let nodes = document.body.childNodes;
    let i = 6;
    if (v)
      while (
        nodes[--i].firstChild.checked = v[i],
        i
      );
    b.onclick = () => {
      let checks = Array(i = 6);
      while (
        checks[--i] = nodes[i].firstChild.checked,
        i
      );
      chrome.browsingData.remove({ origins: [url] }, {
        cache: checks[0],
        cacheStorage: checks[1],
        localStorage: checks[2],
        indexedDB: checks[3],
        serviceWorkers: checks[4],
        cookies: checks[5]
      });
      close(chrome.storage.session.set({ [url]: checks }));
    }
  });
});