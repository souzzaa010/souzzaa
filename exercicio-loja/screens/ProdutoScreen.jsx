// Atvd que será usada para portifolio do linkedin

import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Card, ActivityIndicator, Text } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(res => setProduto(res.data))
      .catch(() => setErro('Erro ao carregar o produto.'))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) return <ActivityIndicator animating size="large" style={{ marginTop: 50 }} />;
  if (erro) return <Text style={{ margin: 20, textAlign: 'center' }}>{erro}</Text>;

  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      <Card>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Text variant="titleLarge">{produto.title}</Text>
          <Text variant="bodyMedium" style={{ marginVertical: 8 }}>{produto.description}</Text>
          <Text variant="bodyMedium">Preço: R$ {produto.price}</Text>
          <Text variant="bodyMedium">Marca: {produto.brand}</Text>
          <Text variant="bodyMedium">Categoria: {produto.category}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
