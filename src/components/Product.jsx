import React from 'react'
import styles, {layout} from '../style';
import { bill, apple,google} from '../assets/images'


const {sectionReverse,sectionInfo, sectionImgReverse}  = layout;
const {heading2, paragraph} = styles;

const Product = () => {
  return (
   <section id="product" className={sectionReverse}>
    <div className={sectionImgReverse}>
        <img src={bill} alt="" className='w-[100%] h-[100%] relative z-[5]' />
    </div>
    <div className={sectionInfo}>
      <h2 className={heading2}>Easily Control your <br className='sm:block hidden'/>
       billing & invoicing</h2>
       <p className={`${paragraph} max-w-[470px] mt-5`}>
       Easily control your billing and invoicing with our comprehensive system. Our intuitive platform allows you to manage all of your billing and invoicing needs in one convenient location. From generating invoices to tracking payments, our system makes it easy for you to keep track of your financial transactions.
       </p>
       <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple store" a className='sm:w-[128px] sm:h-[42px] w-[100px] object-contain sm:mr-5 cursor-pointer'/>
          <img src={google} alt="google play" className='sm:w-[128px] sm:h-[42px] w-[100px] object-contain cursor-pointer'/>
       </div>
    </div>
    </section>
  )
}

export default Product