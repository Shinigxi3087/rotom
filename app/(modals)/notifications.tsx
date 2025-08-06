// app/notifications.tsx
import Colors from '@/constants/Colors';
import { useFridgeStore } from '@/store/fridgeStore';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Notifications = () => {
  const router = useRouter();
  const { items } = useFridgeStore();

  const expiringSoon = items.filter((item) => {
    const diff = (new Date(item.expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    return diff <= 2;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-forward" size={28} color={Colors.textPrimary} />
        </Pressable>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {expiringSoon.length === 0 ? (
        <Text style={styles.noAlert}>🎉 Nothing expiring soon!</Text>
      ) : (
        expiringSoon.map((item, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.expiry}>Expiring on {item.expiryDate}</Text>
          </View>
        ))
      )}
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color: Colors.textPrimary,
    marginLeft: 8,
    fontWeight: '600',
  },
  noAlert: {
    color: Colors.textSecondary,
    marginTop: 50,
    fontSize: 16,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: '500',
  },
  expiry: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
});
