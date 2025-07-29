import '../css/style.css';
import { setupCounter } from './counter.js';
import { generateResumePDF } from './pdfGenerator.js';

// Добавляем кнопку скачивания
document.querySelector('#app').innerHTML = `
  <div class="download-container">
    <button id="download-pdf" class="download-btn">Скачать PDF</button>
  </div>
  ${document.querySelector('#app').innerHTML}
`;

// Назначаем обработчик клика
document.getElementById('download-pdf').addEventListener('click', async () => {
  const button = document.getElementById('download-pdf');
  button.disabled = true;
  button.textContent = 'Генерация PDF...';
  
  await generateResumePDF();
  
  button.disabled = false;
  button.textContent = 'Скачать PDF';
});

document.querySelector('#app').innerHTML = `
  <header class="head">
    <div class="photo">
    </div>
    <div class="me">
      <header>
        <p>Привет!👋🏻Меня зовут</p>
      </header>
      <main>
        <h2>Тимофей Попов</h2>
      </main>
      <footer>
        <p>И я junior frontend developer!</p>
      </footer>
    </div>

    <div class="vertical-scale">
      <h2>Языки</h2>
      
      <div class="scale-item">
        <span class="scale-label">Английский</span>
        <div class="scale-bar-container">
          <div class="scale-bar" style="width: 70%;"></div>
        </div>
      </div>
      
      <div class="scale-item">
        <span class="scale-label">Русский</span>
        <div class="scale-bar-container">
          <div class="scale-bar" style="width: 90%;"></div>
        </div>
      </div>
    </div>
  </header>

  <main class="exp-and-tools">
    <div class="exp">
      <h2>Мой опыт</h2>
      <div class="desc">
        <div class="first">
          <h3 class="name">JavaScript</h3>
            <ul class="list">
              <li>Создание pet-проектов</li>
              <li>Интеграция js скриптов в html</li>
            </ul>
        </div>
        <div class="second">
            <h3 class="name">Mobile Kotlin</h3>
              <ul class="list">
                <li>Создание pet-проектов</li>
              </ul>
        </div>
      </div>
    </div>
    <div class="tools">
      <h2>Стэк</h2>
      <div class="stack">
          <div class="code">
                <div class="htmlLogo"></div>
                <div class="js"></div>
                <div class="vs"></div>
                <div class="git"></div>
          </div>
          <div class="design">
                <div class="figma"></div>
                <div class="meet"></div>
          </div>
      </div>
    </div>
  </main>

  <footer class="end">
    <div class="edu">
      <h2>Образование</h2>
      <div class="cont">
        <div class="uni">
          <h3>2024-2028</h3>
          <h3>СПБГЭУ</h3>
          <p>Информационные системы и технологии</p>
          <p>Бакалавриат</p>
        </div>      
        <div class="t-edu">
          <h3>Лето 2025</h3>
          <h3>Т-интенсив</h3>
          <p>JavaScript 2025</p>
          <p>backend- и frontend-разработка</P>
        </div>      
      </div>
    </div>
    <div class="intr">
      <h2>Интересы</h2>
      <div class="my-intr">
        <div>Frontend</div>
        <div>Backend</div>
        <div>Git</div>
        <div>AI</div>
        <div>UI/UX</div>
        <div>Developing</div>
        <div>Self-education</div>
      </div>
    </div>
  </footer>
`

setupCounter(document.querySelector('#counter'))