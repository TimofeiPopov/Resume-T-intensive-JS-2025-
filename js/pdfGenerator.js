import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generateResumePDF = async () => {
  try {
    // 1. Находим основной контейнер с резюме
    const element = document.getElementById('app');
    
    // 2. Создаем canvas из HTML
    const canvas = await html2canvas(element, {
      scale: 2, // Увеличиваем качество
      useCORS: true, // Разрешаем кросс-доменные ресурсы
      allowTaint: true, // Разрешаем "загрязнение" canvas
      scrollY: -window.scrollY, // Фиксируем позицию скролла
    });
    
    // 3. Создаем PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    // 4. Добавляем изображение в PDF
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
    // 5. Сохраняем PDF
    pdf.save('Резюме_Тимофей_Попов.pdf');
    
    return true;
  } catch (error) {
    console.error('Ошибка при генерации PDF:', error);
    return false;
  }
};