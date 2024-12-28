document.addEventListener("DOMContentLoaded", ()=>{
   
    const login = document.querySelector("#login");

    login.addEventListener("submit", (e)=>{
        e.preventDefault();
        const lastename = document.getElementById("nom").value.trim();
        const firstename = document.getElementById("prenom").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const profile = document.getElementById("profil").value.trim();

        if(lastename === "" || firstename === "" || 
            username === "" || email === "" || password === "" || profile === "")
            {
         
                Swal.fire({
                    title: 'Erreur!',
                    text: 'Veuillez remplir tous les champs',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })   
            }else if(password.length < 8){
                Swal.fire({
                    title: 'Erreur!',
                    text: 'Le mot de passe doit contenir au moins 8 caractère',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })   
            }
            else{
                Swal.fire({
                    title: 'Validé!',
                    text: 'Inscription réussi',
                    icon: 'success',
                    
                    confirmButtonText: 'Ok'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "../login.html";
                    }
                });
                
            }
           
    })
    AOS.init({
        duration : 1000,
        once: 1
    })


})
document.addEventListener("DOMContentLoaded", ()=>{
    const formLogin = document.querySelector("#Formlogin");
    formLogin.addEventListener("submit", (e)=>{
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        if(email === "" || password === ""){
            Swal.fire({
                title: 'Erreur!',
                text: 'Veuillez remplir tous les champs',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
    })
    AOS.init({
        duration : 1000,
        once: 1
    })
})