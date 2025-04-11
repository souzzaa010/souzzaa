import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text, Card, Title, Paragraph } from 'react-native-paper';

const products = [
  {
    id: 1,
    name: 'Camiseta Chave',
    description: 'Camiseta de algodão 100% orgânico, confortável e estilosa.',
    price: 'R$ 199,90',
    image: 'https://via.placeholder.com/300x200.png?text=Camiseta',
  },
  {
    id: 2,
    name: 'Tênis Esportivo',
    description: 'Tênis leve e confortável para todas as ocasiões.',
    price: 'R$ 399,90',
    image: 'https://via.placeholder.com/300x200.png?text=Tênis',
  },
  {
    id: 3,
    name: 'Relógio Chave',
    description: 'Relógio digital com pulseira de silicone e cronômetro.',
    price: 'R$ 1889,90',
    image: 'https://via.placeholder.com/300x200.png?text=Relógio',
  },
];

export default function App() {
  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Loja Virtual</Text>

        {products.map((product) => (
          <Card key={product.id} style={styles.card}>
            <Card.Cover source={{ uri: product.image }} style={styles.cardImage} />
            <Card.Content>
              <Title style={styles.productTitle}>{product.name}</Title>
              <Paragraph style={styles.productDesc}>{product.description}</Paragraph>
              <Paragraph style={styles.productPrice}>{product.price}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f2f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    elevation: 3,
    overflow: 'hidden',
  },
  cardImage: {
    height: 180,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  productDesc: {
    color: '#555',
    fontSize: 14,
    marginBottom: 8,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#27ae60',
  },
});