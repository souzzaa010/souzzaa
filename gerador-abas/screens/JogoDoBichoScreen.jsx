import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const animais = [
  { numero: 1, nome: 'Avestruz', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJL5vR4QScU7As6afOJ_yAEZqpfbWJEhKcg&s' },
  { numero: 2, nome: 'Águia', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiEOdIkKJS_I52KXj27tUpGEIG0kQV4FmZQ&s' },
  { numero: 3, nome: 'Burro', imagem: 'https://i.pinimg.com/736x/37/f2/40/37f24020d9dd8ba1bec78a95aea974da.jpg' },
  { numero: 4, nome: 'Borboleta', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cgKH_PLYTv7T04u7fgXue-zD71fgdA35WA&s' },
  { numero: 5, nome: 'Cachorro', imagem: 'https://i.pinimg.com/736x/c3/9e/d6/c39ed655e9e0dc959ce9e947921dd22e.jpg' },
  { numero: 6, nome: 'Cabra', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DwmhSyVzfZt6Br3Mpv81gBpusgizoecYUw&s' },
  { numero: 7, nome: 'Carneiro', imagem: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-ovelha-engracada_23-2151195539.jpg?semt=ais_hybrid&w=740' },
  { numero: 8, nome: 'Camelo', imagem: 'https://thumbs.dreamstime.com/b/camelo-engra%C3%A7ado-com-dentes-maus-32239820.jpg' },
  { numero: 9, nome: 'Cobra', imagem: 'https://i.pinimg.com/736x/26/88/7d/26887dad3fd56c4107a9631c38183f9f.jpg' },
  { numero: 10, nome: 'Coelho', imagem: 'https://s2-g1.glbimg.com/bU-nP4uEY6OVjfJcSExl7LRvPCU=/0x0:460x284/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/5/v/oVPf8EQnahHK33RqZZXQ/whatsapp-image-2023-10-16-at-17.21.13.jpeg' },
];

export default function JogoDoBichoScreen() {
  const [animalGerado, setAnimalGerado] = useState(null);

  const gerarAnimal = () => {
    const aleatorio = animais[Math.floor(Math.random() * animais.length)];
    setAnimalGerado(aleatorio);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrneKuD01DolenGCXMlnOpV0NkBB2a88gt1QpB97QpkBZaZLh5RKcnOzQ7SSPiDiGTpAc&usqp=CAU' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Gerador do Jogo do Bicho</Text>
        <Text style={styles.subtitulo}>Clique no botão abaixo para gerar um animal aleatório!</Text>
        <Button
          mode="contained"
          onPress={gerarAnimal}
          style={styles.botao}
          buttonColor="#6200ea"
        >
          Gerar Animal
        </Button>
        {animalGerado && (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.nome}>{animalGerado.nome}</Text>
              <Image source={{ uri: animalGerado.imagem }} style={styles.imagem} />
            </Card.Content>
          </Card>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  botao: {
    marginBottom: 20,
    width: '60%',
  },
  nome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  card: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
});