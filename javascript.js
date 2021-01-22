$("#submit-form").submit((e)=>{
    e.preventDefault()
   $.ajax({ 
       url:"https://script.google.com/macros/s/AKfycbxYIsDGwcbqzmbblLtJab1XOx9hysZnPdAK0pBmU___PBIEtRqz077d/exec",
        data:$("#submit-form").serialize(),
         method:"post", 
         success:function (response){ 
             alert("Form submitted successfully") 
  window.location.reload() 
  //window.location.href="https://google.com"
}, error:function (err){ 
    alert("Something Error") } }) })