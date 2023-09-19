import { useState } from "react";

function ShoppingItem() {
    const [count, setCount] = useState(0);

    const handleAdd=()=>{
        setCount(count + 1);
    }
    
    const handleRemove=()=>{
        setCount(count - 1)
        
    }

    return (
        <div style={{
            display:'flex',
             marginLeft:'35%', 
             marginTop:'18%', 
             backgroundColor:'yellow', 
             padding:'20px', 
             width:'350px',
             borderRadius:'20px',}}>
            <div>
                <img src="https://picsum.photos/500" alt="Product" style={{ width: '130px' }} />
            </div>
            <div style={{marginLeft:'15px', marginBottom:'1em'}}>
                <h2 style={{color:'brown'}}>Shopping Items</h2>
                <h3 style={{color: count<4?'red':'black'}}>{count>10?"Out of stock!":count + " items added to the cart"}</h3>
                <div>
                    <button onClick={handleAdd} style={{
                        backgroundColor: count>10?'lightgray':'green',
                        border:'none', 
                        color:'white'}} disabled={count>10?true:false}>Add</button>
                    <button onClick={handleRemove} style={{
                        marginLeft:'10px', 
                        backgroundColor: count===0?'lightgray':'red', 
                        border:'none', 
                        color:'white'}} disabled={count===0?true:false}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingItem;