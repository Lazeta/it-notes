export const workCycle = {
    id: 530,
    title: "Цикл работы Redux",
    children: [
        {
            title: '1.Начальное состояние',
            type: 'text',
            description: `
                <p>Начальное состояние определяется в редьюсерах.</p>
            `,
            code: `
const initialState = {
    user: null,
    cart: [],
    products: []
};
            `,
        },
        {
            title: '2.Подключение store к приложению',
            type: 'text',
            description: `
                <p>Подключение store к приложению с помощью провайдера Provider из react-redux.</p>
            `,
            code: `
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
            `,
        },
        {
            title: '3.UI-компоненты читают состояние из Redux',
            type: 'text',
            description: `
                <p>UI-компоненты читают состояние из Redux с помощью useSelector или connect.</p>
            `,
            code: `
import { useSelector } from 'react-redux';

function Cart(){
    const cartItems = useSelector(state => state.cart);

    return (
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}
            `,
        },
        {
            title: '4.Пользователь взаимодействует с UI',
            type: 'text',
            description: `
                <p>Пользователь взаимодействует с UI, вызывая dispatch.</p>
            `,
            code: `
import { useDispatch } from 'react-redux';

function AddToCartButton({product}) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ 
            type: 'ADD_TO_CART', 
            payload: product
        });
    };

    return <button onClick={handleClick}>Add to Cart</button>
}
            `,
        },
        {
            title: '5.Action отправляется в store c помощью dispatch',
            type: 'text',
            description: `
                <p>Action отправляется в store с помощью dispatch.</p>
            `,
            code: `
{
  type: 'ADD_TO_CART',
  payload: { id: 1, name: 'Laptop' }
}
            `,
        },
        {
            title: '6.Middleware обрабатывает action',
            type: 'text',
            description: `
                <p>Middleware обрабатывает action, пример с redux-thunk.</p>
            `,
            code: `
const fetchProducts = () => {
    return async (dispatch) => {
        const response = await fetch ('/api/products');
        const data = await response.json();
        dispatch({ type: 'SET_PRODUCTS', payload: data });
    };
};
            `,
        },
        {
            title: '7.Редьюсер обновляет состояние',
            type: 'text',
            description: `
                <p>Редьюсер обновляет состояние.</p>
            `,
            code: `
function cartReducer(state = [], action) {
    switch(action.type){
        case 'ADD_TO_CART': return [...state, action.payload]; // создаем новый массив
        default: return state;
    }
}
            `,
        },
        {
            title: '8.Store уведомляет подписчика',
            type: 'text',
            description: `
                <p>После обновления состояния store уведомляет всех подписчиков. Компоненты перерисовываются с новыми данными.</p>
            `,
        },
        {
            title: '9.UI обновляется',
            type: 'text',
            description: `
                <p>Компоненты, которые зависят от состояния Redux, автоматически перерисовываются с новыми данными.</p>
            `,
        }
    ],
}