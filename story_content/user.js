function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ruc5cVD3VQ":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="media.mp3";
audio.load();
audio.play();
audio.volume =0.3;
}

