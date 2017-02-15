import React,{Component,PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Winner extends React.Component{
    constructor(props){
       super(props);
       this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
   }
	render(){
		return <div className="winners">Winner is {this.props.winner} !</div>
	}
}
Winner.propTypes = {
  winner: PropTypes.string
}
