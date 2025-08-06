import Colors from '@/constants/Colors';
import { useFridgeStore } from '@/store/fridgeStore';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Dashboard = () => {
  const { items } = useFridgeStore();
  const router = useRouter();
  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const expiringSoon = items.filter((item) => {
    const daysLeft = (new Date(item.expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    return daysLeft <= 2;
  });

  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <ScrollView style={styles.container}>
      {/* Greeting */}
      <Text style={styles.greeting}>{greeting}</Text>
      <Text style={styles.subtitle}>Here’s your fridge summary:</Text>

      {/* Summary Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Items</Text>
          <Text style={styles.cardNumber}>{items.length}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Expiring Soon</Text>
          <Text style={styles.cardNumber}>{expiringSoon.length}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Categories</Text>
          <Text style={styles.cardNumber}>{categories.length}</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn} onPress={() => router.push('/add')}>
          <Ionicons name="add-circle-outline" size={20} color={Colors.accent} />
          <Text style={styles.actionText}>Add Item</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn} onPress={() => router.push('/expiring')}>
          <Ionicons name="alert-circle-outline" size={20} color={Colors.yellow} />
          <Text style={styles.actionText}>View Expiring</Text>
        </TouchableOpacity>
      </View>

      {/* Expiring Soon Preview */}
      <Text style={styles.sectionTitle}>Expiring Soon</Text>
      <FlatList
        horizontal
        data={expiringSoon}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.expiringCard}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.expiryText}>Expires: {item.expiryDate}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    paddingTop: 140,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    padding: 16,
    borderRadius: 12,
  },
  cardTitle: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparentWhite,
    padding: 12,
    borderRadius: 10,
  },
  actionText: {
    color: Colors.textPrimary,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  expiringCard: {
    backgroundColor: Colors.cardBackground,
    padding: 12,
    borderRadius: 10,
    minWidth: 140,
  },
  itemName: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 16,
  },
  expiryText: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
});
