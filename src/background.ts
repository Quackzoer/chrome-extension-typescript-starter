// Background can't access the DOM, so we need to inject a content script or send message to content script

console.log("Background script loaded!");


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'keyup') {
        // do something in the background on keyup, for example fetch for available commands
        const value = message.value; // corresponds to value send by content script
    }
    return true;
});