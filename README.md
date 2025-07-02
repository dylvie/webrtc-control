## Summary of Modifications

I modified the WebRTC Control Chrome extension to add URL exclusion support. Here are the main changes:

### **New Features:**

1. **Exclusions textarea** in options allowing users to enter URLs to exclude (one per line)
2. **Wildcard support** (e.g., `*.google.com`)
3. **Comment support** using the `#` symbol
4. **Exclusion logic** that disables WebRTC blocking on matching URLs

### **Modified Files:**

1. **options.js** - Added exclusions textarea handling
2. **config.js** - Added storage and `isUrlExcluded()` function
3. **common.js** - Logic to check exclusions and manage effective state
4. **inject.js** - Don't inject scripts on excluded URLs
5. **options.html** - Complete user interface with textarea
6. **manifest.json** - Updated version (0.3.4)

### **How it works:**

- Users can enter URLs in the textarea (one per line)
- Wildcards `*` are supported for flexible patterns
- Comments starting with `#` are ignored
- When a page matches an excluded URL, WebRTC is not blocked on that page
- Settings are automatically saved

### **Exclusion Examples:**
```
example.com
*.google.com
https://meet.jit.si
webrtc-app.company.com
# This comment is ignored
```

The extension will now check each page URL against the exclusion list before applying WebRTC blocking.

## README from original developer (dlinbernard)

WebRTC Control is an extension that brings you control over WebRTC API in your browser. 

Toolbar icon serves as a toggle button that enables you to quickly disable or enable the add-on (note: the icon will change color once you click on it). This addon does not a have toolbar popup UI. When WebRTC is enabled in your browser, your real IP address will be exposed to the public (even if you're using a masking service such as VPN). But preventing WebRTC leak helps you protect your IP address. WebRTC Control add-on will also disable the following WebRTC components (see add-on options page):

a. navigator.getUserMedia  
b. window.MediaStreamTrack  
c. window.RTCPeerConnection  
d. window.RTCSessionDescription  

Download links:  
Chrome: https://chrome.google.com/webstore/detail/webrtc-control/fjkmabmdepjfammlpliljpnbhleegehm  
Opera: https://addons.opera.com/en/extensions/details/webrtc-control/  
Firefox: https://addons.mozilla.org/en-US/firefox/addon/webrtc-control/  
Edge: https://microsoftedge.microsoft.com/addons/detail/webrtc-control/eepeadgljpkkjpbfecfkijnnliikglpl  

------------

Support & FAQ: https://mybrowseraddon.com/webrtc-control.html
