// static async getLastActiveCart(req, res, next) {
//   try {
//     const { id } = req.params;

//     const lastCart = await Cart.find({ customerRef: id, active: true })
//       .sort({ dateEdited: -1 })
//       .limit(1)
//       .lean();

//     if (lastCart[0] != undefined) {
//       const cartRef = lastCart[0]._id;
//       const itemsInCart = await CartItem.find({ cartRef });

//       if (itemsInCart.length) {
//         let sum = itemsInCart.reduce((total, item) => {
//           return total + item.total;
//         }, 0);
//         sum = sum.toFixed(2);
//         const updateTotal = await Cart.findByIdAndUpdate(cartRef, { total: sum }, { new: true });
//         console.log('TCL: CartController -> getLastActiveCart -> updateTotal', updateTotal);

//         return res.status(200).json({
//           message: 'fetched last cart',
//           lastCart: updateTotal,
//         });
//       }

//       return res.status(200).json({
//         message: 'fetched last cart',
//         lastCart: lastCart,
//       });
//     } else {
//       return res.status(200).json({
//         message: 'no carts found for customerRef',
//         lastCart: 0,
//       });
//     }
//   } catch (error) {
//     error.statusCode = 500;
//     next(error);
//   }
// }