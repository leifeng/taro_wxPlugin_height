import React, { Component } from "react";
import { View, Text, Navigator } from "@tarojs/components";
import "./index.css";

export default class Index extends Component {
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Navigator url='plugin://myPlugin/list'>进入插件</Navigator>
      </View>
    );
  }
}
