var config = {};

config.log = false;

config.webrtc = {"test": {"page": "https://webbrowsertools.com/test-webrtc-leak/"}};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};

config.addon = {
  set state (val) {app.storage.write("state", val)},
  set inject (val) {app.storage.write("inject", val)},
  set webrtc (val) {app.storage.write("webrtc", val)},
  set devices (val) {app.storage.write("devices", val)},
  set additional (val) {app.storage.write("additional", val)},
  set exclusions (val) {app.storage.write("exclusions", val)},
  get inject () {return app.storage.read("inject") !== undefined ? app.storage.read("inject") : true},
  get state () {return app.storage.read("state") !== undefined ? app.storage.read("state") : "enabled"},
  get devices () {return app.storage.read("devices") !== undefined ? app.storage.read("devices") : false},
  get additional () {return app.storage.read("additional") !== undefined ? app.storage.read("additional") : false},
  get exclusions () {return app.storage.read("exclusions") !== undefined ? app.storage.read("exclusions") : ""},
  get webrtc () {return app.storage.read("webrtc") !== undefined ? app.storage.read("webrtc") : "disable_non_proxied_udp"}
};

// Utility function to check if current URL should be excluded
config.isUrlExcluded = function(url) {
  const exclusions = config.addon.exclusions;
  if (!exclusions || !url) return false;
  
  const excludedUrls = exclusions.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0 && !line.startsWith('#'));
  
  return excludedUrls.some(excludedUrl => {
    // Support wildcards
    if (excludedUrl.includes('*')) {
      const regex = new RegExp('^' + excludedUrl.replace(/\*/g, '.*') + '$', 'i');
      return regex.test(url);
    }
    // Exact match or domain match
    return url.toLowerCase().includes(excludedUrl.toLowerCase());
  });
};