// Shout out to Mohnish Thallavajhula, whose extension 'Rearrange tabs' is the basis
// of this extension.

chrome.commands.onCommand.addListener(function(command) {

    var shift = ('previous-tab' == command) ? -1 : 1;

    var shiftTab = function(tabs) {
        // This function expects to receive all tabs in the current window

        // Get number of tabs
        var tabCount = tabs.length

        // Get active tab
        for (var i = 0, len = tabCount; i < len; i++){
            if (tabs[i].active) {
                var activeTab = tabs[i]
            }
        }

        // Calculate index of target tab
        var targetIndex = 0

        if (activeTab.index + shift < 0) {
            // If we're on the leftmost tab and move left, move to the end.
            targetIndex = tabCount - 1

        } else if (activeTab.index + shift > tabCount - 1) {
            // Similarly if we're on the rightmost tab and move right, move to the beginning.
            targetIndex = 0

        } else {
            // Otherwise move left or right as commanded.
            targetIndex = activeTab.index + shift
        }

        // Get ID of target tab
        var targetID = tabs[targetIndex].id

        // Set target tab as active
        chrome.tabs.update(targetID, {active : true});
    };

    chrome.tabs.query({
        currentWindow: true,
    }, shiftTab);
});
