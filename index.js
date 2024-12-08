const btn = document.querySelectorAll('.btn')
const input = document.querySelector('input')
let Str= "";
let btn1 = Array.from(btn)
let count =0 
// let count1=0;
btn1.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
         let elemt = e.target.innerHTML
         if(elemt=='AC')
         {
            input.value=""
            Str=''
         }
        else if((elemt=='+'||elemt=='*'||elemt=='/'||elemt=='-')&&count==0)
         {
            count=0;
         }
         else if(elemt=='=')
        {  if(Str){
            Str = eval(Str)
           if(isNaN(Str)) {
            input.value='infinity'
            }
             else {
                input.value=Str;}
           }else{
              input.value=""
           }
            Str =""
            count=0;
        }
        else{
            if((elemt=='+'||elemt=='*'||elemt=='/'||elemt=='-')&&count>0)
            {
                Str +=e.target.innerHTML;
                input.value = Str;
                count=0;
            }
        else{
            Str +=e.target.innerHTML;
            input.value = Str;
            count++;
        } 
        }
    })
})

