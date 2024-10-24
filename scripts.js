document.getElementById('form-despesas').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletar os valores dos campos do formulário
    const valor = document.getElementById('valor').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;

    // Verificar se os campos estão preenchidos
    if (valor && descricao && data) {
        const tbody = document.getElementById('despesas-lista');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${descricao}</td>
            <td>R$ ${parseFloat(valor).toFixed(2)}</td>
            <td>${data}</td>
        `;

        // Adicionar a nova linha à tabela
        tbody.appendChild(newRow);

        // Limpar os campos do formulário após a adição
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
