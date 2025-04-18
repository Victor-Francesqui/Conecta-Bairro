document.addEventListener('DOMContentLoaded', function () {
    // Esta função integra o código de login do primeiro arquivo no segundo

    // Modais
    const modalCadastroLogin = document.getElementById('modalCadastroLogin');
    const modalNovoAnuncio = document.getElementById('modalNovoAnuncio');
    const modalDetalhes = document.getElementById('modalDetalhes');
    const formCadastroLogin = document.getElementById('formCadastroLogin');
    const formNovoAnuncio = document.getElementById('formNovoAnuncio');

    // Botões para abrir modais
    const btnLogin = document.getElementById('btnLogin');
    const btnLoginMobile = document.getElementById('btnLoginMobile');
    const btnCadastro = document.getElementById('btnCadastro');
    const btnCadastroMobile = document.getElementById('btnCadastroMobile');
    const btnNovoAnuncio = document.getElementById('btnNovoAnuncio');

    // Botões para fechar modais
    const fecharCadastroLogin = document.getElementById('fecharCadastroLogin');
    const fecharNovoAnuncio = document.getElementById('fecharNovoAnuncio');
    const fecharModal = document.getElementById('fecharModal');

    // Menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Contêiner de anúncios
    const anunciosContainer = document.getElementById('anunciosContainer');
    const anunciosCount = document.getElementById('anunciosCount');

    // Função para mostrar o modal com animação
    function showModal(modal) {
        if (!modal) return;
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    // Função para esconder o modal com animação
    function hideModal(modal) {
        if (!modal) return;
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    // Garantindo que o evento de fechar modais ao clicar fora deles funcione
    window.addEventListener('click', function (event) {
        if (modalCadastroLogin && event.target === modalCadastroLogin) {
            hideModal(modalCadastroLogin);
        }
        if (modalNovoAnuncio && event.target === modalNovoAnuncio) {
            hideModal(modalNovoAnuncio);
        }
        if (modalDetalhes && event.target === modalDetalhes) {
            hideModal(modalDetalhes);
        }
    });

    // Implementação do toggle de senha (corrigido)
    const toggleSenha = document.getElementById('toggleSenha');
    if (toggleSenha) {
        toggleSenha.addEventListener('click', function () {
            const senhaInput = document.getElementById('senha');
            if (senhaInput.type === 'password') {
                senhaInput.type = 'text';
                toggleSenha.innerHTML = '<i class="fas fa-eye-slash"></i>';
            } else {
                senhaInput.type = 'password';
                toggleSenha.innerHTML = '<i class="fas fa-eye"></i>';
            }
        });
    }

    // Toggle para confirmar senha (adicionado)
    const confirmarSenhaField = document.getElementById('confirmarSenha');
    if (confirmarSenhaField) {
        // Adicionar botão toggle para o campo confirmar senha
        const confirmarSenhaParent = confirmarSenhaField.parentElement;

        // Verificar se o parent já tem um botão de toggle
        if (!confirmarSenhaParent.querySelector('.toggle-senha')) {
            confirmarSenhaParent.classList.add('relative');

            const toggleConfirmarSenha = document.createElement('button');
            toggleConfirmarSenha.type = 'button';
            toggleConfirmarSenha.id = 'toggleConfirmarSenha';
            toggleConfirmarSenha.className = 'toggle-senha absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500';
            toggleConfirmarSenha.innerHTML = '<i class="fas fa-eye"></i>';

            toggleConfirmarSenha.addEventListener('click', function () {
                if (confirmarSenhaField.type === 'password') {
                    confirmarSenhaField.type = 'text';
                    this.innerHTML = '<i class="fas fa-eye-slash"></i>';
                } else {
                    confirmarSenhaField.type = 'password';
                    this.innerHTML = '<i class="fas fa-eye"></i>';
                }
            });

            confirmarSenhaParent.appendChild(toggleConfirmarSenha);
        }
    }

    // Função para modificar a exibição dos campos de cadastro/login
    function toggleCamposCadastroLogin(tipo) {
        if (!modalCadastroLogin) return;

        const nomeField = document.getElementById('nome')?.parentElement;
        const telefoneField = document.getElementById('telefone')?.parentElement;
        const tipoUsuarioField = document.getElementById('tipoUsuario')?.parentElement;
        const confirmarSenhaField = document.getElementById('confirmarSenha')?.parentElement;
        const camposExtras = document.getElementById('camposExtras');
        const tituloModal = document.getElementById('tituloModalCadastroLogin');
        const submitBtn = formCadastroLogin?.querySelector('button[type="submit"]');

        if (tipo === 'Login') {
            if (tituloModal) tituloModal.textContent = 'Login';
            if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-sign-in-alt mr-2"></i>Entrar';

            // Esconder campos específicos de cadastro
            if (nomeField) nomeField.style.display = 'none';
            if (telefoneField) telefoneField.style.display = 'none';
            if (tipoUsuarioField) tipoUsuarioField.style.display = 'none';
            if (confirmarSenhaField) confirmarSenhaField.style.display = 'none';
            if (camposExtras) camposExtras.style.display = 'none';
        } else if (tipo === 'Cadastro') {
            if (tituloModal) tituloModal.textContent = 'Cadastro';
            if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-user-plus mr-2"></i>Cadastrar';

            // Mostrar campos específicos de cadastro
            if (nomeField) nomeField.style.display = 'block';
            if (telefoneField) telefoneField.style.display = 'block';
            if (tipoUsuarioField) tipoUsuarioField.style.display = 'block';
            if (confirmarSenhaField) confirmarSenhaField.style.display = 'block';
            if (camposExtras) camposExtras.style.display = 'block';
        }
    }

    // Event listeners para botões de login e cadastro
    if (btnLogin) {
        btnLogin.addEventListener('click', function () {
            toggleCamposCadastroLogin('Login');
            showModal(modalCadastroLogin);
        });
    }

    if (btnLoginMobile) {
        btnLoginMobile.addEventListener('click', function () {
            toggleCamposCadastroLogin('Login');
            showModal(modalCadastroLogin);
            if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    }

    if (btnCadastro) {
        btnCadastro.addEventListener('click', function () {
            toggleCamposCadastroLogin('Cadastro');
            showModal(modalCadastroLogin);
        });
    }

    if (btnCadastroMobile) {
        btnCadastroMobile.addEventListener('click', function () {
            toggleCamposCadastroLogin('Cadastro');
            showModal(modalCadastroLogin);
            if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    }

    if (fecharCadastroLogin) {
        fecharCadastroLogin.addEventListener('click', function () {
            hideModal(modalCadastroLogin);
        });
    }

    if (btnNovoAnuncio) {
        btnNovoAnuncio.addEventListener('click', function () {
            // Verificar se usuário está logado
            const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual') || '{}');
            if (!usuarioAtual.email) {
                alert('Você precisa estar logado para criar um anúncio!');
                showModal(modalCadastroLogin);
                toggleCamposCadastroLogin('Login'); // Mostrar o formulário de login
                return;
            }

            // Verificar se o usuário é empregador
            if (usuarioAtual.tipoUsuario !== 'empregador') {
                alert('Apenas usuários do tipo empregador podem criar anúncios!');
                return;
            }

            // Se está logado e é empregador, preencher automaticamente o campo de contato
            const contatoField = document.getElementById('contato');
            if (contatoField && usuarioAtual.telefone) {
                contatoField.value = usuarioAtual.telefone;
            }

            showModal(modalNovoAnuncio);
        });
    }

    // Implementar a funcionalidade de login/cadastro
    if (formCadastroLogin) {
        formCadastroLogin.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email')?.value;
            const senha = document.getElementById('senha')?.value;
            const isCadastro = document.getElementById('tituloModalCadastroLogin')?.textContent === 'Cadastro';

            if (!email || !senha) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }

            // Obter dados dos usuários armazenados
            const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

            if (isCadastro) {
                // Lógica de cadastro
                const nome = document.getElementById('nome')?.value;
                const telefone = document.getElementById('telefone')?.value;
                const tipoUsuario = document.getElementById('tipoUsuario')?.value;
                const confirmarSenha = document.getElementById('confirmarSenha')?.value;

                if (!nome || !telefone || !tipoUsuario || !confirmarSenha) {
                    alert('Por favor, preencha todos os campos obrigatórios!');
                    return;
                }

                // Validação básica
                if (senha !== confirmarSenha) {
                    alert('As senhas não conferem!');
                    return;
                }

                // Verificar se o email já está cadastrado
                const emailExistente = usuarios.some(user => user.email === email);
                if (emailExistente) {
                    alert('Este email já está cadastrado. Por favor, use outro email ou faça login.');
                    return;
                }

                // Criar novo usuário
                const novoUsuario = {
                    nome,
                    email,
                    telefone,
                    tipoUsuario,
                    senha // Em uma aplicação real, nunca armazene senha em texto simples
                };

                // Adicionar à lista de usuários
                usuarios.push(novoUsuario);
                localStorage.setItem('usuarios', JSON.stringify(usuarios));

                // Definir o usuário atual
                localStorage.setItem('usuarioAtual', JSON.stringify(novoUsuario));

                alert('Cadastro realizado com sucesso!');

                // Atualizar a interface para mostrar o usuário logado
                atualizarInterfaceUsuarioLogado(nome);
            } else {
                // Lógica de login (melhorada)
                const usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === senha);

                if (usuarioEncontrado) {
                    // Login bem-sucedido
                    localStorage.setItem('usuarioAtual', JSON.stringify(usuarioEncontrado));
                    alert('Login realizado com sucesso!');

                    // Atualizar a interface para mostrar o usuário logado
                    atualizarInterfaceUsuarioLogado(usuarioEncontrado.nome);
                } else {
                    alert('Email ou senha incorretos!');
                    return; // Sair da função sem fechar o modal
                }
            }

            // Fechar o modal após o login/cadastro bem-sucedido
            hideModal(modalCadastroLogin);
        });
    }

    // Função para atualizar a interface quando o usuário está logado
    function atualizarInterfaceUsuarioLogado(nome) {
        const headerUsuario = document.getElementById('headerUsuario');
        const headerUsuarioMobile = document.getElementById('headerUsuarioMobile');
        const btnLogin = document.getElementById('btnLogin');
        const btnLoginMobile = document.getElementById('btnLoginMobile');
        const btnCadastro = document.getElementById('btnCadastro');
        const btnCadastroMobile = document.getElementById('btnCadastroMobile');
        const btnLogout = document.getElementById('btnLogout');
        const btnLogoutMobile = document.getElementById('btnLogoutMobile');
        const btnNovoAnuncio = document.getElementById('btnNovoAnuncio');

        // Atualizar o texto de saudação
        if (headerUsuario) {
            headerUsuario.textContent = `Olá, ${nome}`;
        }
        if (headerUsuarioMobile) {
            headerUsuarioMobile.textContent = `Olá, ${nome}`;
        }

        // Ocultar botões de login/cadastro
        if (btnLogin) btnLogin.classList.add('hidden');
        if (btnLoginMobile) btnLoginMobile.classList.add('hidden');
        if (btnCadastro) btnCadastro.classList.add('hidden');
        if (btnCadastroMobile) btnCadastroMobile.classList.add('hidden');

        // Mostrar botões de logout
        if (btnLogout) btnLogout.classList.remove('hidden');
        if (btnLogoutMobile) btnLogoutMobile.classList.remove('hidden');

        // Verificar se o usuário é do tipo "empregador" antes de mostrar o botão de novo anúncio
        const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual') || '{}');
        if (btnNovoAnuncio) {
            if (usuarioAtual.tipoUsuario === 'empregador') {
                btnNovoAnuncio.classList.remove('hidden');
            } else {
                btnNovoAnuncio.classList.add('hidden');
            }
        }
    }

    // Configurar o logout
    const btnLogout = document.getElementById('btnLogout');
    const btnLogoutMobile = document.getElementById('btnLogoutMobile');

    function handleLogout() {
        const headerUsuario = document.getElementById('headerUsuario');
        const headerUsuarioMobile = document.getElementById('headerUsuarioMobile');
        const btnLogin = document.getElementById('btnLogin');
        const btnLoginMobile = document.getElementById('btnLoginMobile');
        const btnCadastro = document.getElementById('btnCadastro');
        const btnCadastroMobile = document.getElementById('btnCadastroMobile');
        const btnLogout = document.getElementById('btnLogout');
        const btnLogoutMobile = document.getElementById('btnLogoutMobile');
        const btnNovoAnuncio = document.getElementById('btnNovoAnuncio');

        // Limpar informações de usuário na UI
        if (headerUsuario) headerUsuario.textContent = '';
        if (headerUsuarioMobile) headerUsuarioMobile.textContent = '';

        // Mostrar botões de login/cadastro
        if (btnLogin) btnLogin.classList.remove('hidden');
        if (btnLoginMobile) btnLoginMobile.classList.remove('hidden');
        if (btnCadastro) btnCadastro.classList.remove('hidden');
        if (btnCadastroMobile) btnCadastroMobile.classList.remove('hidden');

        // Ocultar botões de logout e novo anúncio
        if (btnLogout) btnLogout.classList.add('hidden');
        if (btnLogoutMobile) btnLogoutMobile.classList.add('hidden');
        if (btnNovoAnuncio) btnNovoAnuncio.classList.add('hidden');

        // Remover dados do usuário atual do localStorage
        localStorage.removeItem('usuarioAtual');

        // Mensagem de confirmação
        alert('Logout realizado com sucesso!');
    }

    // Função modificada para verificar usuário logado
    function verificarUsuarioLogado() {
        // Usando sempre 'usuarioAtual' como chave para armazenar dados do usuário
        const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual') || '{}');
        
        if (usuarioAtual.nome) {
            // Se houver um usuário armazenado, atualizar a interface
            atualizarInterfaceUsuarioLogado(usuarioAtual.nome);
        }
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', handleLogout);
    }

    if (btnLogoutMobile) {
        btnLogoutMobile.addEventListener('click', function () {
            handleLogout();
            if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    }

    // IMPLEMENTAÇÃO DOS ANÚNCIOS (NOVA FUNCIONALIDADE)

    // Função para gerar ID único para anúncios
    function gerarId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Função para salvar anúncio no localStorage
    function salvarAnuncio(anuncio) {
        // Obter anúncios existentes
        const anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');

        // Adicionar novo anúncio
        anuncios.push(anuncio);

        // Salvar no localStorage
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
    }

    // Função para obter anúncios do localStorage
    function obterAnuncios() {
        return JSON.parse(localStorage.getItem('anuncios') || '[]');
    }

    // Função para criar cartão de anúncio no DOM
    function criarCartaoAnuncio(anuncio) {
        const cartao = document.createElement('div');
        cartao.className = 'bg-white rounded-lg shadow-lg overflow-hidden card-hover fade-in';
        cartao.dataset.id = anuncio.id;

        // Imagem do anúncio (usando a primeira imagem do anúncio ou placeholder)
        const imagemUrl = anuncio.imagens && anuncio.imagens.length > 0
            ? anuncio.imagens[0]
            : 'https://via.placeholder.com/300x200?text=Sem+Imagem';

        cartao.innerHTML = `
  <div class="relative h-48 overflow-hidden">
    <img src="${imagemUrl}" alt="${anuncio.titulo}" class="w-full h-full object-cover">
    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
      <div class="flex justify-between items-center">
        <span class="badge bg-blue-100 text-blue-700">${anuncio.bairro}</span>
        <span class="badge bg-green-100 text-green-700">${anuncio.categoria}</span>
      </div>
    </div>
  </div>
  <div class="p-4">
    <h3 class="text-lg font-semibold text-gray-800 mb-2">${anuncio.titulo}</h3>
    <p class="text-gray-600 text-sm line-clamp-2 mb-3">${anuncio.descricao}</p>
    <button class="btn-ver-detalhes w-full bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition shadow">
      <i class="fas fa-eye mr-2"></i>Ver detalhes
    </button>
  </div>
`;

        // Adicionar event listener para ver detalhes
        const btnDetalhes = cartao.querySelector('.btn-ver-detalhes');
        btnDetalhes.addEventListener('click', () => mostrarDetalhesAnuncio(anuncio));

        return cartao;
    }

    // Função para mostrar detalhes do anúncio
    function mostrarDetalhesAnuncio(anuncio) {
        // Preencher o modal com os dados do anúncio
        document.getElementById('modalTitulo').textContent = anuncio.titulo;
        document.getElementById('modalBairro').textContent = anuncio.bairro;
        document.getElementById('modalCategoria').textContent = anuncio.categoria;
        document.getElementById('modalDescricao').textContent = anuncio.descricao;
        document.getElementById('modalContato').querySelector('span').textContent = anuncio.contato;

        // Limpar imagens existentes
        const modalImagens = document.getElementById('modalImagens');
        modalImagens.innerHTML = '';
        modalImagens.style.transform = 'translateX(0)'; // Resetar posição do slider

        // Adicionar imagens do anúncio ou placeholder
        if (anuncio.imagens && anuncio.imagens.length > 0) {
            anuncio.imagens.forEach(imagem => {
                const img = document.createElement('div');
                img.className = 'min-w-full';
                img.innerHTML = `<img src="${imagem}" alt="${anuncio.titulo}" class="w-full h-64 object-cover">`;
                modalImagens.appendChild(img);
            });

            // Mostrar botões de navegação apenas se houver mais de uma imagem
            document.getElementById('prevImage').style.display = anuncio.imagens.length > 1 ? 'flex' : 'none';
            document.getElementById('nextImage').style.display = anuncio.imagens.length > 1 ? 'flex' : 'none';
        } else {
            const img = document.createElement('div');
            img.className = 'min-w-full';
            img.innerHTML = `<img src="https://via.placeholder.com/800x400?text=Sem+Imagem" alt="${anuncio.titulo}" class="w-full h-64 object-cover">`;
            modalImagens.appendChild(img);

            // Esconder botões de navegação
            document.getElementById('prevImage').style.display = 'none';
            document.getElementById('nextImage').style.display = 'none';
        }

        // Mostrar botões de edição/exclusão se o usuário for o dono
        const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual') || '{}');
        const btnEditarAnuncio = document.getElementById('btnEditarAnuncio');
        const btnExcluirAnuncioDetalhes = document.getElementById('btnExcluirAnuncioDetalhes');

        if (usuarioAtual.email === anuncio.emailCriador) {
            btnEditarAnuncio.classList.remove('hidden');
            btnExcluirAnuncioDetalhes.classList.remove('hidden');

            // Event listener para excluir anúncio
            btnExcluirAnuncioDetalhes.onclick = () => {
                if (confirm('Tem certeza que deseja excluir este anúncio?')) {
                    excluirAnuncio(anuncio.id);
                    hideModal(modalDetalhes);
                }
            };

            // Implementar edição
            // Event listener para o botão Editar no modal de detalhes
            btnEditarAnuncio.onclick = () => {
                // Fechar modal de detalhes
                hideModal(modalDetalhes);

                // Preencher formulário para edição
                document.getElementById('titulo').value = anuncio.titulo;
                document.getElementById('descricao').value = anuncio.descricao;
                document.getElementById('bairro').value = anuncio.bairro;
                document.getElementById('categoria').value = anuncio.categoria;
                document.getElementById('contato').value = anuncio.contato;

                // Preencher o preview de imagens
                if (previewImagens) {
                    previewImagens.innerHTML = ''; // Limpar qualquer preview existente

                    // Inicializar o array de imagens com as imagens existentes do anúncio
                    imagensParaUpload = anuncio.imagens ? [...anuncio.imagens] : [];

                    // Criar previews para cada imagem existente
                    imagensParaUpload.forEach(imagem => {
                        const preview = document.createElement('div');
                        preview.className = 'relative bg-gray-100 rounded-lg overflow-hidden h-24';
                        preview.innerHTML = `
      <img src="${imagem}" alt="Preview" class="w-full h-full object-cover">
      <button type="button" class="btn-remover-imagem absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow hover:bg-red-600">
        <i class="fas fa-times"></i>
      </button>
    `;

                        // Adicionar botão para remover imagem
                        const btnRemover = preview.querySelector('.btn-remover-imagem');
                        btnRemover.addEventListener('click', function () {
                            const index = imagensParaUpload.indexOf(imagem);
                            if (index > -1) {
                                imagensParaUpload.splice(index, 1);
                                preview.remove();
                            }
                        });

                        previewImagens.appendChild(preview);
                    });
                }

                // Modificar o formulário para edição
                document.getElementById('tituloModalNovoAnuncio').textContent = 'Editar Anúncio';

                // Botão de submissão alterado para atualizar
                const btnSubmit = formNovoAnuncio.querySelector('button[type="submit"]');
                btnSubmit.innerHTML = '<i class="fas fa-save mr-2"></i>Atualizar Anúncio';

                // Armazenar o ID do anúncio sendo editado
                formNovoAnuncio.dataset.editandoId = anuncio.id;

                // Abrir modal de edição
                showModal(modalNovoAnuncio);
            };
        } else {
            btnEditarAnuncio.classList.add('hidden');
            btnExcluirAnuncioDetalhes.classList.add('hidden');
        }

        // Mostrar o modal
        showModal(modalDetalhes);
    }

    // Função para excluir anúncio
    function excluirAnuncio(id) {
        let anuncios = obterAnuncios();
        anuncios = anuncios.filter(anuncio => anuncio.id !== id);
        localStorage.setItem('anuncios', JSON.stringify(anuncios));

        // Atualizar a exibição
        exibirAnuncios();
    }

    // Função para exibir anúncios na página
    function exibirAnuncios() {
        // Limpar container
        anunciosContainer.innerHTML = '';

        // Obter anúncios
        const anuncios = obterAnuncios();

        // Atualizar contador
        if (anunciosCount) {
            anunciosCount.textContent = `${anuncios.length} anúncios`;
        }

        // Se não houver anúncios, mostrar mensagem
        if (anuncios.length === 0) {
            const mensagem = document.createElement('div');
            mensagem.className = 'col-span-full text-center py-8 text-gray-500';
            mensagem.innerHTML = `
      <i class="fas fa-search text-4xl mb-3"></i>
      <p class="text-lg">Nenhum anúncio encontrado</p>
      <p>Seja o primeiro a publicar um anúncio na plataforma!</p>
    `;
            anunciosContainer.appendChild(mensagem);
            return;
        }

        // Adicionar cada anúncio ao container
        anuncios.forEach(anuncio => {
            const cartao = criarCartaoAnuncio(anuncio);
            anunciosContainer.appendChild(cartao);
        });
    }

    // Adicionar funcionalidade para upload de imagens
    const inputImagens = document.getElementById('imagens');
    const previewImagens = document.getElementById('previewImagens');
    let imagensParaUpload = [];

    // Verificar se os elementos existem
    if (inputImagens && previewImagens) {
        // Inicializar o container de preview
        if (!previewImagens.classList.contains('grid')) {
            previewImagens.className = 'grid grid-cols-3 gap-2 mt-2';
        }
        // Event listener para seleção de imagens
        inputImagens.addEventListener('change', function (e) {
            const files = Array.from(e.target.files);

            // Limitar o número de imagens (máximo 3)
            if (files.length + imagensParaUpload.length > 3) {
                alert('Você pode adicionar no máximo 3 imagens por anúncio.');
                return;
            }

            // Processar cada arquivo
            files.forEach(file => {
                // Verificar se é uma imagem
                if (!file.type.match('image.*')) {
                    alert('Por favor, selecione apenas arquivos de imagem.');
                    return;
                }

                // Verificar tamanho (máximo 1MB)
                if (file.size > 10 * 1024 * 1024) {
                    alert('Cada imagem deve ter no máximo 10MB.');
                    return;
                }

                // Usar FileReader para converter a imagem em base64
                const reader = new FileReader();
                reader.onload = function (e) {
                    // Adicionar ao array de imagens
                    imagensParaUpload.push(e.target.result);

                    // Criar preview
                    const preview = document.createElement('div');
                    preview.className = 'relative bg-gray-100 rounded-lg overflow-hidden h-24';
                    preview.innerHTML = `
        <img src="${e.target.result}" alt="Preview" class="w-full h-full object-cover">
        <button type="button" class="btn-remover-imagem absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow hover:bg-red-600">
          <i class="fas fa-times"></i>
        </button>
      `;

                    // Adicionar botão para remover imagem
                    const btnRemover = preview.querySelector('.btn-remover-imagem');
                    btnRemover.addEventListener('click', function () {
                        const index = imagensParaUpload.indexOf(e.target.result);
                        if (index > -1) {
                            imagensParaUpload.splice(index, 1);
                            preview.remove();
                        }
                    });

                    previewImagens.appendChild(preview);
                };

                reader.readAsDataURL(file);
            });
        });
    }

    // Implementar a funcionalidade de criar novo anúncio
    if (formNovoAnuncio) {
        formNovoAnuncio.addEventListener('submit', function (e) {
            e.preventDefault();

            // Verificar se usuário está logado com a nova estrutura
            const usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual') || '{}');
            if (!usuarioAtual.email) {
                alert('Você precisa estar logado para criar um anúncio!');
                hideModal(modalNovoAnuncio);
                showModal(modalCadastroLogin);
                toggleCamposCadastroLogin('Login');
                return;
            }

            // Obter dados do formulário
            const titulo = document.getElementById('titulo').value;
            const descricao = document.getElementById('descricao').value;
            const bairro = document.getElementById('bairro').value;
            const categoria = document.getElementById('categoria').value;
            const contato = document.getElementById('contato').value;

            // Validação básica
            if (!titulo || !descricao || !bairro || !categoria || !contato) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }

            // Verificar se está editando ou criando novo
            const editandoId = formNovoAnuncio.dataset.editandoId;

            if (editandoId) {
                // Modo de edição - Atualizar anúncio existente
                const anuncios = obterAnuncios();
                const index = anuncios.findIndex(a => a.id === editandoId);

                if (index !== -1) {
                    // Manter dados originais que não devem mudar
                    const anuncioOriginal = anuncios[index];

                    // Atualizar o anúncio
                    anuncios[index] = {
                        ...anuncioOriginal, // Manter ID, data de criação e criador originais
                        titulo,
                        descricao,
                        bairro,
                        categoria,
                        contato,
                        imagens: imagensParaUpload, // Atualizar com as imagens novas/editadas
                        dataAtualizacao: new Date().toISOString() // Adicionar data de atualização
                    };

                    // Salvar no localStorage
                    localStorage.setItem('anuncios', JSON.stringify(anuncios));

                    alert('Anúncio atualizado com sucesso!');
                } else {
                    alert('Erro: Anúncio não encontrado!');
                }

                // Limpar flag de edição
                delete formNovoAnuncio.dataset.editandoId;

                // Restaurar o título e botão para novo anúncio
                document.getElementById('tituloModalNovoAnuncio').textContent = 'Novo Anúncio';
                const btnSubmit = formNovoAnuncio.querySelector('button[type="submit"]');
                btnSubmit.innerHTML = '<i class="fas fa-plus mr-2"></i>Publicar Anúncio';

            } else {
                // Modo de criação - Criar novo anúncio
                const novoAnuncio = {
                    id: gerarId(),
                    titulo,
                    descricao,
                    bairro,
                    categoria,
                    contato,
                    emailCriador: usuarioAtual.email,
                    nomeCriador: usuarioAtual.nome,
                    dataCriacao: new Date().toISOString(),
                    imagens: imagensParaUpload // Incluir imagens em base64
                };

                // Salvar anúncio
                salvarAnuncio(novoAnuncio);

                alert('Anúncio criado com sucesso!');
            }

            // Atualizar a exibição
            exibirAnuncios();

            // Limpar o formulário e as imagens
            formNovoAnuncio.reset();
            imagensParaUpload = [];
            if (previewImagens) {
                previewImagens.innerHTML = '';
            }

            // Fechar o modal
            hideModal(modalNovoAnuncio);
        });
    }

    // Implementar filtros
    const btnFiltrar = document.getElementById('btnFiltrar');
    if (btnFiltrar) {
        btnFiltrar.addEventListener('click', function () {
            const bairroFiltro = document.getElementById('filtroBairro').value.toLowerCase();
            const categoriaFiltro = document.getElementById('filtroCategoria').value.toLowerCase();
            const buscaFiltro = document.getElementById('filtroBusca').value.toLowerCase();

            // Obter todos os anúncios
            const anuncios = obterAnuncios();

            // Filtrar anúncios
            const anunciosFiltrados = anuncios.filter(anuncio => {
                const bairroMatch = !bairroFiltro || anuncio.bairro.toLowerCase().includes(bairroFiltro);
                const categoriaMatch = !categoriaFiltro || anuncio.categoria.toLowerCase().includes(categoriaFiltro);
                const buscaMatch = !buscaFiltro ||
                    anuncio.titulo.toLowerCase().includes(buscaFiltro) ||
                    anuncio.descricao.toLowerCase().includes(buscaFiltro);

                return bairroMatch && categoriaMatch && buscaMatch;
            });

            // Limpar container
            anunciosContainer.innerHTML = '';

            // Atualizar contador
            if (anunciosCount) {
                anunciosCount.textContent = `${anunciosFiltrados.length} anúncios`;
            }

            // Se não houver anúncios, mostrar mensagem
            if (anunciosFiltrados.length === 0) {
                const mensagem = document.createElement('div');
                mensagem.className = 'col-span-full text-center py-8 text-gray-500';
                mensagem.innerHTML = `
        <i class="fas fa-filter text-4xl mb-3"></i>
        <p class="text-lg">Nenhum anúncio encontrado com esses filtros</p>
        <p>Tente outros critérios de busca.</p>
      `;
                anunciosContainer.appendChild(mensagem);
                return;
            }

            // Adicionar cada anúncio ao container
            anunciosFiltrados.forEach(anuncio => {
                const cartao = criarCartaoAnuncio(anuncio);
                anunciosContainer.appendChild(cartao);
            });
        });
    }

    // Carregar as categorias nos filtros
    function carregarCategorias() {
        const categorias = new Set();
        const bairros = new Set();

        // Obter categorias e bairros dos anúncios existentes
        const anuncios = obterAnuncios();
        anuncios.forEach(anuncio => {
            categorias.add(anuncio.categoria);
            bairros.add(anuncio.bairro);
        });

        // Adicionar categorias ao filtro
        const filtroCategoria = document.getElementById('filtroCategoria');
        if (filtroCategoria) {
            filtroCategoria.innerHTML = '<option value="">Todas as Categorias</option>';
            categorias.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria;
                option.textContent = categoria;
                filtroCategoria.appendChild(option);
            });
        }

        // Adicionar bairros ao filtro
        const filtroBairro = document.getElementById('filtroBairro');
        if (filtroBairro) {
            filtroBairro.innerHTML = '<option value="">Todos os Bairros</option>';
            bairros.forEach(bairro => {
                const option = document.createElement('option');
                option.value = bairro;
                option.textContent = bairro;
                filtroBairro.appendChild(option);
            });
        }
    }

    // Toggle menu mobile
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Event listener para cards de categoria
    const categoryCards = document.querySelectorAll('.category-card');
    if (categoryCards.length > 0) {
        categoryCards.forEach(card => {
            card.addEventListener('click', function () {
                const categoria = this.dataset.category;
                document.getElementById('filtroCategoria').value = categoria;
                btnFiltrar.click();
            });
        });
    }

    // Botões de navegação do slider de imagens
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');

    if (prevImage && nextImage) {
        let currentImageIndex = 0;

        prevImage.addEventListener('click', function () {
            const modalImagens = document.getElementById('modalImagens');
            const totalImagens = modalImagens.children.length;

            if (totalImagens <= 1) return;

            currentImageIndex = (currentImageIndex - 1 + totalImagens) % totalImagens;
            modalImagens.style.transform = `translateX(-${currentImageIndex * 100}%)`;
        });

        nextImage.addEventListener('click', function () {
            const modalImagens = document.getElementById('modalImagens');
            const totalImagens = modalImagens.children.length;

            if (totalImagens <= 1) return;

            currentImageIndex = (currentImageIndex + 1) % totalImagens;
            modalImagens.style.transform = `translateX(-${currentImageIndex * 100}%)`;
        });
    }

    // Garantindo que os botões para fechar modais funcionem
    // Limpar o formulário e resetar o estado quando o modal for fechado
    if (fecharNovoAnuncio) {
        fecharNovoAnuncio.addEventListener('click', function () {
            // Limpar ID de edição se existir
            if (formNovoAnuncio.dataset.editandoId) {
                delete formNovoAnuncio.dataset.editandoId;

                // Restaurar o formulário para estado de novo anúncio
                document.getElementById('tituloModalNovoAnuncio').textContent = 'Novo Anúncio';
                const btnSubmit = formNovoAnuncio.querySelector('button[type="submit"]');
                btnSubmit.innerHTML = '<i class="fas fa-plus mr-2"></i>Publicar Anúncio';
            }

            // Limpar imagens
            imagensParaUpload = [];
            if (previewImagens) {
                previewImagens.innerHTML = '';
            }

            // Limpar o formulário
            formNovoAnuncio.reset();

            // Fechar modal
            hideModal(modalNovoAnuncio);
        });

        // Fechar modal clicando no fundo também deve limpar o estado
        modalNovoAnuncio.addEventListener('click', function (event) {
            if (event.target === modalNovoAnuncio) {
                fecharNovoAnuncio.click(); // Reuse the logic
            }
        });
    }

    if (fecharModal) {
        fecharModal.addEventListener('click', function () {
            hideModal(modalDetalhes);
        });
    }

    // Carregar anúncios e categorias na inicialização
    verificarUsuarioLogado();
    exibirAnuncios();
    carregarCategorias();

    // Inicializar tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    if (tooltips.length > 0) {
        tooltips.forEach(tooltip => {
            tooltip.addEventListener('mouseenter', function () {
                const tooltipText = this.dataset.tooltip;
                const tooltipElement = document.createElement('div');
                tooltipElement.className = 'tooltip absolute bg-gray-800 text-white text-xs rounded py-1 px-2 z-50';
                tooltipElement.textContent = tooltipText;

                // Posicionar o tooltip
                this.style.position = 'relative';
                this.appendChild(tooltipElement);

                // Posicionar abaixo do elemento
                tooltipElement.style.bottom = '-25px';
                tooltipElement.style.left = '50%';
                tooltipElement.style.transform = 'translateX(-50%)';
            });

            tooltip.addEventListener('mouseleave', function () {
                const tooltipElement = this.querySelector('.tooltip');
                if (tooltipElement) {
                    tooltipElement.remove();
                }
            });
        });
    }

    // Adicionar handler para o botão de limpar filtros
    const btnLimparFiltros = document.getElementById('btnLimparFiltros');
    if (btnLimparFiltros) {
        btnLimparFiltros.addEventListener('click', function () {
            document.getElementById('filtroBairro').value = '';
            document.getElementById('filtroCategoria').value = '';
            document.getElementById('filtroBusca').value = '';

            // Recarregar todos os anúncios
            exibirAnuncios();
        });
    }

    // Implementar ordenação de anúncios
    const ordenarAnuncios = document.getElementById('ordenarAnuncios');
    if (ordenarAnuncios) {
        ordenarAnuncios.addEventListener('change', function () {
            const opcao = this.value;
            let anuncios = obterAnuncios();

            switch (opcao) {
                case 'recentes':
                    anuncios.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));
                    break;
                case 'antigos':
                    anuncios.sort((a, b) => new Date(a.dataCriacao) - new Date(b.dataCriacao));
                    break;
                case 'alfabetica':
                    anuncios.sort((a, b) => a.titulo.localeCompare(b.titulo));
                    break;
            }

            // Limpar container
            anunciosContainer.innerHTML = '';

            // Adicionar cada anúncio ao container
            anuncios.forEach(anuncio => {
                const cartao = criarCartaoAnuncio(anuncio);
                anunciosContainer.appendChild(cartao);
            });
        });
    }

    // Adicionar evento para botão de compartilhar
    const btnCompartilhar = document.getElementById('btnCompartilhar');
    if (btnCompartilhar) {
        btnCompartilhar.addEventListener('click', function () {
            const titulo = document.getElementById('modalTitulo').textContent;

            // Verificar se a API de compartilhamento está disponível
            if (navigator.share) {
                navigator.share({
                    title: titulo,
                    text: `Confira este anúncio: ${titulo}`,
                    url: window.location.href
                })
                    .catch(error => {
                        console.error('Erro ao compartilhar:', error);
                        alert('Não foi possível compartilhar este anúncio.');
                    });
            } else {
                // Fallback para browsers que não suportam a API
                alert(`Link copiado: ${window.location.href}`);

                // Copiar para a área de transferência
                const tempInput = document.createElement('input');
                tempInput.value = window.location.href;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }
        });
    }

    // Implementar scroll suave para ancoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para o header fixo
                    behavior: 'smooth'
                });

                // Fechar menu mobile se estiver aberto
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Adicionar animação ao scroll
    function animarElementosAoScroll() {
        const elementos = document.querySelectorAll('.fade-in');

        elementos.forEach(elemento => {
            const posicaoElemento = elemento.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (posicaoElemento < alturaTela - 100) {
                elemento.classList.add('visible');
            }
        });
    }

    // Executar no carregamento inicial e ao scroll
    animarElementosAoScroll();
    window.addEventListener('scroll', animarElementosAoScroll);

    // Adicionar máscara ao campo de telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function (e) {
            let valor = e.target.value.replace(/\D/g, '');

            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            if (valor.length > 7) {
                valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (valor.length > 2) {
                valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            }

            e.target.value = valor;
        });
    }

    // Inicializar os elementos de contato nos detalhes do anúncio
    const contatoDetalhe = document.getElementById('modalContato');
    if (contatoDetalhe) {
        const btnCopiarContato = document.getElementById('btnCopiarContato');
        if (btnCopiarContato) {
            btnCopiarContato.addEventListener('click', function () {
                const contato = contatoDetalhe.querySelector('span').textContent;

                // Copiar para a área de transferência
                const tempInput = document.createElement('input');
                tempInput.value = contato;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);

                // Feedback visual
                this.textContent = 'Copiado!';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-copy mr-1"></i> Copiar';
                }, 2000);
            });
        }
    }

    // Inicializar efeitos visuais nos cards de anúncios
    function inicializarEfeitosVisuais() {
        const cards = document.querySelectorAll('.card-hover');

        cards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                this.classList.add('scale-105');
                this.classList.add('shadow-xl');
            });

            card.addEventListener('mouseleave', function () {
                this.classList.remove('scale-105');
                this.classList.remove('shadow-xl');
            });
        });
    }

    // Executar após carregar anúncios
    inicializarEfeitosVisuais();

    // Verificar suporte ao localStorage
    function verificarSuporte() {
        try {
            localStorage.setItem('teste', 'teste');
            localStorage.removeItem('teste');
            return true;
        } catch (e) {
            alert('Seu navegador não suporta armazenamento local. Algumas funcionalidades podem não funcionar corretamente.');
            return false;
        }
    }

    // Verificar suporte ao iniciar
    verificarSuporte();
});