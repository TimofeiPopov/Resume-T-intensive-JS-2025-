export function langTextEditing() {
  // Оригинальные тексты для каждого поля
  const defaultTexts = {
    lang: 'Языки',
    eng: 'Английский',
    rus: 'Русский',
  };

  // Элементы с указанием их ключей
  const editableElements = [
    { el: document.querySelector('[data-storage-key="lang"]'), key: 'lang' },
    { el: document.querySelector('[data-storage-key="eng"]'), key: 'eng' },
    { el: document.querySelector('[data-storage-key="rus"]'), key: 'rus' },
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
