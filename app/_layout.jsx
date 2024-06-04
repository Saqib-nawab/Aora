import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'


const RootlLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootlLayout

const styles = StyleSheet.create({})