import * as yup from 'yup';

export const tarefaSchema = yup.object().shape({
  titulo: yup.string().required('Título é obrigatório'),
  descricao: yup.string().required('Descrição é obrigatória'),
  data: yup.string().required('Data é obrigatória'),
  hora: yup.string().required('Hora é obrigatória'),
  prioridade: yup.string().required('Selecione a prioridade'),
});