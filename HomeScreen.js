import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people');
      setPeople(response.data.results);
      console.log(response.data.results)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <View style={styles.container}>
      {people.map((person, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.info}>Altura: {person.height}</Text>
          <Text style={styles.info}>Peso: {person.mass}</Text>
          {/* Adicione mais informações conforme necessário */}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '80%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default HomeScreen;
