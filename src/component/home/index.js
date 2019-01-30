import React, { Component } from 'react'
import Commmon from '../../public/common.js'
class Home extends Component {
    componentDidMount(){
        Commmon.replaceParamVal('id','yinyin');
        let arr = new Array(1)
        console.log(Commmon.isArray(arr))
    }
  render() {
    return (
      <div>
        <p>替换URL指定参数</p> 
        <p>判断对象是否属于数组</p>
      </div>
    )
  }
}
export default Home