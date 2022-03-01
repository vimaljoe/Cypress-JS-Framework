import CategoryPage from "../../../support/pageObjects/categoryPage";

// Helper class used for reusable functions
class Helpers {
    //Function to return the UI element based on the dress option
    static summerDressItemNumber(item){
        let cart;
        switch (item.toLowerCase()){
            case 'long printed dress with thin adjustable straps' :
                cart = CategoryPage.ADD_TO_CART + '5"]';
                break;
            case 'sleeveless knee-length chiffon dress' :
                cart = CategoryPage.ADD_TO_CART + '6"]';
                break;
            case 'printed chiffon knee length dress with tank straps' :
                cart = CategoryPage.ADD_TO_CART + '7"]';
                break;
            default :
                throw new Error(`${item} is not available to choose. Please select an available item`);
        }
        return cart;
    }
}

export default Helpers