import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderedList = ({ items }) => {
  return (
    <View style={styles.listContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.itemNumber}>{index + 1}.</Text>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    // Styles for the container
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // Additional styles for each list item
  },
  itemNumber: {
    marginRight: 10,
    // Additional styles for the number
  },
  itemText: {
    // Additional styles for the text
  },
});

export default OrderedList;

// Usage example
const myListItems = ['First Item', 'Second Item', 'Third Item'];
// In your render method or functional component:
// <OrderedList items={myListItems} />
