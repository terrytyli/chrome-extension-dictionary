chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSelection") {
    sendResponse({ data: window.getSelection().toString() });
  } else sendResponse({}); // snub them.
});
