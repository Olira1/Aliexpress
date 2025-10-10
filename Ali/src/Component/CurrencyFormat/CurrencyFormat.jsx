import React from 'react'
import numeral from 'numeral'

function CurrencyFormat({amount}) {
    var formatedAmount = numeral(amount).format('$0,0.0');
  return (
    <div>
        {formatedAmount}
    </div>
  )
}

export default CurrencyFormat