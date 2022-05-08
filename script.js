
let job_list = [
  {
    id:"12345ab",
    company:"Dildos Inc" 
  }, 
  {
    id:"12346ab", 
    company:"JoyRide Inc"
  },
  {
    id:"12366ab",
    company:"Sex in the city"

  }
]



let list = "<ul>"
for(i = 0; i< job_list.length; i++)
{ list += "<li>" + job_list[i].id  + "</li>" + 
"<li>" + job_list[i].company + "</li>" + "<p> </p>";
 list += "</ul>"; 
}
