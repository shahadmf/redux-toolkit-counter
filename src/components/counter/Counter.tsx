import { decrement, increment, reset} from './counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const Counter = () =>{
    const count = useSelector((state: RootState) => state.counterR.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }
    const handleReset = () => {
        dispatch(reset());
    }


    return (
        <div>
           <h1>Count: {count}</h1>
           <button onClick={handleIncrement}>Increment</button> 
           <button onClick={handleReset}>Reset</button> 
           <button onClick={handleDecrement}>Decrement</button> 
        </div>
    )
}

export default Counter;