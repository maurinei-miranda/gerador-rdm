import { useState } from 'react';

const initialState = {
  objetivo: '',
  resumo: '',
  responsaveis: '',
  fabrica: 'nao',
  fabrica_det: '',
  rdmrel: 'nao',
  rdmrel_det: '',
  integracao: 'nao',
  sistemas: '',
  objetos: '',
  fluxos: '',
  telas: 'nao',
  telas_det: '',
  prs: 'nao',
  prs_det: '',
  has_toggle: 'nao',
  toggle: '',
  risco: 'nao',
  risco_det: '',
  rollback: ''
};

export function useRDMForm() {
  const [formData, setFormData] = useState(initialState);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    updateField,
    resetForm
  };
}
