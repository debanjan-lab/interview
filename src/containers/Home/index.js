import React, { PureComponent, Component } from "react";
import { StyleSheet, View, Text, Image, I18nManager, Pressable, ActivityIndicator } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
class Home extends PureComponent {

  state = {
    loading: false,
    list: [],
  }



  componentDidMount() {

  }



  render() {
    const { loading } = this.state;

    if (loading) return null
    return (
      <View>


      </View>
    );
  }
}

const mapStateToProps = ({ netInfo, user }) => ({ netInfo, user });


export default connect(
  mapStateToProps,
  null
)(Home);
