function shoppingListHandler() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault()
    const shoppingItem = $('.js-shopping-list-entry').val()
    $('.shopping-list').prepend(`
    <li>
      <span class="shopping-item">${shoppingItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
    `)
    $('.js-shopping-list-entry').val('')
  })

  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    const shoppingItem = $(this).closest("li").find('.shopping-item')
    shoppingItem.toggleClass('shopping-item__checked')
  })
}

shoppingListHandler();
