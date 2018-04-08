import React from 'react';
import ImageWrapper from '../components/ImageWrapper';
import './NewPage.less'

export default class NewPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ImageWrapper
        src={"https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"}
        desc={"示意图"}
      />
    )
  }
}
