const form= document.querySelector('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const nome=Document.querySelector('#nome').value
    const email=Document.querySelector('#email').value
    const telefone=Document.querySelector('#telefone').value
    const mensagem=Document.querySelector('#mensagem').value
    console.log(`${nome},${email},${telefone},${mensagem}`)
})