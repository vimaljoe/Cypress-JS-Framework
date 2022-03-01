// Cart page objects
class CartPage {
    static PROCEED_TO_CHECKOUT_BUTTON_01 = '.cart_navigation > .button > span';
    static AGREE_T_C = '[id="cgv"]';
    static PRODUCT_NAME = '.cart_description > .product-name > a';
    static TOTAL_PRICE = '#total_price';
    static CART_QUANTITY = '.cart_quantity_input';
    static USER_NAME = '#email';
    static PASSWORD = '#passwd';
    static SUBMIT_BUTTON = '#SubmitLogin > span';
    static ADD_TO_CART_BUTTON = '.exclusive > span';
    static ADD_NEW_ADDRESS_BUTTON = '.address_add > .button > span';
    static PRODUCT_COLOR_SIZE = '.cart_description > :nth-child(3) > a';
    static PRODUCT_QTY = '.cart_quantity_input';
}
export default CartPage;
