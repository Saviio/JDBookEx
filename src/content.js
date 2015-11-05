
var
     ITEM = {}
    ,operation = require('./operation')

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'PAGE_INIT') {
        sendResponse(true)
    }

    switch(msg.type){
        case "SHOW_DETAIL":
            console.log('SHOW_DETAIL')
            break;
        case "PAGE_INIT":
            console.log('PAGE_INIT')
            break;
        default:
            break;
    }
})


operation.init(ITEM)