let i = 10
let f = 20.5
let b = true
let s = 'Hà Nội'

document.write('i = ' + i)
document.write('<br>')
document.write('f = ' + f)
document.write('<br>')
document.write('b = ' + b)
document.write('<br>')
document.write('s = ' + s)

let width = 20
let height = 30
let area = width * height
document.write('<br><br>' + 'Area =' + area)

// a co phai boi so cua b hay khong
a = prompt("Nhap vao so a: ")
b = prompt("Nhap vao so b: ")
if (a%b) {
    alert("a khong chia het cho b")
}
else {
    alert("a chia het cho b")
}