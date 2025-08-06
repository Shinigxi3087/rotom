import HeaderModal from '@/components/HeaderModal';
import Colors from '@/constants/Colors';
import { Text, View } from 'react-native';

const Account = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <HeaderModal title="Back" />
      <View style={{ padding: 20 }}>
        <Text style={{ color: Colors.textPrimary, fontSize: 18 }}>
          This is your account screen.
        </Text>
      </View>
    </View>
  );
};

export default Account;
