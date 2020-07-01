const cart = document.querySelector('#cart')
const checkout = document.querySelector('#checkout')
const cart_container = document.querySelector('#cart-container')

const cart_content = `<table class="table table-borderless">
<thead>
    <tr>
        <th scope="col">Product</th>
        <th scope="col">Title</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><img src="./assets/cart1.png" alt=""></td>
        <td class="font-weight-bold">Green Tea</td>
        <td>
            <div class="paginate">
                <p>-</p>
                <p>2</p>
                <p>+</p>
            </div>
        </td>
        <td>$10.00</td>
        <td><img src="./assets/close.png" alt=""></td>
    </tr>
    <tr>
        <td><img src="./assets/cart2.png" alt=""></td>
        <td class="font-weight-bold">Sore Capsule</td>
        <td>
            <div class="paginate">
                <p>-</p>
                <p>2</p>
                <p>+</p>
            </div>
        </td>
        <td>$85.00</td>
        <td><img src="./assets/close.png" alt=""></td>
    </tr>
    <tr>
        <td><img src="./assets/cart3.png" alt=""></td>
        <td class="font-weight-bold">Jamieson</td>
        <td>
            <div class="paginate">
                <p>-</p>
                <p>2</p>
                <p>+</p>
            </div>
        </td>
        <td>$75.00</td>
        <td><img src="./assets/close.png" alt=""></td>
    </tr>
    <tr>
        <td><img src="./assets/cart4.png" alt=""></td>
        <td class="font-weight-bold">Cough and Cold</td>
        <td>
            <div class="paginate">
                <p>-</p>
                <p>2</p>
                <p>+</p>
            </div>
        </td>
        <td>$50.00</td>
        <td><img src="./assets/close.png" alt=""></td>
    </tr>
</tbody>
</table>`

const checkout_content = `<section class="container contact mb-5">
<form>
    <div class="form-row">
        <div class="col-12 col-md-6">
            <div class="form-group px-lg-3">
                <select class="form-control" id="exampleFormControlSelect2">
                    <option>Cart Type</option>
                    <option>Card 1</option>
                    <option>Card 2</option>
                    <option>Card 3</option>
                </select>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="form-group px-lg-3">
                <input type="text" class="form-control" placeholder="Card Number">
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="form-group px-lg-3">
                <input type="text" class="form-control" placeholder="Card Name">
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="form-group px-lg-3">
                <input type="text" class="form-control px-auto" placeholder="XX/XX">
            </div>
        </div>
        <div class="col-6 col-md-3">
            <div class="form-group px-lg-3">
                <input type="text" class="form-control" placeholder="XXX">
            </div>
        </div>
        <div class="col-12">
            <div class="form-group px-lg-3">
                <textarea name="" id="" cols="30" rows="5" placeholder="Delivery Address"
                    class="form-control"></textarea>
            </div>
        </div>
        <div class="mx-auto">
            <div class="form-group">
                <div class="btn btn-primary">Checkout</div>
            </div>
        </div>
    </div>
</form>
</section>`

cart_container.innerHTML = cart_content

checkout.addEventListener('click', () => { 
    cart_container.innerHTML = checkout_content; 
    checkout.style.borderColor = "#0146C0"; 
    cart.style.borderColor = "#D6D6D6" 
})

cart.addEventListener('click', () => { 
    cart_container.innerHTML = cart_content; 
    cart.style.borderColor = "#0146C0"; 
    checkout.style.borderColor = "#D6D6D6" 
})
