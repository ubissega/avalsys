// main.js
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./conexao_firebase_aval.js";

const auth = getAuth(app);
const progressBar = document.getElementById('progressBar');

document.getElementById('sub').addEventListener('click', function () {
    // Show progress bar on button click
    progressBar.style.width = '100%';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Autentica��o bem-sucedida
            const user = userCredential.user;
            console.log("Usu�rio autenticado:", user);

            // Atraso simulado antes de redirecionar para a p�gina inicial.html
            setTimeout(() => {
                progressBar.style.width = '0';
                window.location.href = "inicial.html";
            }, 1500); // Ajuste o valor do atraso conforme necess�rio
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Erro de autentica��o:", errorCode, errorMessage);
            // Exibir mensagem de erro ao usu�rio, se necess�rio

            // Hide progress bar on error
            progressBar.style.width = '0';
        });
});
