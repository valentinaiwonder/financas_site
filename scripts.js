document.getElementById('form-despesas').addEventListener('submit', function(event) {
    event.preventDefault();

    const valor = document.getElementById('valor').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;

    if (valor && descricao && data) {
        const tbody = document.getElementById('despesas-lista');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${descricao}</td>
            <td>R$ ${parseFloat(valor).toFixed(2)}</td>
            <td>${data}</td>
            <td>
                <button class="edit-button">Editar</button>
                <button class="delete-button">Excluir</button>
            </td>
        `;

        tbody.appendChild(newRow);
        this.reset();

        // Adicionar event listeners para os botões de editar e excluir
        newRow.querySelector('.edit-button').addEventListener('click', function() {
            editExpense(newRow, valor, descricao, data);
        });

        newRow.querySelector('.delete-button').addEventListener('click', function() {
            tbody.removeChild(newRow);
        });
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function editExpense(row, valor, descricao, data) {
    document.getElementById('valor').value = valor;
    document.getElementById('descricao').value = descricao;
    document.getElementById('data').value = data;

    // Remove a linha atual
    row.parentNode.removeChild(row);
}
