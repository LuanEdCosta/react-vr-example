import React from 'react'
import { asset, Pano, Text, View } from 'react-vr'

const App = () => {
  return (
    <View>
      <Pano source={asset('chess-world.jpg')} />
      <Text
        onEnter={() => {
          console.log('asdasd')
        }}
        style={{
          backgroundColor: '#f411a2',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{ translate: [0, 0, -4] }],
        }}
      >
        Front
      </Text>

      <Text
        style={{
          backgroundColor: '#a111a2',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.4,
          paddingRight: 0.4,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{ translate: [-3, 0, -4] }],
        }}
      >
        Left
      </Text>
    </View>
  )
}

export default App
