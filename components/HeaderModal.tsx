import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HeaderModal = ({ title = 'Back' }: { title?: string }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
        <Text style={styles.backText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderModal;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: Colors.textPrimary,
    marginLeft: 4,
  },
});
