(function () {
	'use strict'
    import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
    // index.js
    import { init } from './config/conexao_firebase_aval.js';
    const auth=getAuth(init);


    // Função para lidar com o login
    document.getElementById('submeter').addEventListener('click', function () {
        const email = document.getElementById('user').value;
        const senha = document.getElementById('pass').value;

        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`Usuário autenticado: ${user.email}`);
                window.location.href='pub/inicial.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Erro de autenticação: ${errorCode} - ${errorMessage}`);
            });
	   });


	signOut(auth).then(() => {
	    console.log('Sessão encerrada');
	}).catch((error) => {
	    console.error('Erro ao encerrar a sessão:', error);
	});


})()
