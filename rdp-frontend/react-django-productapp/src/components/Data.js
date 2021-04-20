import apple from '../assets/imgs/apple-logo.svg'
import realme from '../assets/imgs/realme-logo.png'
import mi from '../assets/imgs/mi-logo.png'


const data = {
    products: [
        {id: '1',
        title: 'iPhone XR',
        brand: 'Apple',
        price: 100000,
        description: "Some Random Info about the Product",
        instock: true,
        image: apple
    },
    {id: '2',
        title: 'Realme Narzo',
        brand: 'Realme',
        price: 20000,
        description: "Some Random Info about the Product",
        instock: true,
        image: realme
    },
    {id: '3',
        title: 'Mi 10',
        brand: 'REDMI',
        price: 24000,
        description: "Some Random Info about the Product",
        instock: true,
        image: mi
    },
    ]
}

export default data;