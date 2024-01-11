import React from 'react'
import {ChevronRight, HelpCircle} from 'lucide-react'
import './paymentcard.css'
const Paymentcard = () => {
  return (
    <div className='p-4 '>
        <div className='next-payout-container h-40 w-40'>
            <div className='next-payout'> <span className='payout-span'> Next Payout </span> <HelpCircle className=' invert grayscale w-4 h-4 pl-1'/></div>
            <div className='order-container'>
                <span>₹2,312.23</span>
                <span className=' flex align-middle order-no'>23 orders <ChevronRight className='h-6 w-6 align-middle'/></span>
            </div>
            <div className='order-date'>
                <span className='payout-date'>Next payout date:</span><span className='payout-time'>Today, 04:00PM</span>
            </div>
        </div>
    </div>
  )
}

export default Paymentcard