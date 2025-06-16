import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput, Button, Text, RadioButton, TouchableRipple } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { tarefaSchema } from '../utils/validations';
import { useNavigation, useRoute } from '@react-navigation/native';
import { maskDate, maskTime } from '../utils/masks';
import { salvarTarefa } from '../services/storage';


export default function TaskFormScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const tarefaParaEditar = route.params?.task;

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(tarefaSchema),
    defaultValues: {
      titulo: '',
      descricao: '',
      data: '',
      hora: '',
      prioridade: '',
    },
  });

  useEffect(() => {
    if (tarefaParaEditar) {
      Object.entries(tarefaParaEditar).forEach(([key, value]) => {
        setValue(key, value);
      });
    } else {
      reset();
    }
  }, [tarefaParaEditar]);

  const onSubmit = async (data) => {
    try {
      await salvarTarefa({ ...data, id: tarefaParaEditar?.id });
      navigation.goBack();
    } catch (e) {
      console.error('Erro ao salvar:', e);
    }
  };
  

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Controller
        control={control}
        name="titulo"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Título"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            error={!!errors.titulo}
          />
        )}
      />
      {errors.titulo && <Text style={{ color: 'red' }}>{errors.titulo.message}</Text>}

      <Controller
        control={control}
        name="descricao"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Descrição"
            mode="outlined"
            multiline
            value={value}
            onChangeText={onChange}
            error={!!errors.descricao}
            style={{ marginTop: 8 }}
          />
        )}
      />
      {errors.descricao && <Text style={{ color: 'red' }}>{errors.descricao.message}</Text>}

      <Controller
        control={control}
        name="data"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Data (DD/MM/AAAA)"
            mode="outlined"
            value={value}
            onChangeText={(text) => onChange(maskDate(text))}
            error={!!errors.data}
            style={{ marginTop: 8 }}
            keyboardType="numeric"
          />
        )}
      />
      {errors.data && <Text style={{ color: 'red' }}>{errors.data.message}</Text>}

      <Controller
        control={control}
        name="hora"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Hora (HH:MM)"
            mode="outlined"
            value={value}
            onChangeText={(text) => onChange(maskTime(text))}
            error={!!errors.hora}
            style={{ marginTop: 8 }}
            keyboardType="numeric"
          />
        )}
      />
      {errors.hora && <Text style={{ color: 'red' }}>{errors.hora.message}</Text>}

      <Text style={{ marginTop: 12, marginBottom: 4 }}>Prioridade:</Text>
      <Controller
        control={control}
        name="prioridade"
        render={({ field: { onChange, value } }) => (
          <RadioButton.Group onValueChange={onChange} value={value}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
              {['Alta', 'Média', 'Baixa'].map((option) => (
                <TouchableRipple key={option} onPress={() => onChange(option)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 12 }}>
                    <RadioButton value={option} />
                    <Text>{option}</Text>
                  </View>
                </TouchableRipple>
              ))}
            </View>
          </RadioButton.Group>
        )}
      />
      {errors.prioridade && <Text style={{ color: 'red' }}>{errors.prioridade.message}</Text>}

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ marginTop: 20 }}
      >
        Salvar Tarefa
      </Button>
    </ScrollView>
  );
}
