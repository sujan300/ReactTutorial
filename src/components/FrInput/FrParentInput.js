import React ,{Component} from 'react'
import FrInput from './FrInput'

class FrParentInput extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef();
    }
    onClickHandler = () =>{
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
          <FrInput ref={this.inputRef} />
          <button onClick={this.onClickHandler}>Submit</button>
      </div>
    )
  }
}

export default FrParentInput