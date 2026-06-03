import { useState } from 'react';
import { Copy, Check, FileText, Maximize2, X, Code, Eye } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MarkdownModal({ markdown, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('preview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-xl border border-slate-700 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-500" />
            Visualização do RDM
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex border-b border-slate-800">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'preview'
                ? 'text-cyan-400 border-b-2 border-cyan-500 bg-slate-800/50'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'code'
                ? 'text-cyan-400 border-b-2 border-cyan-500 bg-slate-800/50'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-4 h-4" />
            Markdown
          </button>
        </div>

        <div className="flex-1 p-4 overflow-auto">
          {activeTab === 'code' ? (
            <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap break-words leading-relaxed bg-slate-950 p-4 rounded-lg border border-slate-800">
              {markdown}
            </pre>
          ) : (
            <div className="prose prose-invert prose-slate max-w-none bg-slate-950 p-4 rounded-lg border border-slate-800">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PreviewSection({ markdown }) {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <div className="p-6 overflow-y-auto h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <FileText className="w-6 h-6 text-cyan-500" />
            Preview
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
              title="Visualizar em tela cheia"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">Visualizar</span>
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar para Jira
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-auto cursor-pointer hover:border-slate-600 transition-colors"
             onClick={() => setIsModalOpen(true)}>
          <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap break-words leading-relaxed">
            {markdown}
          </pre>
        </div>

        <div className="mt-4 text-xs text-slate-500 text-center">
          Clique no preview para visualizar em tela cheia
        </div>
      </div>

      <MarkdownModal
        markdown={markdown}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
