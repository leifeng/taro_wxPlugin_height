import React, { useEffect } from "react";
import { $ } from "@tarojs/extend";
import { View } from "@tarojs/components";
import { useReady } from "@tarojs/taro";
import { uuid } from "../../utils";
import "./listItem.css";

interface IListItem {
  name: string;
  value: string;
}

function ListItem({ name, value }: IListItem) {
  const id = uuid(5);
  async function getHeight() {
    try {
      const height = await $("#" + id).height();
      console.log(height);
    } catch (error) {
      console.error(error);
    }
  }

  //这种方式不行
  useReady(() => {
    getHeight();
  });

  //这种方式也不行
  // useEffect(() => {
  //   setTimeout(() => {
  //     getHeight();
  //   }, 500);
  // }, []);

  return (
    <View>
      <View>name: {name}</View>
      <View id={id} style={{ backgroundColor: "#dedede" }}>
        要获取这个#{id}元素高度-----{value}
      </View>
    </View>
  );
}
export default ListItem;
