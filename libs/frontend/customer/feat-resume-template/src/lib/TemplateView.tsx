import ReactPDF, { PDFViewer } from '@react-pdf/renderer';

export function TemplateView({
  children,
}: {
  children: ReactPDF.PDFViewerProps['children'];
}) {
  return (
    <PDFViewer width="100%" height="700px" showToolbar={false}>
      {children}
    </PDFViewer>
  );
}
