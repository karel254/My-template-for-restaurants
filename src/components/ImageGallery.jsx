import React from "react"
import Gallery1 from '../utilis/img/Lemonade.jpg'
import Gallery2 from '../utilis/img/Protein-special.jpg'
import Gallery3 from '../utilis/img/saladmeal.jpg'
import Gallery4 from '../utilis/img/sushidisp.jpg'
import Gallery5 from '../utilis/img/breakfast.jpg'
import Gallery6 from '../utilis/img/pancakes.jpg'




export function ImageGallery(){
 return(
    <div className='container py-5'>
        <h2 className='text-center fs-1 mb-5 text-uppercase fw-bold'>Image Gallery</h2>
        <div className="row">
            <div className='col-md-4 px-2'>
             <div className="my-3">
                <img src={Gallery1} className="img-fluid"
                alt=""/>
             </div>
             <div className="my-3">
                <img src={Gallery2} className="img-fluid"
                alt=""/>
             </div>
             
            </div> 
            <div className='col-md-4 px-2'>
             <div className="my-3">
                <img src={Gallery3} className="img-fluid"
                alt=""/>
             </div>
             <div className="my-3">
                <img src={Gallery4} className="img-fluid"
                alt=""/>
             </div>
             
            </div> 
            <div className='col-md-4 px-2'>
             <div className="my-3">
                <img src={Gallery5} className="img-fluid"
                alt=""/>
             </div>
             <div className="my-3">
                <img src={Gallery6} className="img-fluid"
                alt=""/>
             </div>
             
             
            </div> 

            
        </div>
    </div>
 )






}