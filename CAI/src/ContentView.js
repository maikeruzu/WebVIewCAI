import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = {
    container: {
        flex: 1,
    }
};

const ContentView = () => {
    return (
        <View style={styles.container}>
            <WebView source={{uri: 'https://clarifai.com/clarifai/main' }} />
        </View>
    );
};


export default ContentView;