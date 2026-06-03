import { useMemo } from 'react';
import { useRDMForm } from './hooks/useRDMForm';
import { generateMarkdown } from './utils/generateMarkdown';
import { FormSection } from './components/FormSection';
import { PreviewSection } from './components/PreviewSection';
import { ClipboardList } from 'lucide-react';

function App() {
  const { formData, updateField } = useRDMForm();

  const markdown = useMemo(() => generateMarkdown(formData), [formData]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="flex items-center gap-3">
          <ClipboardList className="w-8 h-8 text-cyan-500" />
          <h1 className="text-xl font-bold text-slate-100">
            Gerador de RDM
          </h1>
        </div>
      </header>

      {/* Main Content - Two Columns (responsive: stack on mobile) */}
      <main className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
        {/* Left Column - Form */}
        <div className="w-full lg:w-1/2 lg:border-r border-slate-800 overflow-hidden">
          <FormSection formData={formData} updateField={updateField} />
        </div>

        {/* Right Column - Preview */}
        <div className="w-full lg:w-1/2 bg-slate-950 overflow-hidden border-t lg:border-t-0 border-slate-800">
          <PreviewSection markdown={markdown} />
        </div>
      </main>
    </div>
  );
}

export default App;
