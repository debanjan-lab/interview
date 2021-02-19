import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, AppState } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from "react-redux";

const App = (props) => {
  const [active, setActive] = useState(true);

  useEffect(() => {

  });


  return (
    <>
      {
        appLoader
          ? <View style={[Styles.Common.ColumnCenter, { flex: 1 }]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          :
          <NavigationContainer>
            {
              props.user.token
                ?
                <AppStackNavigator />
                :
                <AuthStackNavigator />
            }
          </NavigationContainer>
      }

    </>
  );
}

const mapStateToProps = ({ netInfo, user, settings }) => ({ netInfo, user, settings });
export default connect(mapStateToProps, null)(App);
