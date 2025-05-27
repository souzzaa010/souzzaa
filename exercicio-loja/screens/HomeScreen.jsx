// Atvd que será usada para portifolio do linkedin

import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { List, ActivityIndicator, Text } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list')
      .then(res => setCategorias(res.data))
      .catch(() => setErro('Erro ao carregar categorias.'))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) return <ActivityIndicator animating size="large" style={{ marginTop: 50 }} />;
  if (erro) return <Text style={{ margin: 20, textAlign: 'center' }}>{erro}</Text>;

  return (
    <View>
      <FlatList
        data={categorias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item}
            onPress={() => navigation.navigate('Produtos', { categoria: item })}
            left={props => <List.Icon {...props} icon="folder" />}
            titleStyle={{ textTransform: 'capitalize' }}
          />
        )}
      />
    </View>
  );
}
