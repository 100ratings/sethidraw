// Inicialização do Sistema de Ativação (Modificado para desativar restrições)
(async function() {
  const activationScreen = document.getElementById('activationScreen');
  const installScreen = document.getElementById('installScreen');
  
  // Esconder todas as telas de ativação e instalação
  if (activationScreen) {
    activationScreen.style.display = 'none';
    activationScreen.classList.add('hidden');
  }
  
  if (installScreen) {
    installScreen.style.display = 'none';
    installScreen.classList.add('hidden');
  }

  console.log('✅ Sistema de licença desativado com sucesso.');

  // Sobrescrever qualquer tentativa de validação periódica
  window.setInterval = (function(oldSetInterval) {
    return function(func, delay) {
      // Se for a função de validação de licença, não faz nada
      if (delay === 5 * 60 * 1000) {
        return null;
      }
      return oldSetInterval(func, delay);
    };
  })(window.setInterval);

})();
