# Gerador de RDM - React

Projeto React para geração de CHECKLIST para RDM (Request for Data Modification) com preview em tempo real.

## Funcionalidades

- **Layout duas colunas**: Formulário à esquerda, preview markdown à direita
- **Preview em tempo real**: O markdown atualiza conforme você digita
- **Tema escuro**: Interface moderna com tema dark
- **Cópia rápida**: Botão para copiar direto para o Jira
- **Responsivo**: Funciona em desktop (2 colunas) e mobile (1 coluna)

## Estrutura

```
src/
├── components/
│   ├── FormSection.jsx      # Formulário com todos os campos
│   ├── PreviewSection.jsx   # Preview do markdown
│   ├── InputField.jsx       # Input/textarea reutilizável
│   └── RadioGroup.jsx       # Radio buttons
├── hooks/
│   └── useRDMForm.js        # Gerenciamento de estado
├── utils/
│   └── generateMarkdown.js  # Geração do template
├── App.jsx                  # Layout principal
└── main.jsx                 # Entry point
```

## Como usar

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Campos do Formulário

- Objetivo da Demanda
- Resumo da Mudança
- Fábrica envolvida (condicional)
- RDMs relacionadas (condicional)
- Integrações/Sistemas impactados
- Objetos alterados (XML, Classes)
- Fluxos/Processos impactados
- Impacto em telas (condicional)
- Commits/PRs (condicional)
- Feature Toggle/Parâmetros (condicional)
- Riscos técnicos (condicional)
- Instruções de Rollback

## Tecnologias

- React 19
- Vite 5
- Tailwind CSS 3
- Lucide Icons
