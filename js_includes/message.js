Message.obligatory = ["html"];

function Message(div, options, finishedCallback, utils) {
    this.name = "Message";
    this.options = options;
    this.countsForProgressBar = false;
    this.hideProgressBar = dget(options, "hideProgressBar", true);

    this.html = options.html;
    div.className = "message";
    div.innerHTML = this.html;

    // Bit of copy/pasting from 'Separator' here.
    this.transfer = dget(options, "transfer", "keypress");
    assert(this.transfer == "keypress" || typeof(this.transfer) == "number",
           "Value of 'transfer' option of Message must either be the string 'keypress' or a number");

    if (this.transfer == "keypress") {
        this.handleKey = function(code, time) {
            finishedCallback(null);
        }
    }
    else {
        utils.setTimeout(finishedCallback, this.transfer);
    }
}
