    
    // ========== NAVEGAÇÃO MÓVEL ==========
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle do menu hambúrguer
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ========== ANIMAÇÃO DE DIGITAÇÃO ==========
    const typingText = document.getElementById('typing-text');
    const codeLines = [
        '    print("Olá, mundo!")',
        '    print ("Bem-vindo ao meu portfólio")',
        '',
        '    def apresentar(nome):',
        '        return f"Eu sou {nome}!"',
        '',
        'nome= "Luciano',
        'print(nome)',
        'num1= 15',
        'num2= 3',
        'soma= num1 + num2 ',
        'print(f"Minha idade é: {soma} de idade)',
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';

    function typeCode() {
        if (lineIndex < codeLines.length) {
            if (charIndex < codeLines[lineIndex].length) {
                currentLine += codeLines[lineIndex].charAt(charIndex);
                charIndex++;
            } else {
                currentLine += '\n';
                lineIndex++;
                charIndex = 0;
            }
            
            typingText.textContent = currentLine + (charIndex === 0 ? '' : '|');
            setTimeout(typeCode, charIndex === 0 ? 500 : 100);
        } else {
            // Reiniciar animação após 3 segundos
            setTimeout(() => {
                lineIndex = 0;
                charIndex = 0;
                currentLine = '';
                typeCode();
            }, 3000);
        }
    }

    typeCode();