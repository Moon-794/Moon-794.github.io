const n = document.querySelector("#subButon")
const p = document.querySelector("#inc");

p.style.display = "none";

function clickSubmit()
{
    var usr = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if(usr === "bigred" && password === "birthday")
    {
        window.location.replace("http://spud-waz-here/yay.html");
    }
    else
    {
        p.style.display = "block";
    }
}