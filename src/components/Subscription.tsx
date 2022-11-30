import Link from 'next/link';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const Subscription = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 
  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit(onSubmit)} className=' w-full m-auto py-10 mt-10 px-10 border'>
        <div className = 'flex-col flex-wrap m-4'>
          <div className ='flex mb-3'>
            <div>     
              <label>Subscriptions</label>
              <input type="search" placeholder="Add Customer" {...register("customer", {})} className='input input-bordered input-info w-full max-w-xs' />
            </div>
          </div>
          <div className = 'flex mb-4'> 
            <div>
              <label>Product</label>
              <input type="search" placeholder="Product" {...register("product", {})} className='input input-bordered input-info w-full max-w-xs' />
              <Link href='/Product'>
                <a className ='link'>Add Product</a>
              </Link>
            </div>
            <div>
              <label>Quantity</label>
              <input type="text" placeholder="Quantity" {...register('quantity', {
                max: 99,
                min: 1
              })} className='input input-bordered input-info w-full max-w-xs' />
            </div>
            <div className = 'm-auto'>
              20
            </div>
          </div>
          <div className='flex-col mb-4'>
            <div>
              <label className="cursor-pointer">
                <input type="checkbox" placeholder="chargeOnFile" {...register("chargeOnFile", {})} className="checkbox"/>
                <span className="ml-4">Automatically charge payment method on file</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer ">       
                <input type="checkbox" placeholder="emailInvoice" {...register("emailInvoice", {})} className="checkbox"/>
                <span className="ml-4">Email invoice to the customer for manual copy</span>
              </label>
            </div>
          </div>
          <div>
            <label>How many days of free Trial?</label>
            <input type="range" min="0" max="100" value="40" className="range" {...register} />
          </div>
          <div className = 'mb-4'>
            <label>
              Start Date
            </label>
            <input type="date" {...register('startDate', {})} className='input bg-white text-black ml-2'/>
          </div>
          <div className = 'mb-4'>
            <label>
              End Date
            </label>
            <input type="date" {...register('endDate', {}) } className='input bg-white text-black ml-2'/>
          </div>
          <div className = 'flex mb-4'>
            <div >
              <label>Memo</label>
              <textarea {...register("memo", {})} className ='text-black'/>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Create Subscription</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Subscription