let amigos = [];
let resultado = [];

//Adicionando amigo
function adicionarAmigo() {
   let input = document.getElementById('amigo')
   let nome = input.value.trim();
   if (nome == '') {
    alert ('Digite um nome válido!')
    return;
   }
   amigos.push(nome);
   input.value = '';
   atualizarLista();
}

//Atualizando a lista
function atualizarLista() {
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';

for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
 }
}

//Sortear amigo
function sortearAmigo () {
   if (amigos.length < 2){
      alert('Adicione mais amigos!');
      return;
   }

   let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

   let res = document.getElementById("resultado");
   res.innerHTML = `O amigo secreto sorteado é: <strong>${sorteado}</strong>`;
}

// Permitir adicionar amigo com Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // impede de enviar formulário
        adicionarAmigo();
    }
});