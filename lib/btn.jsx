// 按钮
var ToggleButton=React.createClass({
  // 样式属性
  style:{
    backgroundColor:{this.state.open? 'red':'blue'}
    width:'150px',
    height:'50px',
    borderRadius:'10px'
  },
  getInitialState:function () {
    return {open:false};
  },
  handleClick:function (event) {
    this.setState({open:!this.state.open});
  },
  render:function() {
    return (
      <div style={this.style} onClick={this.handleClick}>
        <span>{this.props.componentName}<span>
      <div>
    );
  }
});
