import React, { Component } from 'react'
import { View } from '@tarojs/components'
import ListItem from '../../components/listItem/listItem'
import './list.css'

export default class Index extends Component {
  state = {
    list: [{
      name: 'A',
      value: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
    }, {
      name: 'B',
      value: '测试测试测试测试测试测试测试测试测'
    }, {
      name: 'C',
      value: '测试测试测试'
    }]
  }

  render () {
    return (
      <View>
        {this.state.list.map(item => {
          return <ListItem name={item.name} value={item.value} key={item.name} />
        })}
      </View>
    )
  }
}
