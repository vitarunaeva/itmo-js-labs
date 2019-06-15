function Cart(budget) {
  this.INITIAL_BUDGET = budget;
  this.budget = budget;
  this.amount = 0;
}

Cart.prototype.addProducts = function(amount) {
  this.amount += amount;
};

Cart.prototype.updateBudget = function(price) {
  this.budget -= price;
};

Cart.prototype.cleanCart = function() {
  this.budget = this.INITIAL_BUDGET;
  this.amount = 0;
};

const cart = new Cart(document.querySelector('.cart__budget-block').innerHTML);

$(".products__item").draggable({revert: true, revertDuration: 1000});

$('.cart__showcase').droppable({
  accept: ".products__item",
  over: function () {
    $(this).addClass('hover');
  },
  out: function () {
    $(this).removeClass('hover');
  },
  drop: function (event, ui) {
    const clonedNode = ui.draggable.clone().removeAttr('style');
    const productPrice = $(clonedNode).find('.product__price').text();

    $(this).removeClass('hover');

    if (cart.budget - productPrice < 0) {
      alert('Не хватает средств!');
      return;
    }

    $(this).append(clonedNode);

    cart.addProducts(1);
    cart.updateBudget(productPrice);

    document.querySelector('.cart__budget-block').innerHTML = cart.budget;
    document.querySelector('.cart__amount-block').innerHTML = cart.amount;
  }
});

document.querySelector('.cart__clear').addEventListener('click', function() {
  const showcase = document.querySelector('.cart__showcase');

  while(showcase.firstChild) {
    showcase.firstChild.remove();
  }

  cart.cleanCart();
  document.querySelector('.cart__budget-block').innerHTML = cart.INITIAL_BUDGET;
  document.querySelector('.cart__amount-block').innerHTML = cart.amount;
});

[].forEach.call(document.querySelectorAll('.product__add'), node => {
  node.addEventListener('click', function() {
    const product = node.parentNode;
    const productPrice = product.querySelector('.product__price').textContent;

    if (cart.budget - productPrice < 0) {
      alert('Не хватает средств!');
      return;
    }

    document.querySelector('.cart__showcase').appendChild(product.cloneNode(true));

    cart.addProducts(1);
    cart.updateBudget(productPrice);

    document.querySelector('.cart__budget-block').innerHTML = cart.budget;
    document.querySelector('.cart__amount-block').innerHTML = cart.amount;
  });
});
