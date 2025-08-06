import Colors from '@/constants/Colors';
import { useFridgeStore } from '@/store/fridgeStore';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomHeader = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { items } = useFridgeStore();

  const expiringSoon = items.filter((item) => {
    const diff = (new Date(item.expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    return diff <= 2;
  });

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      <View style={styles.topRow}>
        {/* App Title */}
        <Text style={styles.title}>Rotom</Text>

        {/* Right Side Icons */}
        <View style={styles.iconGroup}>
          {/* Notification Bell */}
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <View style={styles.notification}>
              <Ionicons name="notifications-outline" size={24} color={Colors.textPrimary} />
              {expiringSoon.length > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{expiringSoon.length}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          {/* Avatar */}
          <Link href="/modals/account" asChild>
            <TouchableOpacity style={styles.circle}>
              <Text style={styles.circleText}>SK</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.accent,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  notification: {
    position: 'relative',
    padding: 2,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -4,
    backgroundColor: Colors.red,
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginTop: 10,
  },
  subtext: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
});
