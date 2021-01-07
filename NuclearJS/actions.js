import shop from '../../common/api/shop';
import reactor from './reactor';
import {
  RECIEVE_PRODUCTS,
  ADD_TO_CART,
  CHECKOUT_START,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILED,
} from './actionTypes';

export default {
  fetchProducts() {
    shop.getProducts(products => {
      reactor.dispatch(RECIEVE_PRODUCTS, { products });
    });
  },

  addToCart(products) {
    reactor.dispatch(ADD_TO_CART, { product });
  },
};
