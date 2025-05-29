// Atvd que será usada para portifolio do linkedin

import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, ActivityIndicator, Text } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(res => setProdutos(res.data.products))
      .catch(() => setErro('Erro ao carregar produtos.'))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) return <ActivityIndicator animating size="large" style={{ marginTop: 50 }} />;
  if (erro) return <Text style={{ margin: 20, textAlign: 'center' }}>{erro}</Text>;

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <Card onPress={() => navigation.navigate('Detalhes', { idProduto: item.id })} style={{ marginBottom: 15 }}>
          <Card.Cover source={{ uri: item.thumbnail }} />
          <Card.Content>
            <Text variant="titleLarge">{item.title}</Text>
            <Text variant="bodyMedium">Preço: R$ {item.price}</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
}
