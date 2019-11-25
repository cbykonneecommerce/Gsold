$("#commit").click(()=>{
    event.preventDefault(); 
    console.log($("#cl_email").val())
    let dados = {
        email : $("#cl_email").val()
    }

    fetch("https://gtronic.myvtex.com/api/dataentities/NL/documents", {
        method: 'PATCH',
               headers: {
                "Content-Type": "application/json"},
        body: JSON.stringify(dados)
    })
    .then((res) => {return res})
    .then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err))
})