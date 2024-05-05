import React from 'react';
import {StyleSheet, View, FlatList, Pressable} from 'react-native';

import {CardComponent} from '..';
import {routes, widthPixel} from '../../services';

const ListComponent = ({loading, navigation, list, screen, route, menu}) => {
  //   const renderFooter = () => {
  //     return (
  //       <View style={styles.footer}>
  //         {loading ? (
  //           <ActivityIndicator color={colors.theme} style={{margin: 15}} />
  //         ) : null}
  //       </View>
  //     );
  //   };

  //   const listEmptyHeader = () => {
  //     return (
  //       loading == false && (
  //         <View
  //           style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
  //           <Text style={styles.subtitles}>Let’s create your{'\n'}Look book</Text>
  //         </View>
  //       )
  //     );
  //   };

  return (
    <View>
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: widthPixel(2),
        }}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={list}
        key={item => item?._id}
        // refreshControl={props.refreshControl}
        // ListEmptyComponent={listEmptyHeader}
        // ListFooterComponent={renderFooter}
        // onEndReached={() => props.apiHitting()}
        onEndReachedThreshold={0.5}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() =>
              navigation.navigate(route, {screen: screen, item: item})
            }
            key={index}>
            <CardComponent
              title={item?.title}
              subTitle={item?.subTitle}
              cal={item?.cal}
              meter={item?.meter}
              location={item?.location}
              isDoc={item?.isDoc}
              menu={menu}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ListComponent;
