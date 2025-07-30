export function expTextEditing() {
  // Оригинальные тексты для каждого поля
  const defaultTexts = {
    myExp: 'Мой опыт',
    jsNameList: 'JavaScript',
    pet: 'Создание pet-проектов',
    integ: 'Интеграция js скриптов в html',
    kot: 'Mobile Kotlin',
    petCreate: 'Создание pet-проектов',
  };

  // Элементы с указанием их ключей
  const editableElements = [
    { el: document.querySelector('[data-storage-key="myExp"]'), key: 'myExp' },
    { el: document.querySelector('[data-storage-key="jsNameList"]'), key: 'jsNameList' },
    { el: document.querySelector('[data-storage-key="pet"]'), key: 'pet' },
    { el: document.querySelector('[data-storage-key="integ"]'), key: 'integ' },
    { el: document.querySelector('[data-storage-key="kot"]'), key: 'kot' },
    { el: document.querySelector('[data-storage-key="petCreate"]'), key: 'petCreate' },
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
