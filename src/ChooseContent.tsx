import React from 'react'
import { View, TouchableHighlight, StyleSheet, SafeAreaView, FlatList, Text, StatusBar, Button } from 'react-native'
import { thesaurus } from './pageIndex'


const Item = (props) => {
    const handleTouchItem = (id) => {
        props.navigation.navigate('ShowContent', {id})
    }
    return (
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => handleTouchItem(props.id)}>
            <View style={styles.wrapper}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.item}>
                        {props.title}
                        {/* <Button onPress={() => props.navigation.navigate('ShowContent')} title="开始" /> */}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}
interface Navigation {
    navigate: (name: string) => void
}

interface Props {
    navigation: Navigation
}


const ChooseContent: React.FC<Props> = (props) => {
    const renderItem = ({ item }) => (
        <Item navigation={props.navigation} id={item.id} title={item.label} />
    )
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList data={thesaurus} renderItem={renderItem} keyExtractor={item => item.id} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    wrapper: {
        justifyContent: 'center'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 26
        // backgroundColor: ''
    },

})

export default ChooseContent