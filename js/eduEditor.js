export function eduTextEditing() {
  // Оригинальные тексты для каждого поля
  const defaultTexts = {
    edu: 'Образование',
    years: '2024-2028',
    uni: 'СПБГЭУ',
    inf: 'Информационные системы и технологии',
    ba: 'Бакалавриат',
    summ: 'Лето 2025',
    int: 'Т-интенсив',
    jsTwenty: 'JavaScript 2025',
    backFront: 'backend- и frontend-разработка',
  };

  // Элементы с указанием их ключей
  const editableElements = [
    { el: document.querySelector('[data-storage-key="edu"]'), key: 'edu' },
    { el: document.querySelector('[data-storage-key="years"]'), key: 'years' },
    { el: document.querySelector('[data-storage-key="uni"]'), key: 'uni' },
    { el: document.querySelector('[data-storage-key="inf"]'), key: 'inf' },
    { el: document.querySelector('[data-storage-key="ba"]'), key: 'ba' },
    { el: document.querySelector('[data-storage-key="summ"]'), key: 'summ' },
    { el: document.querySelector('[data-storage-key="int"]'), key: 'int' },
    { el: document.querySelector('[data-storage-key="jsTwenty"]'), key: 'jsTwenty' },
    { el: document.querySelector('[data-storage-key="backFront"]'), key: 'backFront' },
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
