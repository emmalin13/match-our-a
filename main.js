var button=$("button")
var input=$("input")

button.on("click", appendInfo)

function appendInfo(){
  var imageContainer = $(".user-container");
    imageContainer.append(`
      <div class="center">
        <img src = "${input.val()}">
      </div>`)
}
