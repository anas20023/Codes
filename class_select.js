let box=document.querySelectorAll(".box");
let text;

function Clickme()
{
    for(let i=0 ; i<box.length ; i++)
    {
        text=prompt(`Enter Text for ${i+1} th Box`);
        box[i].innerText= text;
    }
}