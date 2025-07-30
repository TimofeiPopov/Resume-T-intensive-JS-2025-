import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generateResumePDF = async () => {
  try {
    const element = document.getElementById('app');

    // Опции для мобильных устройств
    const isMobile = window.innerWidth <= 768;
    const options = {
      scale: isMobile ? 1 : 2,
      scrollY: isMobile ? -window.scrollY : 0,
      windowHeight: isMobile ? element.scrollHeight : window.innerHeight,
      useCORS: true,
      allowTaint: true,
      logging: true,
    };

    const canvas = await html2canvas(element, options);

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // Для мобильных - растягиваем на несколько страниц
    if (isMobile) {
      let heightLeft = pdfHeight;
      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight() - 20;

      while (heightLeft >= 0) {
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;

        if (heightLeft > 0) {
          pdf.addPage();
        }
      }
    } else {
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save('Резюме_Тимофей_Попов.pdf');

    return true;
  } catch (error) {
    console.error('Ошибка при генерации PDF:', error);
    return false;
  }
};
