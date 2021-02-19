import React, { PureComponent } from "react";
import { StyleSheet, View, Text, Image, I18nManager } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";

class AuthLogin extends PureComponent {
  state = {
    isLoading: false,
    isSecurePassword: true,
    email: '',
    password: ''
  }

  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = ({ netInfo, user }) => ({ netInfo, user });


export default connect(mapStateToProps, null)(AuthLogin);
