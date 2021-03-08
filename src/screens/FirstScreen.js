import React from 'react';
import { Button, View } from 'react-native';

const FirstScreen= ({navigation}) =>(<View>
    <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('Second')}
      />
</View>);

export default FirstScreen;