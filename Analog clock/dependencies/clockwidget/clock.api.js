//get time and print to debug
function getTime() {
    var offset = params.getValue("offset", 0);
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var hoursOffset = (hours + offset) % 24;
    var interval = Math.floor(minutes / 10) * 10;
    ogscript.debug("hrs-offset" + hoursOffset);
    //calculate if hourOffset is am or pm
    if (hoursOffset < 10) {
        var hours = "0" + hoursOffset;
    }
    else {
        var hours = hoursOffset;
    }
    if (interval == 0) {
        interval = "0" + interval;
    }
    ogscript.reveal(clockId + "min-" + minutes);
    ogscript.reveal(clockId + "sec-" + seconds);
    ogscript.debug("Time: " + hours + ":" + minutes + ":" + seconds);
    ogscript.reveal(clockId + "hrs-" + hours + "-" + interval);
    ogscript.debug("Time w/offset: " + hoursOffset + ":" + minutes + ":" + seconds);
    ogscript.debug("hrs-" + hours + "-" + interval);
    ogscript.debug("clockId:" + clockId);
    // ogscript.debug("clockId:" + ogscript.getOid(this));
}

var clockId = params.getValue("clock.id", 0)
ogscript.installTimer('currentTime', true, 1000, 1000, getTime);

