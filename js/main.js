import '../css/style.css';
import { generateResumePDF } from './pdfGenerator.js';
import { meTextEditing } from './meEditor.js';
import { langTextEditing } from './langEditor.js';
import { expTextEditing } from './expEditor.js';
import { toolsTextEditing } from './toolsEditor.js';
import { eduTextEditing } from './eduEditor.js';
import { inteTextEditing } from './inteEditor.js';

async function loadTemplate() {
  const response = await fetch('templates/resume.html');
  const html = await response.text();
  
  document.body.insertAdjacentHTML('afterbegin', html);
  
  const template = document.getElementById('resume-template');
  const clone = template.content.cloneNode(true);
  document.querySelector('#app').appendChild(clone);

  const downloadBtn = document.getElementById('download-pdf');
  downloadBtn.addEventListener('click', async () => {
    downloadBtn.disabled = true;
    downloadBtn.textContent = 'Генерация PDF...';
    await generateResumePDF();
    downloadBtn.disabled = false;
    downloadBtn.textContent = 'Скачать PDF';
  });

  meTextEditing();
  langTextEditing();
  expTextEditing();
  toolsTextEditing();
  eduTextEditing();
  inteTextEditing();
}

document.addEventListener('DOMContentLoaded', loadTemplate);