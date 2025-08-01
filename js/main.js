import '../css/style.css';
import { generateResumePDF } from './pdfGenerator.js';
import { meTextEditing } from './meEditor.js';
import { langTextEditing } from './langEditor.js';
import { expTextEditing } from './expEditor.js';
import { toolsTextEditing } from './toolsEditor.js';
import { eduTextEditing } from './eduEditor.js';
import { inteTextEditing } from './inteEditor.js';

// Основной HTML резюме
document.querySelector('#app').innerHTML = `
  <header class="head">
    <div class="photo"></div>
    <div class="me">
      <header>
        <p contenteditable="true" data-storage-key="greeting">Привет!👋🏻Меня зовут</p>
      </header>
      <main>
        <h2 contenteditable="true" data-storage-key="name">Тимофей Попов</h2>
      </main>
      <footer>
        <p contenteditable="true" data-storage-key="role">И я junior frontend developer!</p>
      </footer>
    </div>
    <div class="vertical-scale">
      <h2 contenteditable="true" data-storage-key="lang">Языки</h2>
      <div class="scale-item">
        <span class="scale-label" contenteditable="true" data-storage-key="eng">Английский</span>
        <div class="scale-bar-container">
          <div class="scale-bar" style="width: 70%;"></div>
        </div>
      </div>
      <div class="scale-item">
        <span class="scale-label" contenteditable="true" data-storage-key="rus">Русский</span>
        <div class="scale-bar-container">
          <div class="scale-bar" style="width: 90%;"></div>
        </div>
      </div>
    </div>
  </header>

  <main class="exp-and-tools">
    <div class="exp">
      <h2 contenteditable="true" data-storage-key="myExp">Мой опыт</h2>
      <div class="desc">
        <div class="first">
          <h3 class="name" contenteditable="true" data-storage-key="jsNameList">JavaScript</h3>
          <ul class="list">
            <li contenteditable="true" data-storage-key="pet">Создание pet-проектов</li>
            <li contenteditable="true" data-storage-key="integ">Интеграция js скриптов в html</li>
          </ul>
        </div>
        <div class="second">
          <h3 class="name" contenteditable="true" data-storage-key="kot">Mobile Kotlin</h3>
          <ul class="list">
            <li contenteditable="true" data-storage-key="petCreate">Создание pet-проектов</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tools">
      <h2 contenteditable="true" data-storage-key="stack">Стэк</h2>
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
      <h2 contenteditable="true" data-storage-key="edu">Образование</h2>
      <div class="cont">
        <div class="uni">
          <h3 contenteditable="true" data-storage-key="years">2024-2028</h3>
          <h3 contenteditable="true" data-storage-key="uni">СПБГЭУ</h3>
          <p contenteditable="true" data-storage-key="inf">Информационные системы и технологии</p>
          <p contenteditable="true" data-storage-key="ba">Бакалавриат</p>
        </div>      
        <div class="t-edu">
          <h3 contenteditable="true" data-storage-key="summ">Лето 2025</h3>
          <h3 contenteditable="true" data-storage-key="int">Т-интенсив</h3>
          <p contenteditable="true" data-storage-key="jsTwenty">JavaScript 2025</p>
          <p contenteditable="true" data-storage-key="backFront">backend- и frontend-разработка</p>
        </div>      
      </div>
    </div>
    <div class="intr">
      <h2 contenteditable="true" data-storage-key="inter">Интересы</h2>
      <div class="my-intr">
        <div contenteditable="true" data-storage-key="front">Frontend</div>
        <div contenteditable="true" data-storage-key="back">Backend</div>
        <div contenteditable="true" data-storage-key="git">Git</div>
        <div contenteditable="true" data-storage-key="ai">AI</div>
        <div contenteditable="true" data-storage-key="ui">UI/UX</div>
        <div contenteditable="true" data-storage-key="dev">Developing</div>
        <div contenteditable="true" data-storage-key="self">Self-education</div>
      </div>
    </div>
  </footer>
  <div class="pdf-download-container">
    <button id="download-pdf" class="download-btn">Скачать PDF</button>
  </div>    
`;

const downloadBtn = document.getElementById('download-pdf');

downloadBtn.addEventListener('click', async () => {
  downloadBtn.disabled = true;
  downloadBtn.textContent = 'Генерация PDF...';

  await generateResumePDF();

  downloadBtn.disabled = false;
  downloadBtn.textContent = 'Скачать PDF';
});

document.addEventListener('DOMContentLoaded', () => {
  meTextEditing();
  langTextEditing();
  expTextEditing();
  toolsTextEditing();
  eduTextEditing();
  inteTextEditing();
});
