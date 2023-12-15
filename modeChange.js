let go_d=document.querySelector("#gt_dark");
let go_l=document.querySelector("#gt_lte");
go_d.addEventListener("click",()=>{
    document.documentElement.classList.add("dark");
    go_d.classList.add("hidden");
    go_l.classList.remove("hidden");
});
go_l.addEventListener("click",()=>{
    document.documentElement.classList.remove("dark");
    go_d.classList.remove("hidden");
    go_l.classList.add("hidden");
})