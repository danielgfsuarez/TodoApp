import React, { Fragment } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";

import Tarefa from "./Tarefa";

export default class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefaArray: [],
      tarefaText: "",
      descricaoText: "",
      dataText: ""
    };
  }

  render() {
    let tarefas = this.state.tarefaArray.map((val, key) => {
      return <Tarefa
          key={key}
          keyval={key}
          val={val}
          remover={() => this.removerTarefa(key)}
          alterar={() => this.alterarTarefa(key)}
        />
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ToDo App</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {tarefas}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={tarefaText => this.setState({ tarefaText })}
            value={this.state.tarefaText}
            placeholder="Tarefa"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        {/* <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={dataText => this.setState({ dataText })}
            value={this.state.dataText}
            placeholder="Data"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View> */}
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={descricaoText => this.setState({ descricaoText })}
            value={this.state.descricaoText}
            placeholder="Descricao"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          onPress={this.addTarefa.bind(this)}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addTarefa = () => {
    if (this.state.tarefaText) {
      let d = new Date();
      this.state.tarefaArray.push({
        data: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(), //this.state.dataText,
        tarefa: this.state.tarefaText,
        descricao: this.state.descricaoText
      });
      this.setState({ tarefaArray: this.state.tarefaArray });
      this.setState({ tarefaText: "" });
      this.setState({ descricaoText: "" });
    }
  };

  removerTarefa = key => {
    this.state.tarefaArray.splice(key, 1);
    this.setState({ tarefaArray: this.state.tarefaArray });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    //position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 150,
    backgroundColor: "#00BFFF",
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 30
  }
});
