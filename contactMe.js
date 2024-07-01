function clipboard() {
    navigator.clipboard.writeText("adianhooper@gmail.com");
    document.querySelector("#gmailLabel").innerHTML = "copied to clipboard";
    document.querySelector("#GmailText").style.marginTop = "0%";
    document.querySelector("#Github").style.marginTop = "-50%";

};