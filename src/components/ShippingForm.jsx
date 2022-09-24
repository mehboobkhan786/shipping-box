import React, {useState} from 'react'



function ShippingForm(props) {
    const [title, setTitle] = useState("");
    const [weight, setweight] = useState("");
    const [color, setcolor] = useState("");
    const [place, setplace] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data={
            title: title,
            weight: weight,
            color: color,
            place: place,
        }
        props.addToListCallback(data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>ShippingForm</h3>
                <input type="text" value={title} placeholder="Title" onChange={(e) =>setTitle(e.target.value)} /><br></br>
                <input type="number" value={weight} placeholder="weight" onChange={(e) =>setweight(e.target.value)} /><br></br>
                <label>Color</label><br></br>
                <input type="color" value={color} placeholder="color" onChange={(e) =>setcolor(e.target.value)}  /><br></br>
                <input type="text" value={place} placeholder="place" onChange={(e) =>setplace(e.target.value)} /><br></br>


                <button>Submit</button>
            </form>
           
        </div>
    )

}

export default ShippingForm