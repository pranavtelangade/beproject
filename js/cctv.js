$("#file-upload").css("opacity", "0");

$("#file-browser").click(function(e) {
  e.preventDefault();
  $("#file-upload").trigger("click");
});

document.querySelector("input[type=file]")
  .onchange = function(event) {
    var files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      var f = files[i];
      // Only process video files.
      if (!f.type.match('video.*')) {
        continue;
      }

      var source = document.createElement('video'); //added now

      source.width = 280;

      source.height = 240;

      source.controls = true;

      source.src = URL.createObjectURL(files[i]);

      document.body.appendChild(source); // append `<video>` element

    }
  }