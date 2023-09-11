import {StyleSheet} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  item: {
    backgroundColor: '#F8F8FF',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  img: {
    backgroundColor: 'red',
    flex: 1,
  },
  text: {
    paddingVertical: 8,
    alignSelf: 'center',
    color: 'rgba(255, 255, 255, 0.75))',
    fontSize: 18,
    fontWeight: '700',
  },
  list: {
    padding: 8,
    rowGap: 16,
  },
  columnWrapperStyle: {
    columnGap: 16,
  },
  pagination_y: {
    position: 'absolute',
    bottom: 230,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  button: {
    padding: 11,
    // backgroundColor: 'red',
  },
});
