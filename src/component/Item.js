import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { Brand_Name, Product_name, Quantity, MRP, Offer_Text, Price, selected_quantity, Image_URL, itemChangeHandler, item, index } = this.props;
        return (
            <div>
                <div className="p-card">
                   <div className="product-view">
                       <img style={{ width: "150px"}}  src={Image_URL} />
                        <h3>{Offer_Text}</h3>
                    </div>
                    <div  className="items">
                        <h3 className="para brand">{Brand_Name}</h3>
                        <p className="para">{Product_name}</p>
                        <p className="para">{Quantity}</p>
                        <p className="para">MRP  {MRP}</p>
                        <p className="para"><b>RS  {Price}</b></p>
                        {selected_quantity == 0 ?
                            <button className="btn" onClick={() => itemChangeHandler(item, index, 1)}>ADD CARD</button>
                            : 
                            <div className="add-delete-button">
                                <button className="inc-dec-button1" onClick={() => itemChangeHandler(item, index, 0)}>-</button>
                                <h3 className="quantity">{item.selected_quantity}</h3>
                                
                                <button className="inc-dec-button" onClick={() => itemChangeHandler(item, index, 1)}>+</button>
                            </div>
                        } 
                    </div>
                    
                    
                   
                </div>
            <div className="hr"></div>
            </div>
              
        );
    }
}

export default Item;