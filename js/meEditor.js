export function meTextEditing() {
  // Оригинальные тексты для каждого поля
  const defaultTexts = {
    greeting: 'Привет!👋🏻Меня зовут',
    name: 'Тимофей Попов',
    role: 'И я junior frontend developer!',
  };

  // Элементы с указанием их ключей
  const editableElements = [
    { el: document.querySelector('[data-storage-key="greeting"]'), key: 'greeting' },
    { el: document.querySelector('[data-storage-key="name"]'), key: 'name' },
    { el: document.querySelector('[data-storage-key="role"]'), key: 'role' },
  ];

  // Загрузка сохраненных данных
  editableElements.forEach(({ el, key }) => {
    const savedText = localStorage.getItem(`resume_${key}`);
    el.textContent = savedText || defaultTexts[key];
  });

  // Сохранение при потере фокуса
  document.addEventListener(
    'blur',
    (e) => {
      if (e.target.hasAttribute('contenteditable')) {
        const key = e.target.dataset.storageKey;
        localStorage.setItem(`resume_${key}`, e.target.textContent);
      }
    },
    true
  );

  // Обработка Enter
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.hasAttribute('contenteditable')) {
      e.preventDefault();
      e.target.blur();
    }
  });
}
