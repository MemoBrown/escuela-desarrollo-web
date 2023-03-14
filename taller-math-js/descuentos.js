const btnCalculate = document.getElementById("calculate")
const inputPrice = document.getElementById("price")
const inputCoupon = document.getElementById("coupon")
const result = document.getElementById("result")

btnCalculate.addEventListener("click", calculateDiscountPrice)

// const couponsObj = {
//   "cupon10": 10,
//   "cupon20": 20,
//   "cupon30": 30,
//   "cupon50": 50,
//   "cupon70": 70
// }

const couponsLits = []
couponsLits.push({
  name: "cupon10",
  discount: 10
})
couponsLits.push({
  name: "cupon20",
  discount: 20
})
couponsLits.push({
  name: "cupon30",
  discount: 30
})
couponsLits.push({
  name: "cupon50",
  discount: 50
})
couponsLits.push({
  name: "cupon70",
  discount: 70
})

function calculateDiscountPrice() {
  // (P * (100 - D)) / 100
  const price = Number(inputPrice.value)
  const coupon = inputCoupon.value
  let discount


  if (!price || !coupon) {
    Swal.fire({
      title: 'Error',
      text: 'Escribe el precio actual',
      icon: 'error',
      iconColor: "#BB3F64",
      confirmButtonColor: "#BB3F64",
      color: "#021026",
      allowOutsideClick: false,
      confirmButtonText: 'Volver a intentar'
    })
    return
  }

  function isCouponInArray(couponElement) {
    return couponElement.name == coupon
  }

  const couponFilter = couponsLits.filter(isCouponInArray)

  if (couponFilter.length > 0) {
    discount = couponFilter[0].discount
  } else {
    Swal.fire({
      title: 'Advertencia',
      text: 'El cupon ingresado no es valido',
      icon: 'warning',
      iconColor: "#D59A36",
      confirmButtonColor: "#D59A36",
      color: "#021026",
      allowOutsideClick: false,
      confirmButtonText: 'Volver a intentar'
    })
    return
  }

  // if (couponsObj[coupon]) {
  //   discount = couponsObj[coupon]
  // } else {
  //   Swal.fire({
  //     title: 'Advertencia',
  //     text: 'El cupon ingresado no es valido',
  //     icon: 'warning',
  //     iconColor: "#D59A36",
  //     confirmButtonColor: "#D59A36",
  //     color: "#021026",
  //     allowOutsideClick: false,
  //     confirmButtonText: 'Volver a intentar'
  //   })
  //   return
  // }
  const newPrice = (price * (100 - discount)) / 100

  result.innerText = `El nuevo precio con descuento es $${newPrice}`
}