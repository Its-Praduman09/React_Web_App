import React,{createRef} from 'react'

class RefExample extends React.Component {
    constructor()
    {
        super()
        this.inputRef=createRef();
    }
    componentDidMount()
    {
        console.warn(this.inputRef.current.value="1000")
    }
    getVal()
    {
        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color="red"
        this.inputRef.current.style.backgroundColor="pink"

    }
 render()
 {
    return (
        <>
        <h1>This is Ref Example</h1>
        <input type="text" ref={this.inputRef}/><br/><br/>
        <button onClick={()=>this.getVal()}>Check Ref</button>
        </>
      )
 }
}

export default RefExample