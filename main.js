status = ""
value = ""
function setup()
{
    canvas = createCanvas(700 , 600)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    video.size(700 , 600)
}
function start()
{
    objectDetector = ml5.objectDetector("cocossd" , modelloaded)
    document.getElementById("status").innerHTML = "STATUS : Detecting Objects"
    value = document.getElementById("input").value
}
function modelloaded()
{
    console.log("it finally worked . . . . . . . wait, what NOOOOOOOOOOOOOOOOOOO!!!!!!!!!!")
    status = true
}
function draw()
{
    image(video , 0 , 0 , 700 , 600)
}