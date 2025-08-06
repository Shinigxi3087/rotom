import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const defaultStyles = StyleSheet.create({
  pillButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  card: {
    backgroundColor: Colors.dark,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  input: {
    backgroundColor: Colors.softGrey,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
    color: Colors.dark,
  },

  textHeading: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.light,
    marginBottom: 12,
  },

  textSub: {
    fontSize: 16,
    color: Colors.grey,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.light,
    marginBottom: 12,
    textAlign: 'center',
  },

  descriptionText: {
    fontSize: 16,
    color: Colors.grey,
    textAlign: 'center',
    marginBottom: 32,
  },

  

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light,
    textAlign: 'center',
  },

  buttonTextSmall: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.dark,
  },

  

  pillButtonSmall: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.softGrey,
  },

  textLink: {
    fontSize: 16,
    color: Colors.accent,
    marginTop: 24,
    textAlign: 'center',
  },

  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginVertical: 16,
  },
});
