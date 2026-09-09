/**
 * operadores lógicos
 * && AND E - Todas as expressões precisam ser verdadeiras para True
 * || OR OU - Uma expressão precisa ser True para toda a expressão ser True
 * ! NOT NÃO - Não é muito comum mas ele nega o true e passa a ser false e o contrário também acontece
 */
// Exemplo de login
// Nesse sistema o usuário e senha precisam bater para ter acesso 
const usuario = 26029347;
const senha = "Shiroma15@#"
const login = usuario === 26029347 && senha === "Shiroma15@#"
console.log(login);

// Recuperando senha
// Nesse sistema tanto o CPF ou RG podem servir para recuperar a senha do usuário
const cpf = 58891705896;
const rg = 560930677;
const recuperarSenha = cpf === 58891705896 || rg === 560930677;
console.log(recuperarSenha);

