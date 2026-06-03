const markNoYes = (val) => val === 'nao' ? '(X) Não ( ) Sim' : '( ) Não (X) Sim';

export function generateMarkdown(data) {
  const integracaoLinha = data.integracao === 'sim'
    ? `Existe integração? ${markNoYes('sim')} -> Externo: ${data.sistemas}`
    : `Existe integração? ${markNoYes('nao')}`;

  const toggleBloco = data.has_toggle === 'sim'
    ? `*PARÂMETROS / FEATURE TOGGLE* – Existe? ${markNoYes('sim')}
${data.toggle}`
    : `*PARÂMETROS / FEATURE TOGGLE* – Existe? ${markNoYes('nao')}`;

  const fabricaBloco = data.fabrica === 'sim' && data.fabrica_det ? `\n${data.fabrica_det}` : '';
  const rdmrelBloco = data.rdmrel === 'sim' && data.rdmrel_det ? `\n${data.rdmrel_det}` : '';
  const telasBloco = data.telas === 'sim' && data.telas_det ? `\n${data.telas_det}` : '';
  const prsBloco = data.prs === 'sim' && data.prs_det ? `\n${data.prs_det}` : '';
  const riscoBloco = data.risco === 'sim' && data.risco_det ? `\n${data.risco_det}` : '';

  return `*CONTEXTO DA DEMANDA* – Qual é o objetivo da demanda? 
${data.objetivo}
---
*RESUMO DA MUDANÇA* – Qual é o resumo da mudança? 
${data.resumo}

---
*RESPONSÁVEIS* – Analista responsável e tribo/squad
${data.responsaveis}

---
*EXISTE FÁBRICA ENVOLVIDA?* ${markNoYes(data.fabrica)}${fabricaBloco}

---
*RDMs / RELACIONAMENTOS* – Existem RDMs relacionadas? ${markNoYes(data.rdmrel)}${rdmrelBloco}

---
*SISTEMAS E INTEGRAÇÕES* – Sistemas impactados
${integracaoLinha}

---
*IMPACTO TÉCNICO* – Objetos alterados (classes, funções, jobs, etc.) 
${data.objetos}

---
*FLUXOS/PROCESSOS IMPACTADOS*
${data.fluxos}

---
*IMPACTO EM TELAS?* ${markNoYes(data.telas)}${telasBloco}

---
*CÓDIGO E VERSIONAMENTO* – Commits/PRs relacionados? ${markNoYes(data.prs)}${prsBloco}

---
${toggleBloco}

---
*RISCOS, OPERAÇÃO E ROLLBACK* – Existe risco técnico? ${markNoYes(data.risco)}${riscoBloco}

---
*ORIENTAÇÕES PARA OPERAÇÃO, SUSTENTAÇÃO OU ROLLBACK*
${data.rollback}`;
}
