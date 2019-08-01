import React, { Fragment } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class Tarefa extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.item}>
        <Text style={styles.itemText}>{this.props.val.tarefa}</Text>
        <Text style={styles.itemText}>{this.props.val.data}</Text>
        <Text style={styles.itemText}>{this.props.val.descricao}</Text>
        <TouchableOpacity
          onPress={this.props.remover}
          style={styles.itemRemover}
        >
          <Text style={styles.itemRemoverText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  itemText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#00BFFF"
  },
  itemRemover: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
    paddingLeft: 5
  },
  itemRemoverText: {
    color: "white"
  },
  itemAlterar: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 45,
    paddingRight: 5
  },
  itemAlterarText: {
    color: "white"
  }
});
