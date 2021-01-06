import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class SearchBar extends React.Component{

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value)
  }
  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.checked)
  }
  

  render(){
    return (
      <div>
        <input type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Enter..." />
        <p>
          <input type="checkbox"  onChange={this.handleInStockChange} />
          only show product in stock
        </p>
      </div>
    )
  }
}


class ProductCategoryRow extends React.Component{
  render(){
    return(
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    )
  }
}
class ProductRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.product.stocked ? this.props.product.name : <span style={{color: "red"}}>{this.props.product.name}</span>}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}

class ProductTable extends React.Component{
  render(){

    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;


    const rows =[]
    let lastCategory = null
    this.props.products.forEach((product)=>{
      if(product.name.indexOf(filterText) === -1){
        return;
      }
      if(inStockOnly && !product.stocked){
        return;
      }
      if(product.category != lastCategory){
        rows.push(
          <ProductCategoryRow category={product.category} />
        )
      }
      rows.push(
        <ProductRow product={product} />
      )
      lastCategory = product.category
    })
    return(
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

class FilterableProductTable extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      filterText: '',
      inStockOnly: false
    }
  }
  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    })
  }
  handleInStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  render(){
    return(
      <div>
        <SearchBar 
          filterText={this.state.filterText} 
          inStockOnly={this.state.inStockOnly} 
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange = {this.handleInStockChange}
        />
        <ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} products={this.props.products}/>
      </div>
    )
  }
}







ReactDOM.render(
  <React.StrictMode>
    <FilterableProductTable products={PRODUCTS}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
