document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('customerName').value;
    const messageElement = document.getElementById('formMessage');

    messageElement.textContent = شكراً لك يا ${name}، تم استلام طلبك بنجاح وسيتواصل معك صيدلي من صيدلية د / اسراء بقشيش خلال دقائق.;

    this.reset();
});