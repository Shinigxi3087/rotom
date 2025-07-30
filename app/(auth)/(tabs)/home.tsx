import Colors from '@/constants/Colors';
import { mockFoodItems } from '@/constants/mockData';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={styles.title}>Your Food</Text>
        <TouchableOpacity onPress={() => router.push('/(modals)/scan')}>
          <Ionicons name="scan-outline" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View> */}

      {/* Expiring Soon Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expiring Soon</Text>
        <FlatList
          data={mockFoodItems.filter(item => item.daysLeft <= 3)}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.foodCard}>
              <Image source={item.image} style={styles.foodImage} />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodExpiry}>
                  {item.daysLeft} day{item.daysLeft !== 1 ? 's' : ''} left
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* All Items Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Items</Text>
          <Link href="/(modals)/add" asChild>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={20} color="white" />
            </TouchableOpacity>
          </Link>
        </View>
        
        <FlatList
          data={mockFoodItems}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.foodCard}>
              <Image source={item.image} style={styles.foodImage} />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={[
                  styles.foodExpiry, 
                  item.daysLeft <= 3 ? styles.urgent : styles.normal
                ]}>
                  Expires in {item.daysLeft} days
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  addButton: {
    backgroundColor: Colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  foodImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  foodExpiry: {
    fontSize: 14,
  },
  urgent: {
    color: Colors.danger,
    fontWeight: '500',
  },
  normal: {
    color: Colors.gray,
  },
});