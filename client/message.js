const messageData = () => {
  fetch('http:/alluser')
    .then((response) => response.json())
    .then((data) => {
      let ui = document.getElementById('alluserapi');
      for (var i = 0; i < data.length; i++) {
        let li = `<li class="active" >
    <div class="d-flex bd-highlight" >
        <div class="img_cont">
            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                class="rounded-circle user_img">
            <span class="online_icon"></span>
        </div>

        <div class="user_info">
            <span class="list-name" >${data[i].Name}</span>
            <p>Kalid is online</p>
        </div>
    </div>
</li>`;
        ui.insertAdjacentHTML('beforeend', li);
      }
    });
};

// Sokect Part
const socket = io('http://localhost:3000');
  
socket.emit('newuser', 'raj');    








