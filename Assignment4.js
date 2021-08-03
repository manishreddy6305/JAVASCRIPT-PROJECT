var no_of_todo=0;
var todo_data=new Array();
var add_content=new Array();
var required_element=document.getElementsByClassName("required")[0];
var no_item=document.getElementById("Empty");
let popup1_open=()=>{
    document.getElementsByClassName("container")[0].style.filter="blur(15px)";
    document.getElementsByClassName("main4")[0].style.filter="blur(15px)";
    let popup=document.getElementById("popup");
    popup.style.display="initial";
}
let popup1_close=()=>{
    document.getElementsByClassName("container")[0].style.filter="blur(0px)";
    let popup=document.getElementById("popup");
    popup.style.display="none";
    required_element.style.display="none";
    document.getElementsByClassName("main4")[0].style.filter="blur(0px)";
}
let popup2_open=()=>{
    document.getElementsByClassName("container")[0].style.filter="blur(15px)";
    document.getElementsByClassName("main4")[0].style.filter="blur(15px)";
    let popup=document.getElementById("popup2");
    popup.style.display="initial";
}
let popup2_close=()=>{
    document.getElementsByClassName("container")[0].style.filter="blur(0px)";
    let popup=document.getElementById("popup2");
    popup.style.display="none";
    document.getElementsByClassName("required")[1].style.display="none";
    document.getElementsByClassName("main4")[0].style.filter="blur(0px)";
}
let addlist= document.getElementsByClassName("two")[0];
addlist.addEventListener("click",()=>{
    popup1_open();
})
let closeb=document.getElementsByClassName("s2")[0];
closeb.addEventListener("click",()=>{
    popup1_close();
})
let add=document.getElementsByClassName("s1")[0];
add.addEventListener("click",()=>{
     if(document.getElementById("text").value=="")
     {
         required_element.style.display="initial";
     }
     else
     {
          no_of_todo++;
          var object=
          {
              name: document.getElementById("text").value,
              id: Date.now()
          }  
             popup1_close(); 
             no_item.style.display="none";
             todo_data.push(object);
             let todo_div=document.createElement("DIV");
             let m=document.getElementById("addlist");
             todo_div.classList.add("todo")
             m.appendChild(todo_div);
             todo_div.setAttribute("data-key",object.id);
             let subheading=document.createElement("DIV");
             todo_div.appendChild(subheading);
             subheading.classList.add("sub");
             let value_add=todo_data[no_of_todo-1].name;
             subheading.textContent=value_add;
             let todo_div_item=document.createElement("DIV");
             todo_div.appendChild(todo_div_item);
             todo_div_item.classList.add("ali");
             let footer=document.createElement("DIV");
             todo_div.appendChild(footer);
             footer.classList.add("foot");
             let subdiv=document.createElement("DIV");
             footer.appendChild(subdiv);
             subdiv.classList.add("sd");
             let i1=document.createElement("I");
             let i2=document.createElement("I");
             subdiv.appendChild(i2);
             subdiv.appendChild(i1);
             i1.classList.add("fas","fa-plus-circle");
             i2.classList.add("fas","fa-trash-alt");
             i1.classList.add("adding");
             i1.setAttribute("data-key",object.id);
             i2.setAttribute("data-key",object.id);
             add_content.push(0);
             i2.addEventListener("click",()=>{
                 for(let i=0;i<todo_data.length;i++)
                 {
                     if(i2.getAttribute("data-key")==todo_data[i].id)
                     {
                        document.getElementById("addlist").removeChild(document.getElementById("addlist").childNodes[i]);
                        if(i==0)
                        {
                            todo_data.shift();
                            add_content.shift();
                        }
                        else if(i==todo_data.length-1)
                        {
                            todo_data.pop();
                            add_content.pop();
                        }
                        else{
                            let data=todo_data.slice(0,i);
                            todo_data=todo_data.slice(i+1,todo_data.length);
                            todo_data=data.concat(todo_data);

                            let data1=add_content.slice(0,i);
                            add_content=add_content.slice(i+1,add_content.length);
                            add_content=data1.concat(add_content);
                        }
                        break;
                     }
                 }
                 no_of_todo--;
                 if(no_of_todo==0)
                 {
                    no_item.style.display="initial";   
                 }
             })
             i1.addEventListener("click",()=>{
                 popup2_open();
                 for(let i=0;i<todo_data.length;i++)
                 {
                     if(i1.getAttribute("data-key")==todo_data[i].id)
                     {
                         add_content[i]=1;
                         break;
                     }
                 }
            })
        }
    })
let add1=document.getElementById("submit1");
add1.addEventListener("click",()=>{
  if(document.getElementById("text1").value=="")
 {
       document.getElementsByClassName("required")[1].style.display="initial";  
 }
  else{
       popup2_close(); 
       let itemlist=document.createElement("DIV");
       itemlist.classList.add("il");
       let c=document.createElement("P");
       c.classList.add("con")
       c.textContent= document.getElementById("text1").value;
       itemlist.appendChild(c);
       let b=document.createElement("BUTTON");
       b.textContent="Mark Done";
       b.classList.add("bs");
       itemlist.appendChild(b);
       for(let i=0;i<add_content.length;i++)
       {
           if(add_content[i]==1)
           {
               document.getElementsByClassName("ali")[i].appendChild(itemlist);
               add_content[i]=0;
               var object1=
               {
                  todo_value: i,
                  id:Date.now()
               }
               b.setAttribute("data-key",object1.id);
               c.setAttribute("data-key",object1.id);
               console.log(b.getAttribute("data-key"));
               add_content[i]=0;
               break;
           }
       }
       b.addEventListener("click",()=>{
           console.log("1");
           let strike=document.querySelectorAll(".con");
          for(let i=0;i<strike.length;i++)
          {   
              if(b.getAttribute("data-key")==strike[i].getAttribute("data-key"))
              {
                  b.style.display="none";
                  strike[i].classList.add("mo");
                  break;
              }
          }  
       })
   }
   })
let closeb2=document.getElementById("submit2");
closeb2.addEventListener("click",()=>{
    popup2_close();
    for(let i=0;i<add_content.length;i++)
    {
        add_content[i]=0;
    }
})