import React, {
  Component,
} from 'react';
import { connect } from 'react-redux';
import { searchStocks, addStocks  } from '../actions';

import { Sparklines, SparklinesLine }from 'react-sparklines';

class StockGraph extends Component {
  render() {
const prices = this.props.tracked.map(price =>     <div> <h3>{price.name}</h3><Sparklines  key={price.name} data={price.prices}   >
    <SparklinesLine color="green" />
</Sparklines>
</div>
)


    return (
      <div id="graph">

          <h1>Graphs!!</h1>

          {prices}

      </div>
    );
  }

}
function mapStateToProps(state){
    return{
        friends: state.friends,
        tracked: state.tracked
    };

}
export default connect(mapStateToProps, null)(StockGraph);
