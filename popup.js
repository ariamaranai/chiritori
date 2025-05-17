chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs => {
  let { url } = tabs[0];
  chrome.storage.session.get(url, ({ [url]: v }) => {
    let inputs = document.getElementsByTagName("input");
    if (v) {
      let i = 0;
      while (
        inputs[i].checked = v[i],
        ++i < 6
      );
    }
    b.onclick = () => {
      let cache = inputs[0].checked;
      let cacheStorage = inputs[1].checked;
      let localStorage = inputs[2].checked;
      let indexedDB = inputs[3].checked;
      let serviceWorkers = inputs[4].checked;
      let cookies = inputs[5].checked;
      chrome.browsingData.remove({ origins: [url] }, {
        cache,
        cacheStorage,
        localStorage,
        indexedDB,
        serviceWorkers,
        cookies
      });
      close(
        chrome.storage.session.set({
          [url]: [cache, cacheStorage, localStorage, indexedDB, serviceWorkers, cookies]
        })
      );
    }
  });
});
