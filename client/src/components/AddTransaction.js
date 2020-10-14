import React ,{useState , useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'
export const AddTransaction = () => {

    const [text ,setText] = useState('');
    const [amount ,setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e=>{
        e.preventDefault()

        const newTransaction={
            id: Math.floor(Math.random() * 100000),
            text,
            amount : +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor='text'>Text</label>
                    <input type="text" value={text} placeholder="Enter Text.." onChange={(e)=>setText(e.target.value)} />
                </div>

                <div className="form-control">
                    <label htmlFor='amount'>Amount <br/> (negative-expense , positive-income) </label>

                    <input type="number" placeholder="Enter Amount.." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <button className="btn"type="submit" >Add Transaction</button>


            </form>
        </div>
    )
}
