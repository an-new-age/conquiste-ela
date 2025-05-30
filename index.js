// Timer de 9 minutos
let tempo = 14 * 60;
const timerEl = document.getElementById('timer');
function atualizarTimer() {
    const min = String(Math.floor(tempo / 60)).padStart(2, '0');
    const seg = String(tempo % 60).padStart(2, '0');
    timerEl.textContent = `${min}:${seg}`;
    if (tempo > 0) tempo--;
}
setInterval(atualizarTimer, 1000);

// FAQ interativo
document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
    // Toggle active class
    this.classList.toggle('active');
    
    // Toggle answer visibility
    const answer = this.nextElementSibling;
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
    });
});

// Smooth scroll para botões de compra
document.querySelectorAll('.buy-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
    // Aqui você adicionaria o código para processar a compra
    // Por enquanto, apenas rolamos para a seção de preço
    document.querySelector('.price-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
    });
});

if(!/http:/.test(window.location.href) && !/assunto-infinito/.test(window.location.href)){
    window.location.href = "https://assunto-infinito.site"
}