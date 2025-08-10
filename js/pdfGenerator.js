import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generateResumePDF = async () => {
  try {
    const element = document.getElementById('app');
    
    // 1. Получаем реальные размеры содержимого
    const width = element.scrollWidth;
    const height = element.scrollHeight;
    
    // 2. Опции для html2canvas
    const options = {
      scale: 3, // Увеличиваем качество
      dpi: 300,
      width: width,
      height: height,
      scrollX: 0,
      scrollY: 0,
      windowWidth: width,
      windowHeight: height,
      useCORS: true,
      allowTaint: true,
      logging: true,
    };

    const canvas = await html2canvas(element, options);
    
    // 3. Создаем PDF с кастомными размерами
    const pdf = new jsPDF('p', 'px', [width, height]);
    
    // 4. Добавляем изображение
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    
    // 5. Сохраняем PDF
    pdf.save('Резюме_Тимофей_Попов.pdf');
    return true;
    
  } catch (error) {
    console.error('Ошибка при генерации PDF:', error);
    return false;
  }
};