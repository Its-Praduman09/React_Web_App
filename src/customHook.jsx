
import useCounter from './useCounter';

function CustomHook() {
    const [count,Increment,Decrement]=useCounter();
    return(
      <>
      <h2>Count = {count}</h2><br/>
      <button style={{backgroundColor:"green",color:"white"}} onClick={Increment}>Increment</button>&nbsp;&nbsp;&nbsp;
      <button style={{backgroundColor:"green",color:"white"}} onClick={Decrement}>Decrement</button>
      </>
    );
}

export default CustomHook