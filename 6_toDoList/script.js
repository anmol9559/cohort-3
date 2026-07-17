const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

btn.addEventListener('click', () => {
    const value = inp.value.trim();
    if (!value) return;

    const todoItem = document.createElement('div');
    todoItem.className = 'li';
    todoItem.innerHTML = `
        <h3>${value}</h3>
        <div>
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
        </div>
    `;

    todoBox.appendChild(todoItem);
    inp.value = "";
});

todoBox.addEventListener("click", (e) => {
    const target = e.target;
    const todoItem = target.closest('.li');
    if (!todoItem) return;

    if (target.classList.contains("del")) {
        todoItem.remove();
        return;
    }

    if (target.classList.contains("edit")) {
        const editButton = target;
        const titleElement = todoItem.querySelector('h3');

        if (editButton.textContent === 'Edit') {
            const currentText = titleElement.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.className = 'edit-input';
            input.setAttribute('aria-label', 'Edit todo item');

            todoItem.replaceChild(input, titleElement);
            editButton.textContent = 'Save';
            input.focus();

            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    editButton.click();
                }
            });
            return;
        }

        const inputField = todoItem.querySelector('input.edit-input');
        const newValue = inputField.value.trim();
        if (!newValue) return;

        const newTitle = document.createElement('h3');
        newTitle.textContent = newValue;
        todoItem.replaceChild(newTitle, inputField);
        editButton.textContent = 'Edit';
    }
});
