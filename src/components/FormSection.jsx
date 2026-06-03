import { InputField } from './InputField';
import { RadioGroup } from './RadioGroup';

const yesNoOptions = [
  { value: 'nao', label: 'Não' },
  { value: 'sim', label: 'Sim' }
];

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function FormSection({ formData, updateField }) {
  return (
    <div className="p-6 overflow-y-auto h-full">
      <Section title="Visão geral">
        <InputField
          label="Objetivo da demanda"
          name="objetivo"
          value={formData.objetivo}
          onChange={(value) => updateField('objetivo', value)}
          placeholder="Qual o objetivo desta demanda?"
        />

        <InputField
          label="Resumo da mudança"
          name="resumo"
          type="textarea"
          rows={2}
          value={formData.resumo}
          onChange={(value) => updateField('resumo', value)}
          placeholder="Descreva brevemente o que será alterado"
        />

        <InputField
          label="Responsáveis (analista e tribo/squad)"
          name="responsaveis"
          value={formData.responsaveis}
          onChange={(value) => updateField('responsaveis', value)}
          placeholder="Ex: Nome - Tribo/Squad"
        />
      </Section>

      <Section title="Escopo">
        <RadioGroup
          label="Existe fábrica envolvida?"
          name="fabrica"
          value={formData.fabrica}
          onChange={(value) => updateField('fabrica', value)}
          options={yesNoOptions}
        />

        {formData.fabrica === 'sim' && (
          <InputField
            label="Detalhes da fábrica"
            name="fabrica_det"
            type="textarea"
            rows={2}
            value={formData.fabrica_det}
            onChange={(value) => updateField('fabrica_det', value)}
            placeholder="Descreva a fábrica envolvida"
          />
        )}

        <RadioGroup
          label="Existem RDMs relacionadas?"
          name="rdmrel"
          value={formData.rdmrel}
          onChange={(value) => updateField('rdmrel', value)}
          options={yesNoOptions}
        />

        {formData.rdmrel === 'sim' && (
          <InputField
            label="RDMs relacionadas"
            name="rdmrel_det"
            type="textarea"
            rows={2}
            value={formData.rdmrel_det}
            onChange={(value) => updateField('rdmrel_det', value)}
            placeholder="Liste as RDMs relacionadas"
          />
        )}

        <RadioGroup
          label="Existe integração?"
          name="integracao"
          value={formData.integracao}
          onChange={(value) => updateField('integracao', value)}
          options={yesNoOptions}
        />

        {formData.integracao === 'sim' && (
          <InputField
            label="Sistemas/integrações impactados"
            name="sistemas"
            value={formData.sistemas}
            onChange={(value) => updateField('sistemas', value)}
            placeholder="Liste os sistemas integrados"
          />
        )}
      </Section>

      <Section title="Impacto técnico">
        <InputField
          label="Objetos alterados (XML, classes, etc)"
          name="objetos"
          type="textarea"
          rows={2}
          value={formData.objetos}
          onChange={(value) => updateField('objetos', value)}
          placeholder="Liste os arquivos e classes modificados"
          hint="Informe o caminho completo a partir da raiz do projeto. Ex: src/main/java/br/com/empresa/modulo/Classe.java"
        />

        <InputField
          label="Fluxos/processos impactados"
          name="fluxos"
          type="textarea"
          rows={2}
          value={formData.fluxos}
          onChange={(value) => updateField('fluxos', value)}
          placeholder="Liste os fluxos afetados"
        />

        <RadioGroup
          label="Impacto em telas?"
          name="telas"
          value={formData.telas}
          onChange={(value) => updateField('telas', value)}
          options={yesNoOptions}
        />

        {formData.telas === 'sim' && (
          <InputField
            label="Detalhes do impacto em telas"
            name="telas_det"
            type="textarea"
            rows={2}
            value={formData.telas_det}
            onChange={(value) => updateField('telas_det', value)}
            placeholder="Descreva as alterações visuais"
          />
        )}

        <RadioGroup
          label="Commits/PRs relacionados?"
          name="prs"
          value={formData.prs}
          onChange={(value) => updateField('prs', value)}
          options={yesNoOptions}
        />

        {formData.prs === 'sim' && (
          <InputField
            label="Commits/PRs"
            name="prs_det"
            type="textarea"
            rows={2}
            value={formData.prs_det}
            onChange={(value) => updateField('prs_det', value)}
            placeholder="URLs ou IDs dos commits"
          />
        )}

        <RadioGroup
          label="Feature toggle ou parâmetro existe?"
          name="has_toggle"
          value={formData.has_toggle}
          onChange={(value) => updateField('has_toggle', value)}
          options={yesNoOptions}
        />

        {formData.has_toggle === 'sim' && (
          <InputField
            label="Feature toggle / parâmetro"
            name="toggle"
            value={formData.toggle}
            onChange={(value) => updateField('toggle', value)}
            placeholder="Nome e valor do parâmetro"
          />
        )}
      </Section>

      <Section title="Operação e riscos">
        <RadioGroup
          label="Existe risco técnico?"
          name="risco"
          value={formData.risco}
          onChange={(value) => updateField('risco', value)}
          options={yesNoOptions}
        />

        {formData.risco === 'sim' && (
          <InputField
            label="Detalhes dos riscos"
            name="risco_det"
            type="textarea"
            rows={2}
            value={formData.risco_det}
            onChange={(value) => updateField('risco_det', value)}
            placeholder="Descreva os riscos identificados"
          />
        )}

        <InputField
          label="Instruções de rollback/operação"
          name="rollback"
          type="textarea"
          rows={2}
          value={formData.rollback}
          onChange={(value) => updateField('rollback', value)}
          placeholder="Como reverter ou operar esta mudança"
        />
      </Section>
    </div>
  );
}
