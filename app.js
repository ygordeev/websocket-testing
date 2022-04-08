const stompClient = Stomp.client('ws://localhost:3000');

const connectCallback = () => console.log('Success');

const errorCallback = error => console.error('Error', error.headers.message);

stompClient.connect('', '', connectCallback);
stompClient.connect('', '', connectCallback, errorCallback);
