import React from 'react'
import './Menu.css'
import {Card, CardBody, CardText, CardTitle} from 'react-bootstrap'
import BreakfastImg from '../utilis/img/breakfast.jpg'
import LunchImg from '../utilis/img/lunch.jpg'
import DinnerImg from '../utilis/img/tablesetdine1.jpg'
import dessertImg from '../utilis/img/saladmeal.jpg'

const breakfast =[
   {
   id:1,
   name: 'English Breakfast',
   description:'smoked bacon, sausage, tomato,eggs',
   price:'Ksh 2450'
   },

   {
    id:2,
    name: 'Eggroll',
    description:'veggies,tomato,eggs',
    price:'Ksh 1350'
   },

    {
        id:3,
        name: 'Sushi',
        description:'seasoned aqua fish, tomato',
        price:'Ksh 750'
    }
]

const lunch=[
    {
        id:1,
        name: 'Maric Salad',
        description:'hot wings, chicken breast, tomato',
        price:'Ksh 3150'
        },
     
        {
         id:2,
         name: 'Fries special',
         description:'French fries, deep fried chicken',
         price:'Ksh 1050'
        },
     
         {
             id:3,
             name: 'Pizza',
             description:'chicken, mushrooms, mexican salami',
             price:'Ksh 850'
         }

]

const dinner=[
    {
        id:1,
        name: 'Family Diet',
        description:'avocado, barbecue, veggies, seasoned beef, rice',
        price:'Ksh 3550'
        },
     
        {
         id:2,
         name: 'Fries special',
         description:'French fries, deep fried chicken',
         price:'Ksh 1950'
        },
     
         {
             id:3,
             name: 'Burrito',
             description:'cheese, potatoes, pork',
             price:'Ksh 1850'
         }

]

const dessert=[
    {
        id:1,
        name: 'Chocolate Cake',
        description:'flour, sugar,chocolate,',
        price:'Ksh 1150'
        },
     
        {
         id:2,
         name: 'Cinammon Rolls',
         description:'cinnamon, onions, spiced cream',
         price:'Ksh 650'
        },
     
         {
             id:3,
             name: 'Pancakes',
             description:'soya milk, flour, sugar',
             price:'Ksh 550'
         }
]



function Menu() {
  return (
    <div className='menu-page'>
 <header className='mt 5'>
    <div className='container h-100 d-flex align-items-center justify-content-center'>
        <h1 className='text-light'>Menu</h1>
    </div>
    </header>     

<div className='breakfast my-5'>
    <div className='container'>
        <h2 className='text-center fs-1 mb-4 mb-lg-5b text-uppercase fw-bold text-success'>Breakfast</h2>
        <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
                <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
                {breakfast.map((breakfast)=>(
                    <div key={breakfast.id}>
                        <Card className='border-0'>
                            <CardBody>
                                <CardTitle className='text-center fs-3'>{breakfast.name}</CardTitle>
                                <CardText className='text-center fs5'>{breakfast.description}</CardText>
                                <CardText className='text-center fs3 fw-bold text-success'>{breakfast.price}</CardText>
                            </CardBody>
                        </Card>

                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

<div className='lunch bg-dark my-5'>
    <div className='container'>
        <h2 className='text-center fs-1 mb-4 mb-lg-5b text-uppercase fw-bold text-success'>Lunch</h2>
        <div className='row'>
        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                {lunch.map((lunch)=>(
                    <div key={lunch.id}>
                        <Card className='border-0 bg-dark text-light'>
                            <CardBody>
                                <CardTitle className='text-center fs-3'>{lunch.name}</CardTitle>
                                <CardText className='text-center fs5'>{lunch.description}</CardText>
                                <CardText className='text-center fs3 fw-bold text-success'>{lunch.price}</CardText>
                            </CardBody>
                        </Card>

                    </div>
                ))}
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
                <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>
            </div>
           
        </div>
    </div>
</div>

<div className='dinner my-5'>
    <div className='container'>
        <h2 className='text-center fs-1 mb-4 mb-lg-5b text-uppercase fw-bold text-success'>Dinner</h2>
        <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
                <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
                {dinner.map((dinner)=>(
                    <div key={dinner.id}>
                        <Card className='border-0'>
                            <CardBody>
                                <CardTitle className='text-center fs-3'>{dinner.name}</CardTitle>
                                <CardText className='text-center fs5'>{dinner.description}</CardText>
                                <CardText className='text-center fs3 fw-bold text-success'>{dinner.price}</CardText>
                            </CardBody>
                        </Card>

                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

  <div className='dessert bg-dark my-5'>
    <div className='container'>
        <h2 className='text-center fs-1 mb-4 mb-lg-5b text-uppercase fw-bold text-success'>Dessert</h2>
        <div className='row'>
        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                {dessert.map((dessert)=>(
                    <div key={dessert.id}>
                        <Card className='border-0 bg-dark text-light'>
                            <CardBody>
                                <CardTitle className='text-center fs-3'>{dessert.name}</CardTitle>
                                <CardText className='text-center fs5'>{dessert.description}</CardText>
                                <CardText className='text-center fs3 fw-bold text-success'>{dessert.price}</CardText>
                            </CardBody>
                        </Card>

                    </div>
                ))}
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
                <img src={dessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>
            </div>
           
        </div>
    </div>
</div>
</div>
    
  )
}

export default Menu
