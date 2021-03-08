import React from 'react';
import { Button, View } from 'react-native';

const SecondScreen= ({navigation}) =>(<View>
    <Button
        title="Go to Third Screen"
        onPress={() => navigation.navigate('Third')}
      />
</View>);

export default SecondScreen;