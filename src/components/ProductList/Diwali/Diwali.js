import React from 'react'
import './Diwali.css'

const DiwaliListItems = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/51UHoxzInpL._AC_SY200_.jpg'
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/61iJg9WsI6L._AC_SY200_.jpg'
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/51Cbhe5-UeL._AC_SY200_.jpg'
  },
  {
    id: 4,
    img: 'https://m.media-amazon.com/images/I/818kmzObgCL._AC_SY200_.jpg'
  },
  {
    id: 5,
    img: 'https://m.media-amazon.com/images/I/61eEetcCb9L._AC_SY200_.jpg'
  },
  {
    id: 6,
    img: 'https://m.media-amazon.com/images/I/41PnIUzyYML._AC_SY200_.jpg'
  },
  {
    id: 7,
    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg'
  },
  {
    id: 8,
    img: 'https://m.media-amazon.com/images/I/61A7cQevTDL._AC_SY200_.jpg'
  }
]

function Diwali() {
  return (
    <div className='diwali-container'>
      <div className='diwali-inner-container'>
      <div className='diwali-header'>Diwali Decor</div>
      <div className='diwali-product-list'>
        {
          DiwaliListItems.map(DiwaliListItems => {
            return(
              <div className='diwali-product-item'>
                <img src={DiwaliListItems.img} width={250} height={250}/>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Diwali