import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

function History({ route }) {
  const { history } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.operation}</Text>}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={<Text style={styles.emptyComponent}>No data</Text>}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
  listItem: {
    textAlign: 'center',
    fontSize: 20,
  },
  emptyComponent: {
    textAlign: 'center',
  },
  itemSeparator: {
    height: 1,
    backgroundColor: 'blue',
    width: '100%',
  },
});

export default History;