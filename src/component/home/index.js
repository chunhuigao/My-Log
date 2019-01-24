import React, { Component } from 'react'
import Commmon from '../../public/common.js'
class Home extends Component {
    componentDidMount(){
        Commmon.replaceParamVal('id','yinyin')
    }
  render() {
    return (
      <div>
        替换URL指定参数
      </div>
    )
  }
}
export default Home