// import { Button, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { useRouter } from 'expo-router';

// export default function Index() {
//   const router = useRouter();
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>index</Text>
//       <Button
//         title="Go to First Tab"
//         onPress={() => router.push('/first-tab')}
//       />
//     </View>
//   );
// };
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/first-tab');
  }, []);

  return null; 
}
