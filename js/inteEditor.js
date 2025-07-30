export function inteTextEditing() {
  // Оригинальные тексты для каждого поля
  const defaultTexts = {
    inter: 'Интересы',
    front: 'Frontend',
    back: 'Backend',
    git: 'Git',
    ai: 'AI',
    ui: 'UI/UX',
    dev: 'Developing',
    self: 'Self-education',
  };

  // Элементы с указанием их ключей
  const editableElements = [
    { el: document.querySelector('[data-storage-key="inter"]'), key: 'inter' },
    { el: document.querySelector('[data-storage-key="front"]'), key: 'front' },
    { el: document.querySelector('[data-storage-key="back"]'), key: 'back' },
    { el: document.querySelector('[data-storage-key="git"]'), key: 'git' },
    { el: document.querySelector('[data-storage-key="ai"]'), key: 'ai' },
    { el: document.querySelector('[data-storage-key="ui"]'), key: 'ui' },
    { el: document.querySelector('[data-storage-key="dev"]'), key: 'dev' },
    { el: document.querySelector('[data-storage-key="self"]'), key: 'self' },
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
