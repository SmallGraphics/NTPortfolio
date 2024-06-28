function clipboard() {
    navigator.clipboard.writeText("adianhooper@gmail.com");
    document.querySelector("#GmailText").innerHTML = "adianhooper@gmail.com<br><br><br>copied to clipboard";
    document.querySelector("#GmailText").style.marginTop = "-2.1%";
};