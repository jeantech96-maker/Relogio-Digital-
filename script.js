/**
 * ============================================================
 * Relógio Digital — Material Design
 * JavaScript modular com funções organizadas
 * + Modo Escuro/Claro Automático com Toggle
 * ============================================================
 */

// --- Elementos do DOM ---
const elHoras = document.getElementById('horas');
const elMinutos = document.getElementById('minutos');
const elSegundos = document.getElementById('segundos');
const elData = document.getElementById('data-texto');
const elSaudacaoTexto = document.getElementById('saudacao-texto');
const elSaudacaoIcone = document.getElementById('saudacao-icone');
const elSaudacaoContainer = document.querySelector('.saudacao');
const elProgressoBarra = document.getElementById('progresso-barra');
const elProgressoTexto = document.getElementById('progresso-texto');
const elFaseDia = document.getElementById('fase-dia');
const elNumeroSemana = document.getElementById('numero-semana');
const elModoTexto = document.getElementById('modo-texto');
const elToggleTema = document.getElementById('toggle-tema');
const elToggleTemaIcone = document.getElementById('toggle-tema-icone');

const blocoHoras = document.getElementById('bloco-horas');
const blocoMinutos = document.getElementById('bloco-minutos');
const blocoSegundos = document.getElementById('bloco-segundos');

// --- Estado anterior para detectar mudanças ---
let estadoAnterior = { horas: '00', minutos: '00', segundos: '00' };

// --- Configurações de Tema ---
const TEMA_CHAVE = 'relogio-tema-preferido';

/**
 * Retorna o tema atual ('escuro' ou 'claro')
 * @returns {string}
 */
function obterTemaAtual() {
    const temaSalvo = localStorage.getItem(TEMA_CHAVE);
    if (temaSalvo) return temaSalvo;

    const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)');
    return preferenciaSistema.matches ? 'escuro' : 'claro';
}

/**
 * Aplica o tema na página
 * @param {string} tema — 'escuro' | 'claro' | 'auto'
 */
function aplicarTema(tema) {
    const html = document.documentElement;

    if (tema === 'claro') {
        html.setAttribute('data-tema', 'claro');
        elToggleTemaIcone.className = 'bi bi-sun-fill';
        elModoTexto.textContent = 'Modo Claro';
    } else {
        html.removeAttribute('data-tema');
        elToggleTemaIcone.className = 'bi bi-moon-stars-fill';
        elModoTexto.textContent = 'Modo Escuro';
    }
}

/**
 * Alterna entre os temas e salva a preferência
 */
function alternarTema() {
    const temaAtual = document.documentElement.getAttribute('data-tema');
    const novoTema = temaAtual === 'claro' ? 'escuro' : 'claro';

    aplicarTema(novoTema);
    localStorage.setItem(TEMA_CHAVE, novoTema);

    // Feedback visual no botão
    elToggleTema.style.transform = 'scale(0.9)';
    setTimeout(() => {
        elToggleTema.style.transform = '';
    }, 150);
}

/**
 * Detecta mudança na preferência do sistema e aplica automaticamente
 * (apenas se o usuário não definiu preferência manual)
 */
function detectarPreferenciaSistema() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', (e) => {
        // Só aplica automático se não houver preferência salva manualmente
        if (!localStorage.getItem(TEMA_CHAVE)) {
            const tema = e.matches ? 'escuro' : 'claro';
            aplicarTema(tema);
        }
    });
}

/**
 * Formata número com zero à esquerda
 * @param {number} num
 * @returns {string}
 */
function padZero(num) {
    return String(num).padStart(2, '0');
}

/**
 * Retorna saudação baseada na hora do dia
 * @param {number} hora
 * @returns {{texto: string, icone: string, classe: string}}
 */
function obterSaudacao(hora) {
    if (hora >= 5 && hora < 12) {
        return { texto: 'Bom dia', icone: 'bi-sun-fill', classe: 'manha' };
    }
    if (hora >= 12 && hora < 18) {
        return { texto: 'Boa tarde', icone: 'bi-sun', classe: 'tarde' };
    }
    if (hora >= 18 && hora < 23) {
        return { texto: 'Boa noite', icone: 'bi-moon-stars-fill', classe: 'noite' };
    }
    return { texto: 'Boa madrugada', icone: 'bi-moon-fill', classe: 'madrugada' };
}

/**
 * Atualiza a saudação na interface
 * @param {number} hora
 */
function atualizarSaudacao(hora) {
    const saudacao = obterSaudacao(hora);

    if (elSaudacaoTexto.textContent !== saudacao.texto) {
        elSaudacaoTexto.textContent = saudacao.texto;
        elSaudacaoIcone.className = saudacao.icone;

        elSaudacaoContainer.classList.remove('manha', 'tarde', 'noite', 'madrugada');
        elSaudacaoContainer.classList.add(saudacao.classe);
    }
}

/**
 * Anima um bloco do relógio quando o valor muda
 * @param {HTMLElement} bloco
 */
function animarBloco(bloco) {
    bloco.classList.remove('ativo');
    void bloco.offsetWidth; // força reflow
    bloco.classList.add('ativo');

    setTimeout(() => {
        bloco.classList.remove('ativo');
    }, 350);
}

/**
 * Atualiza os números do relógio com animação
 * @param {number} horas
 * @param {number} minutos
 * @param {number} segundos
 */
function atualizarNumeros(horas, minutos, segundos) {
    const horasStr = padZero(horas);
    const minutosStr = padZero(minutos);
    const segundosStr = padZero(segundos);

    if (estadoAnterior.horas !== horasStr) {
        elHoras.textContent = horasStr;
        animarBloco(blocoHoras);
    }

    if (estadoAnterior.minutos !== minutosStr) {
        elMinutos.textContent = minutosStr;
        animarBloco(blocoMinutos);
    }

    if (estadoAnterior.segundos !== segundosStr) {
        elSegundos.textContent = segundosStr;
        animarBloco(blocoSegundos);
    }

    estadoAnterior = { horas: horasStr, minutos: minutosStr, segundos: segundosStr };
}

/**
 * Formata a data em português do Brasil
 * @param {Date} data
 * @returns {string}
 */
function formatarData(data) {
    const opcoes = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    return data.toLocaleDateString('pt-BR', opcoes);
}

/**
 * Atualiza a data exibida
 * @param {Date} data
 */
function atualizarData(data) {
    elData.textContent = formatarData(data);
}

/**
 * Calcula o progresso do dia em porcentagem
 * @param {Date} data
 * @returns {number}
 */
function calcularProgressoDia(data) {
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const totalSegundos = (horas * 3600) + (minutos * 60) + segundos;
    const segundosNoDia = 24 * 3600;
    return (totalSegundos / segundosNoDia) * 100;
}

/**
 * Atualiza a barra de progresso do dia
 * @param {Date} data
 */
function atualizarProgressoDia(data) {
    const porcentagem = calcularProgressoDia(data);
    const porcentagemArredondada = porcentagem.toFixed(1);

    elProgressoBarra.style.width = porcentagem + '%';
    elProgressoTexto.textContent = porcentagemArredondada + '%';
}

/**
 * Retorna a fase do dia em português
 * @param {number} hora
 * @returns {string}
 */
function obterFaseDia(hora) {
    if (hora >= 5 && hora < 7) return 'Amanhecer';
    if (hora >= 7 && hora < 12) return 'Manhã';
    if (hora >= 12 && hora < 14) return 'Meio-dia';
    if (hora >= 14 && hora < 18) return 'Tarde';
    if (hora >= 18 && hora < 20) return 'Entardecer';
    if (hora >= 20 && hora < 23) return 'Noite';
    return 'Madrugada';
}

/**
 * Atualiza informações extras (fase do dia, semana do ano)
 * @param {Date} data
 */
function atualizarInfoExtras(data) {
    elFaseDia.textContent = obterFaseDia(data.getHours());

    const inicioAno = new Date(data.getFullYear(), 0, 1);
    const diasPassados = Math.floor((data - inicioAno) / (24 * 60 * 60 * 1000));
    const semana = Math.ceil((diasPassados + inicioAno.getDay() + 1) / 7);
    elNumeroSemana.textContent = 'Semana ' + semana;
}

/**
 * Função principal: atualiza todo o relógio
 */
function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    atualizarNumeros(horas, minutos, segundos);
    atualizarSaudacao(horas);
    atualizarData(agora);
    atualizarProgressoDia(agora);
    atualizarInfoExtras(agora);
}

// --- Inicialização ---

/**
 * Inicia o relógio e configura atualização periódica
 */
function iniciarRelogio() {
    // Configura o tema na inicialização
    const temaInicial = obterTemaAtual();
    aplicarTema(temaInicial);
    detectarPreferenciaSistema();

    // Evento do botão toggle
    elToggleTema.addEventListener('click', alternarTema);

    // Inicia o relógio
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);

    console.log('⏱ Relógio Material iniciado com sucesso!');
    console.log('🎨 Tema atual:', temaInicial);
}

// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', iniciarRelogio);
