const updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtns.length; i++) {
    updateBtn[i].addEventListener('click', function () {
        const productID = this.dateset.productID
        const action = this.dataset.action
        if (user === "AnonymousUser") {
            console.log('user not logged in')

        } else {
            updateUserOrder(productID, action)
        }
    })
}

function updateUserOrder(productID, action) {
    console.log('user looged in, succes add')
    const url = '/update_item/'
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': csrftoken
        },
        body: JSON.stringify({ 'productID': productID, 'action': action })
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log('data', data)
            location.reload()
        })
}