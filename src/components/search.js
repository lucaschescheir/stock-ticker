import React, {
  Component,
} from 'react';
import StockGraph from './stock_graphs'
import { connect } from 'react-redux';
import { searchStocks, addStocks  } from '../actions';
class Search extends Component {
    constructor( props ) {
            super( props )

        }

        handleChange(ev){

            this.props.searchStocks(ev.target.value)


            }

  render() {
      console.log(this.props.tracked)
const stocksList = this.props.stocks.map(stock =>{
    return <li  key={stock.name}><p>{stock.name}</p><p onClick={()=>this.props.addStocks(stock.ticker)}>{stock.ticker}</p></li>
})
    return (
      <div>

          <input
              placeholder="Search for stocks by ticker"

              onChange={(e)=> this.handleChange(e)}
          />

          <ul id="list">
              {stocksList}
          </ul>
          
          <StockGraph />
      </div>
    );
  }

}
function mapStateToProps(state){
    return{
        stocks: state.stocks,
        tracked: state.tracked
    };

}
function mapDispatchToProps(dispatch){
    return {
        searchStocks: function(term){
            fetch(`https://young-plains-68972.herokuapp.com/api/autocomplete?q=${term}`)
            .then(resp => resp.json())
            .then(response =>{
                const action = searchStocks(response);
                dispatch(action);
            })
        },
        addStocks: function (ticker) {
            fetch(`https://young-plains-68972.herokuapp.com/api/companies/${ticker}`)
            .then(resp => resp.json())
            .then(response => {

                const action = addStocks(response);
                dispatch(action)
            })

        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
