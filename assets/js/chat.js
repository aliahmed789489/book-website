//  Start of Amazon Ebook Hub Chat Zendesk Widget Script
$(document).ready

function setButtonURL() {
    $zopim.livechat.window.toggle();
}

window.onload = function() {
    setTimeout(function() {
        setButtonURL();
    }, 1000);
};   

function toggleChat() {
    $zopim.livechat.window.show();
}
//  End of Amazon Ebook Hub Chat Zendesk Widget Script