// MOVER FILA //
const draggables = document.querySelectorAll('.draggable');
const table = document.getElementById('tarefaTable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

table.addEventListener('dragover', (e) => {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    const afterElement = getDragAfterElement(table, e.clientY);
    if (afterElement == null) {
        table.appendChild(dragging);
    } else {
        table.insertBefore(dragging, afterElement);
    }
    afterElement.classList.add('drag-over');
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// JANELA EDITAR //
function openEditModal(id, nome, custo, data_limite) {
    document.getElementById('editId').value = id;
    document.getElementById('editNome').value = nome;
    document.getElementById('editCusto').value = custo;
    document.getElementById('editDataLimite').value = data_limite;
    document.getElementById('editModal').style.display = 'block';
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

// MODAL DE AVISO
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}