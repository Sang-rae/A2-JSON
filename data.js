

//Load JSON file
fetch ('SCP.json')
.then(Response => Response.json())// parse the response as JSON
.then(

     //create data function
    data =>{

        const div0= document.getElementById('a1');
        const div1=document.getElementById('a2');
        const div2=document.getElementById('a3');
        const div3=document.getElementById('a4');
        const div4=document.getElementById('a5');

        // create HTML for each data object in JSON file
       for(let i=0; i<data.length;i++)
       {
            
                //Load and Display Subject value into HTML
                const subject = document.createElement('h4');
                subject.innerHTML="Subject";
                const subjectPar= document.createElement('p');
                subjectPar.innerHTML=data[i].Subject;
                eval('div'+i).appendChild(subject);
               eval('div'+i).appendChild(subjectPar);

                //Load and Display Class value into HTML
                const cl = document.createElement('h4');
                cl.innerHTML="Class";
                const clPar=document.createElement('p');
                clPar.innerHTML=data[i].Class;
               eval('div'+i).appendChild(cl);
                eval('div'+i).appendChild(clPar);

                //Load and Display Description value into HTML
                const description = document.createElement('h4');
                description.innerHTML="Description";
                const descriptionPar =document.createElement('p');
                descriptionPar.innerHTML=data[i].Description;
                eval('div'+i).appendChild(description);
                eval('div'+i).appendChild(descriptionPar);

               

                //Create button for each file
                const button = document.createElement('button');
                button.textContent="Read the Description of file";
                button.classList.add('btn');
                button.classList.add('btn-primary');

                //Add JS event listener to to button to read out description
                button.addEventListener(
                    'click', ()=>{
                        
                        window.speechSynthesis.cancel();
                        const read = new SpeechSynthesisUtterance(data[i].Description);
                        window.speechSynthesis.speak(read);
                        
                        
                      
                    }
                );
                eval('div'+i).appendChild(button);

                 //Load and Display Containment value into HTML
                 const containment = document.createElement('h4');
                 containment.innerHTML="Containment";
                 const containmentPar= document.createElement('p');
                 containmentPar.innerHTML=data[i].Containment;
                 eval('div'+i).appendChild(containment);
                 eval('div'+i).appendChild(containmentPar);

                 //Load Display image
                 const img =document.createElement('h4');
                 img.innerHTML="Image";
                 const imagePar = document.createElement('p');
                 
                 if(data[i].Image =="" || data[i].Image == null ){
                    imagePar.innerHTML="No Image";
                 }else{
                    imagePar.innerHTML=" <img src =" + data[i].Image +">";
                 }
                 
                 
                 eval('div'+i).appendChild(img);
                 eval('div'+i).appendChild(imagePar);


            }
        
      

    }


)
.catch(error=>console.error(error));


