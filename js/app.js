









const nomeInput = document.getElementById('nome');
const periodoSelect = document.getElementById('periodo');
const salvarBtn = document.getElementById('salvar');
const mensagemTexto = document.getElementById('mensagem-texto'); // Adicione esta linha

const introContainer = document.getElementById('intro-container'); 
const introText = document.getElementById('intro-text');

let nomeUsuario = '';
let periodoEscolhido = '';

// Base de mensagens
const mensagens = {
    manha: [
        "{nome}, preste atenção ao que você fala hoje, suas palavras podem ter um impacto maior do que imagina.",
        "Comece o dia com cuidado, {nome}. Não deixe que a pressa te leve a tomar decisões precipitadas.",
        "Observe os sinais que o universo te envia, {nome}. Eles podem te guiar para um caminho melhor.",
        "{nome}, preste atenção ao que você fala hoje, suas palavras podem ter um impacto maior do que imagina.",
        "Comece o dia com cuidado, {nome}. Não deixe que a pressa te leve a tomar decisões precipitadas.",
        "Observe os sinais que o universo te envia, {nome}. Eles podem te guiar para um caminho melhor.",
        "{nome}, Se beber, não dirija! Se dirigir, não beba!", // Adicionando a frase
        "Mantenha o foco, {nome}. Distrações podem te levar a erros e acidentes."
    ],
    tarde: [
        "Cuidado com os seus pensamentos, {nome}. Eles podem influenciar suas ações e te levar para um caminho indesejado.",
        "{nome}, não se esqueça de reservar um tempo para descansar. O estresse pode te levar a cometer erros.",
        "A pressa é inimiga da perfeição, {nome}. Dê um passo de cada vez e evite frustrações.", "Cuidado com os seus pensamentos, {nome}. Eles podem influenciar suas ações e te levar para um caminho indesejado.",
        "{nome}, não se esqueça de reservar um tempo para descansar. O estresse pode te levar a cometer erros.",
        "A pressa é inimiga da perfeição, {nome}. Dê um passo de cada vez e evite frustrações.",
        "Tenha cuidado com o que você compartilha online, {nome}. A internet nunca esquece."
    ],
    noite: [
        "{nome}, antes de dormir, reflita sobre o seu dia. Identifique o que pode ser melhorado e aprenda com os seus erros.",
        "Lembre-se de seus sonhos, {nome}, mas não se esqueça da realidade. Mantenha os pés no chão.",
        "Evite se envolver em conversas negativas, {nome}. Deixe que a positividade te envolva.",
        "{nome}, não se esqueça de desligar o celular antes de dormir. O excesso de tela pode prejudicar seu sono.",
        "{nome}, antes de dormir, reflita sobre o seu dia. Identifique o que pode ser melhorado e aprenda com os seus erros.",
        "Lembre-se de seus sonhos, {nome}, mas não se esqueça da realidade. Mantenha os pés no chão.",
        "Evite se envolver em conversas negativas, {nome}. Deixe que a positividade te envolva."
    ],
    todos: [
        "{nome}, seja gentil com as palavras e com as ações. O respeito é fundamental para uma vida harmoniosa.",
        "A paciência é uma virtude, {nome}. Não se deixe levar pela raiva ou pela impaciência.",
        "{nome}, não tenha medo de dizer não quando for preciso. Você não precisa agradar a todos.", "{nome}, seja gentil com as palavras e com as ações. O respeito é fundamental para uma vida harmoniosa.",
        "A paciência é uma virtude, {nome}. Não se deixe levar pela raiva ou pela impaciência.",
        "{nome}, não tenha medo de dizer não quando for preciso. Você não precisa agradar a todos.",
        "{nome}, a prática leva à perfeição. Não desista dos seus objetivos, mesmo que os desafios pareçam grandes."
    ]
};

// Função para gerar mensagem personalizada
function gerarMensagem() {
    const mensagensPeriodo = mensagens[periodoEscolhido];
    if (mensagensPeriodo) {
        const indiceAleatorio = Math.floor(Math.random() * mensagensPeriodo.length);
        return mensagensPeriodo[indiceAleatorio].replace('{nome}', nomeUsuario);
    } else {
        return "Por favor, configure seu nome e período.";
    }
}

// Função para configurar a mensagem motivacional
function configurarMensagem() {
    nomeUsuario = nomeInput.value;
    periodoEscolhido = periodoSelect.value;

    mensagemTexto.textContent = gerarMensagem(); // Exibe a mensagem motivacional
}

// Evento para salvar a configuração
salvarBtn.addEventListener('click', () => {
    configurarMensagem(); 

    // Substitui a introdução pela mensagem motivacional
    introText.textContent = gerarMensagem(); 
    introText.style.display = 'block';

    // Estilo para o contêiner da mensagem
    introContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    introContainer.style.border = '1px solid #fff';
    introContainer.style.padding = '20px'; // Adiciona espaçamento ao redor da mensagem
    introContainer.style.borderRadius = '10px'; // Arredonda as bordas

    // Opcional: Ajuste o tamanho da fonte da mensagem
    introText.style.fontSize = '18px';
});

// Função para enviar notificações
function enviarNotificacao() {
    const notificacao = new Notify({
      title: 'Motivador Web',
      message: gerarMensagem(), // Use a função para gerar a mensagem personalizada
      timeout: 5000 // Tempo de exibição da notificação (5 segundos)
    });
  
    notificacao.show(); 
  }
  
  // Evento para salvar a configuração (duplicado, remova a linha a seguir)
  // salvarBtn.addEventListener('click', configurarMensagem); 
  
  // Implementar a lógica para enviar notificações em cada período
  // Aqui você precisa definir os intervalos para enviar as notificações.
  // Exemplo com setInterval:
  if (periodoEscolhido === 'todos' || periodoEscolhido === 'manha') {
    setInterval(enviarNotificacao, 1000 * 60 * 60 * 8); // 8 horas (manhã)
  } 
  if (periodoEscolhido === 'todos' || periodoEscolhido === 'tarde') {
    setInterval(enviarNotificacao, 1000 * 60 * 60 * 14); // 14 horas (tarde)
  }
  if (periodoEscolhido === 'todos' || periodoEscolhido === 'noite') {
    setInterval(enviarNotificacao, 1000 * 60 * 60 * 20); // 20 horas (noite)
  }





















/*const nomeInput = document.getElementById('nome');
const periodoSelect = document.getElementById('periodo');
const salvarBtn = document.getElementById('salvar');
const mensagemTexto = document.getElementById('mensagem-texto');

let nomeUsuario = '';
let periodoEscolhido = '';

// Base de mensagens
const mensagens = {
    manha: [
        "Bom dia, {nome}! Que seu dia seja cheio de energia e realizações.",
        "Comece o dia com o pé direito, {nome}! Você é capaz de grandes coisas.",
        "Aproveite o sol da manhã, {nome}, e deixe a positividade te acompanhar.",
        // Adicione mais mensagens para a manhã
    ],
    tarde: [
        "Boa tarde, {nome}! Que a tarde seja produtiva e inspire novas ideias.",
        "Descanse um pouco, {nome}, e recarregue as energias para o restante do dia.",
        "Você está no caminho certo, {nome}! Continue perseverando.",
        // Adicione mais mensagens para a tarde
    ],
    noite: [
        "Boa noite, {nome}! Que seus sonhos sejam doces e tragam boas energias.",
        "Descanse e recarregue as energias, {nome}, para um novo dia cheio de oportunidades.",
        "Que a noite seja tranquila e te traga paz, {nome}.",
        // Adicione mais mensagens para a noite
    ],
    todos: [
        "Olá, {nome}! Que seu dia seja incrível, cheio de alegrias e realizações.",
        "Você é forte, {nome}, e capaz de superar qualquer desafio.",
        "Acredite em você mesmo, {nome}, e continue buscando seus sonhos.",
        "Cuidado com o que você fala, as coisas que saem da sua boca e as suas atitudes têm mais poder sobre o seu futuro do que imagina."
    ]
};

// Função para gerar mensagem personalizada
function gerarMensagem() {
    const mensagensPeriodo = mensagens[periodoEscolhido];
    if (mensagensPeriodo) {
        const indiceAleatorio = Math.floor(Math.random() * mensagensPeriodo.length);
        return mensagensPeriodo[indiceAleatorio].replace('{nome}', nomeUsuario);
    } else {
        return "Por favor, configure seu nome e período.";
    }
}

// Função para configurar a mensagem motivacional
function configurarMensagem() {
    nomeUsuario = nomeInput.value;
    periodoEscolhido = periodoSelect.value;

    mensagemTexto.textContent = gerarMensagem();
}


// Evento para salvar a configuração
salvarBtn.addEventListener('click', configurarMensagem);




// Função para enviar notificações
function enviarNotificacao() {
    const notificacao = new Notify({
      title: 'Motivador Web',
      message: gerarMensagem(), // Use a função para gerar a mensagem personalizada
      timeout: 5000 // Tempo de exibição da notificação (5 segundos)
    });
  
    notificacao.show(); 
  }
  
  // Evento para salvar a configuração
  salvarBtn.addEventListener('click', configurarMensagem);
  
  // Implementar a lógica para enviar notificações em cada período
  // Aqui você precisa definir os intervalos para enviar as notificações.
  // Exemplo com setInterval:
  if (periodoEscolhido === 'todos' || periodoEscolhido === 'manha') {
    setInterval(enviarNotificacao, 1000 * 60 * 60 * 8); // 8 horas (manhã)
  } 
  if (periodoEscolhido === 'todos' || periodoEscolhido === 'tarde') {
    setInterval(enviarNotificacao, 1000 * 60 * 60 * 14); // 14 horas (tarde)
  }
  if (periodoEscolhido === 'todos' || periodoEscolhido === 'noite') {
    setInterval(enviarNotificacao, 1000 * 60 * 60 * 20); // 20 horas (noite)
  }*/