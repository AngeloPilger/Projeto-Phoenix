// Função para cadastrar usuário
function cadastrarUsuario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    // Cria objeto do usuário
    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Pega usuários já cadastrados no localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o email já existe
    let existe = usuarios.find(u => u.email === email);
    if (existe) {
        alert("E-mail já cadastrado!");
        return;
    }

    // Adiciona novo usuário
    usuarios.push(usuario);

    // Salva no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");
}

// Função para login
function loginUsuario() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        alert("Login realizado com sucesso! Bem-vindo, " + usuario.nome);
        // Aqui você pode redirecionar para outra página
        // window.location.href = "home.html";
    } else {
        alert("E-mail ou senha inválidos!");
    }
}